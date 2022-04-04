import express = require("express");
import { createServer } from "http";
import { Server } from "socket.io";

import {
  ClientToServerEvents,
  InterServerEvents,
  ServerToClientEvents,
  SocketData,
} from "./types";

const app = express();
const server = createServer(app);
const io = new Server<
  ClientToServerEvents,
  ServerToClientEvents,
  InterServerEvents,
  SocketData
>(server, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  socket.on("sendMsg", (payload) => {
    console.log(payload);

    io.emit("chat", payload);
  });
  // console.log("what is socket id:", socket.id);
});

server.listen(3100, () => console.log("lsting on port 3100"));
