import React, { useEffect, useState } from 'react'
import { Box, Button, Container, Paper, TextField } from '@mui/material';
import SendIcon from '@mui/icons-material/Send'
import { nanoid } from 'nanoid';

import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { getMsg, GetMsgAction, sendMsg, SendMsgAction } from './chatSlice';
import useStyles from './styles';
import { socket } from '../../connect/config';

const id = nanoid(4)

const ChatBox: React.FC = () => {
    const dispatch = useAppDispatch()
    const classes = useStyles()
    const chat = useAppSelector((state) => state.chat.chat)
    const msg = useAppSelector((state) => state.chat.msg)
    // console.log(msg);

    const [msgInput, setMsgInput] = useState<string>('')

    const onSendMsg = (e: React.FormEvent) => {
        e.preventDefault()
        // console.log(id);
        // socket.emit('sendMsg', { message: msgInput, id })
        dispatch(sendMsg({ message: msgInput, username: id }))
        console.log('this is chat box', chat)
    }

    useEffect(() => {
        socket.on("chat", (payload: GetMsgAction) => {
            console.log(payload, 'from server chhat');

            dispatch(getMsg(payload))
        });
    }, [msg]);

    return (
        <Container maxWidth="sm">
            <Box component={"div"}>
                <Paper elevation={24} className={classes.containerPaper} >
                    {/* {chatLogs} */}
                    {<div className={classes.chatBoxLeft}>
                        {chat?.map((items, index) => {
                            return items?.message === null ? ''
                                : <div key={index} className={classes.chatWrapper}>
                                    <span className={classes.chatUsername} > {items.username} </span>
                                    <span className={classes.chat} key={index}>{items?.message}</span>
                                </div>
                        })}
                    </div>}
                    {/* <div className={classes.chatBoxRight}>
                    {msg?.map((items, index) => {
                        return <p key={index}> {items} </p>
                    })}
                </div> */}
                </Paper>
                <Paper elevation={3} sx={{
                    flexGrow: 1, width: 1,
                    borderTopRightRadius: 0, borderTopLeftRadius: 0,
                    backgroundColor: "#993EC7"
                }} >
                    <form onSubmit={onSendMsg} className={classes.form} >
                        <TextField id="standard-basic" label="Message" variant="standard"
                            className={classes.msgInput}
                            value={msgInput}
                            autoComplete="off"
                            onChange={(e) => setMsgInput(e.target.value)}
                            sx={{ flexGrow: 1 }}
                        />
                        <Button size='small' type="submit" variant="contained" endIcon={<SendIcon />}>
                            Send
                        </Button>
                    </form>
                </Paper>
            </Box >
        </Container>
    )
}

export default ChatBox