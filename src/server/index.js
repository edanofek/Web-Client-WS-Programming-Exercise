var express = require('express');
var app = express();
var path = require('path');
var fs = require('fs');
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

app.use('/build',express.static(path.resolve('../../build/')));
app.listen(browserPort); //listens on port 3000 -> http://localhost:3000/