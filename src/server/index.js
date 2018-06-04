var express = require('express');
var app = express();
var path = require('path');
var fs = require('fs');

app.get('/', function(req, res) { 
    res.sendFile(path.resolve('./index.html'));
}); 


app.get('/image/:imageID', function(req, res) {
    fs.open('/assets/backdraw'+req.params['imageID']+'',function(err,data){
        try{
            
        }catch(e){
            console.error(e);
        }
    });
    
}); 

app.use('/build',express.static(path.resolve('./build/')));
app.listen(3000); //listens on port 3000 -> http://localhost:3000/