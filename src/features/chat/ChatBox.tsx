import React, { useEffect, useState } from 'react'
import { Box, Button, Paper, TextField } from '@mui/material';
import SendIcon from '@mui/icons-material/Send'

import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { getMsg, sendMsg } from './chatSlice';
import useStyles from './styles';
import { socket } from '../../connect/config';



const ChatBox: React.FC = () => {
    const dispatch = useAppDispatch()

    const classes = useStyles()
    const chat = useAppSelector((state) => state.chat.chat)
    const msg = useAppSelector((state) => state.chat.msg)
    // console.log(msg);

    const [msgInput, setMsgInput] = useState<string>('')

    const onSendMsg = (e: React.FormEvent) => {
        e.preventDefault()
        dispatch(sendMsg(msgInput))
    }

    useEffect(() => {
        // console.log('om');
        console.log(chat)
        socket.on("chat", (payload: string) => {
            dispatch(getMsg(payload))
        });
    }, [msg]);

    return (
        <Box component={"div"} className={classes.container} >
            <Paper elevation={24} className={classes.containerPaper} >
                {/* {chatLogs} */}
                <div className={classes.chatBoxLeft}>
                    {chat?.map((items, index) => {
                        return <span key={index}> {items} </span>
                    })}
                </div>
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
    )
}

export default ChatBox