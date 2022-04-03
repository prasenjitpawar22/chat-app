import React, { useEffect, useState } from 'react';
import './App.css';
import { socket } from './connect/config';
import { sendMsg } from './features/chat/chatSlice';

//components
import ChatBox from './features/chat/ChatBox';

const App: React.FC = () => {



  return (
    <div className="App">
      <ChatBox />

    </div>
  );
}

export default App;
