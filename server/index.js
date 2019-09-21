var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.use(express.static('client'));

app.get('/', function (req, res) {
    res.status(200).send('Hello World!');
});

// Abrir conexion con socket
// Si un cliente se conecta recibimos un aviso en consola
io.on('connection', function (socket) {
    console.log('Client with IP' + socket.handshake.address + 'is connected');
});

server.listen(6677, function () {
    console.log('Server is running on http://localhost:6677');
});