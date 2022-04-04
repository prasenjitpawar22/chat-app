import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { socket } from "../../connect/config";

interface ChatState {
  msg: string[];
  chat: string[];
}

const initialState: ChatState = {
  // data:
  msg: [""],
  chat: [""],
};

export const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    sendMsg: (state, action: PayloadAction<string>) => {
      // state.msg = [...state.msg, action.payload];
      socket.emit("sendMsg", action.payload);
    },
    getMsg: (state, action: PayloadAction<string>) => {
      console.log("in get msg");

      state.chat = [...state.chat, action.payload];
    },
  },
});

export const { sendMsg, getMsg } = chatSlice.actions;
export default chatSlice.reducer;
