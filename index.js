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

  socket.on('CUSTOM_EVENT_NAME', (msg)=>{  //receing data from the client to ther server though custom event
    console.log(msg)
  })






  // setInterval(function(){
  //   let date = new Date();
  //   let time = date.getTime();
  //   // socket.send(time);

  //   socket.emit("MY_CUSTOM_EVENT", time); //custom event
   
  // })

  // setInterval(function(){
  //   let date = new Date();
  //   let time = date.getTime();
  //   socket.send(time);
   
  // },5000)

  // setTimeout(function(){
  //     socket.send("send from server to client")
  // },5000)
  
  // socket.on('disconnect',()=>{
  //   console.log("user disconnected")
  // })
});

server.listen(3000, () => {
  console.log('server running at http://localhost:3000');
});
