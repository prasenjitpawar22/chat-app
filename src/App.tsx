import React, { useEffect, useState } from 'react';
import './App.css';
import { socket } from './connect/config';
import { getMsg, sendMsg } from './features/chat/chatSlice';

//components
import ChatBox from './features/chat/ChatBox';
import { useAppDispatch } from './app/hooks';

const App: React.FC = () => {
  // useEffect(() => {
  //   console.log('in');
  // })

  return (
    <div className="App">
      <ChatBox />
    </div>
  );
}

export default App;
