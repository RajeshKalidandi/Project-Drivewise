const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

let slots = [];

io.on('connection', (socket) => {
  console.log('New client connected');

  socket.emit('slots', slots);

  socket.on('addSlot', (slot) => {
    slots.push(slot);
    io.emit('slots', slots);
  });

  socket.on('removeSlot', (slotId) => {
    slots = slots.filter((slot) => slot.id !== slotId);
    io.emit('slots', slots);
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

const PORT = process.env.PORT || 4000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));