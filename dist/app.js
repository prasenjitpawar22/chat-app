"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const http_1 = require("http");
const socket_io_1 = require("socket.io");
const app = express();
const server = (0, http_1.createServer)(app);
const io = new socket_io_1.Server(server, {
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
//# sourceMappingURL=app.js.map