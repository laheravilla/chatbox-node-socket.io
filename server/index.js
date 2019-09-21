var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.get('/', function (req, res) {
    res.status(200).send('Hello World!');
});

server.listen(6677, function () {
    console.log('Server is running on http://localhost:6677');
});