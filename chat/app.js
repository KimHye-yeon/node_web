var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(3000,function(){ //서버오픈
  console.log('listening on port 3000!');
})

app.get('/', function(req, res){ //localhost:3000에 접속하면 바로 client.html 호출
  console
  res.sendFile(__dirname + '/client.html');
});

io.on('connection', function(socket){
  socket.on('receive', function(from, msg){
    io.emit('client_receive', from +" : " +msg);
  })
})
