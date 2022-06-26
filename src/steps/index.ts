import { io } from '../http';

io.on("connection", (socket) => {
    console.log(`User Connected: ${socket.id}`);

    socket.on("join_room", (room) => {
        socket.join(room);
    });

    socket.on("step_confirmation", (data) => {
        socket.to(data.roomName).emit("received_confirmation", data.confirmation);
    });
});