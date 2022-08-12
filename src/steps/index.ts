import { io } from '../http';

let confirmation = false;

io.on("connection", (socket) => {
    console.log(`User Connected: ${socket.id}`);

    socket.on("join_room", (room) => {
        socket.join(room);
        io.in(room).emit("received_confirmation", confirmation);
    });

    socket.on("step_confirmation", (data) => {
        confirmation = data.confirmation;
        socket.to(data.roomName).emit("received_confirmation", confirmation);
    });
});