var express = require('express');
var app = express();
var path = require('path');
var fs = require('fs');

var http = require('http');
var socketIo = require('socket.io');
var socketLogic = require('./SocketLogic/index.js');

var browserPort = 3000;

app.get('/', function(req, res) { 
    res.sendFile(path.resolve('../../index.html'));
}); 


app.get('/image/:imageID', function(req, res) {
    fs.readFile(path.resolve('./assets/backdraw_'+req.params['imageID']+'.png'),function(err,data){
        try{

            if (err) {
                return console.error(err);
            }
            
            res.send(data);

        }catch(e){
            console.error(e);
        }
    });
    
}); 

var server = http.createServer(app);
var io = socketIo.listen(server);

io.on('connection', function (socket) {

    // TODO:Con't here
});

server.listen(browserPort);
app.use('/build',express.static(path.resolve('../../build/')));
console.log("Server running on 127.0.0.1:"+browserPort);
//listens on port 3000 -> http://localhost:3000/

