var drawObject = function(){
    return{
        line:{},
        canvasID:-1
    };
}

var line_history = []; //array with history of draw object

var SocketLogic = function(io,socket){

    //Actions we want to deploy :
    //1.Draw entire lines that alrady have been drawn (related to the entire canvases)
    //2.Listen to draw lines reuqests from clients
    //3.Before enable drawing - neee to check the entire 

      // first send the history to the new client
    for (var i in line_history) {
        // console.info('let them know');
        // console.info(line_history[i]);
        socket.emit('draw_line', { line: line_history[i] } );
    }

    // add handler for message type "draw_line".
    
    socket.on('draw_line', function (data) {
        // add received line to history 
        
        var _drawObject = new drawObject();
        console.info(`canvas id : ${data.canvasID}`);

        _drawObject.canvasID = data.canvasID;
        _drawObject.line = {
            start:{
                x:data.start.x,
                y:data.start.y
            },
            end:{
                x:data.end.x,
                y:data.end.y
            }
        };
        line_history.push(_drawObject);
        // send line to all clients
        io.emit('draw_line', { line: _drawObject });
    });
    

};

module.exports = SocketLogic;