var SocketLogic = function(io){

    // TODO:Con't here

    //each line is holding canvas id,line history
    var line_history = [{}];

    
    for (var i in line_history) {
        socket.emit('draw_line', { line: line_history[i] } );
    }

};

module.exports = SocketLogic;