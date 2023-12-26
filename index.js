const express = require('express');
const { createServer } = require('node:http');
const { Server } = require('socket.io');
const { join } = require('path'); // Add this line

const app = express();

const server = createServer(app);
const io = new Server(server);


let buyNsp = io.of("/buy");
buyNsp.on('connection',(socket)=>{
  buyNsp.emit("MyEvent","Hello buy")
})

let sellNsp = io.of("/sell");
buyNsp.on('connection',(socket)=>{
  sellNsp.emit("MyEvent","Hello sell")
})



// io.on('connection', (socket) => {
//   // console.log('a user connected');
//   io.sockets.emit("MyBroadcast","hello how are you?");
// });

app.get('/', (req, res) => {
  res.sendFile(join(__dirname, 'index.html'));
});


server.listen(3000, () => {
  console.log('server running at http://localhost:3000');
});
