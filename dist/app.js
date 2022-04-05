"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const http_1 = require("http");
const socket_io_1 = require("socket.io");
const port = process.env.PORT || 5000;
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
server.listen(port, () => console.log("lsting on port", port));
//# sourceMappingURL=app.js.map