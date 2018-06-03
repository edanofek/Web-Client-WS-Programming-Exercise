var express = require('express');
var app = express();
var path = require('path');

app.get('/', function(req, res) { 
    res.sendFile(path.resolve('./index.html'));
}); 

app.use('/build',express.static(path.resolve('./build/')));
app.listen(3000); //listens on port 3000 -> http://localhost:3000/