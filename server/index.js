var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.use(express.static('client'));

app.get('/', function (req, res) {
    res.status(200).send('Hello World!');
});

var messages = [{
    id: 1,
    text: 'Welcome to the private chat created with Socket.io and Node Js',
    nickname: 'Bot-lah'
}];

// Abrir conexion con socket
// Si un cliente se conecta recibimos un aviso en consola
io.on('connection', function (socket) {
    console.log('Client with IP ' + socket.handshake.address + ' is connected');

    // Transfer message to client
    socket.emit('messages', messages);

    socket.on('add-message', function (data) {
        messages.push(data);

        io.sockets.emit('messages', messages);
    });
});

server.listen(6677, function () {
    console.log('Server is running on http://localhost:6677');
});