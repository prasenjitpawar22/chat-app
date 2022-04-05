import express = require("express");
import { createServer } from "http";
import { Server } from "socket.io";

const port = process.env.PORT || 5000;

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

server.listen(port, () => console.log("lsting on port", port));
