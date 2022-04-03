import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ChatState {
  msg: string[];
}

const initialState: ChatState = {
  // data:
  msg: [""],
};

export const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    sendMsg: (state, action: PayloadAction<string>) => {
      state.msg = [...state.msg, action.payload];
    },
  },
});

export const { sendMsg } = chatSlice.actions;
export default chatSlice.reducer;
