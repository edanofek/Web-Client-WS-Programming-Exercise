var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var path = require('path');

var defaultPort = 3000;

app.get('/', function(req, res) { 
    res.sendFile(path.resolve('../../client/src/index.html'));
});

//Whenever someone connects this gets executed
io.on('connection', function(socket) {
    console.log('A user connected');
 
    //Whenever someone disconnects this piece of code executed
    socket.on('disconnect', function () {
       console.log('A user disconnected');
    });
 });
 
 http.listen(defaultPort, function() {
    console.log(`listening on *:${defaultPort}`);
 });