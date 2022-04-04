import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { socket } from "../../connect/config";

interface ChatState {
  msg: { message: string; id: string };
  chat: { message: string | null; username: string | null }[];
}

const initialState: ChatState = {
  msg: { message: "", id: "" },
  chat: [{ message: null, username: null }],
};

export interface GetMsgAction {
  message: string;
  username: string;
}
export interface SendMsgAction {
  message: string;
  username: string;
}

export const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    sendMsg: (state, action: PayloadAction<SendMsgAction>) => {
      // state.msg = [...state.msg, action.payload];
      socket.emit("sendMsg", action.payload);
    },
    getMsg: (state, action: PayloadAction<GetMsgAction>) => {
      state.chat.push({
        message: action.payload.message,
        username: action.payload.username,
      });
    },
  },
});

export const { sendMsg, getMsg } = chatSlice.actions;
export default chatSlice.reducer;
