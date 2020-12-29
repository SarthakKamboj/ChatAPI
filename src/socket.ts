import express from "express";

const app = express();
const http = require('http').createServer(app);
import { Server, Socket } from "socket.io";

const io = new Server({
    cors: {
        origin: "*"
    }
});

io.on('connection', (socket: Socket) => {

    socket.on("create chat", () => {

    })

    socket.on("join room", (roomName) => {
        socket.join(roomName)
    })
});

const PORT = 3000
http.listen(PORT, () => {
    console.log(`listening on ${PORT}`);
});