// const socketIO = require('socket.io')
// const ioServer = socketIO()

// io is our WebSocket.io server
const io = require('socket.io')();

// Listen for new connections from clients (called sockets)
io.on('connection', function (socket) {
  console.log('Client connected to Socket.io');
});
