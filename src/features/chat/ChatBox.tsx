import React, { useEffect, useState } from 'react'
import { Box, Paper } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { sendMsg } from './chatSlice';


const ChatBox: React.FC = () => {
    const dispatch = useAppDispatch()
    const msg = useAppSelector((state) => state.chat.msg)
    // console.log(msg);

    const [msgInput, setMsgInput] = useState<string>('')

    const onSendMsg = (e: React.FormEvent) => {
        e.preventDefault()
        // sendMsg(msgInput)
        dispatch(sendMsg(msgInput))
    }

    return (
        <Box component={"div"}
            sx={{
                display: 'flex',
                flexDirection: 'column',
                // gap: 1,
                width: 700,
                height: 500,
            }}
        >
            <Paper elevation={3} sx={{
                width: 1, height: '450px',
                borderBottomRightRadius: 0, borderBottomLeftRadius: 0,
                backgroundColor: "#C73EA6",
                overflow: 'hidden',
                overflowY: 'scroll'
            }} >
                {/* {chatLogs} */}
                {msg?.map((items, index) => {
                    return <p key={index}> {items} </p>
                })}
            </Paper>
            <Paper elevation={3} sx={{
                flexGrow: 1, width: 1,
                borderTopRightRadius: 0, borderTopLeftRadius: 0,
                backgroundColor: "#993EC7"
            }} >
                <form onSubmit={onSendMsg}>
                    <input type="text" name="msg-input" value={msgInput} onChange={(e) => setMsgInput(e.target.value)} />
                    <input type="submit" value={'send'} />
                </form>
            </Paper>

        </Box >
    )
}

export default ChatBox