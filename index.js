const express = require('express');
const { createServer } = require('node:http');
const { Server } = require('socket.io');
const { join } = require('path'); // Add this line

const app = express();

const server = createServer(app);
const io = new Server(server);

app.get('/', (req, res) => {
  res.sendFile(join(__dirname, 'index.html'));
});

io.on('connection', (socket) => {
  console.log('a user connected');
});

server.listen(3000, () => {
  console.log('server running at http://localhost:3000');
});
