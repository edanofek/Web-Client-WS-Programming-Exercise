import openSocket from 'socket.io-client';

class CanvasLogic {
    
    
    constructor(canvasObject,canvasID){

        this.canvasObject = canvasObject;
        this.canvasID = canvasID;
        this.enableDrawing = false;
        this.clickX = new Array();
        this.clickY = new Array();
        this.clickDrag = new Array();
        this.paint = false;

    }

    logicDrawingInit(){

        let self = this;
        const socket = openSocket('http://localhost:3000');

        this.canvasObject.addEventListener("mousedown",function(e){
            var mouseX = e.pageX - this.offsetLeft;
            var mouseY = e.pageY - this.offsetTop;
                
            if(self.enableDrawing === true){
                self.paint = true;
                addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop);
                redraw(self.canvasObject);
            }else{
                self.paint = false;
            }
            
        });
    
        this.canvasObject.addEventListener("mousemove",function(e){
        
            if(self.paint){
                addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop, true);
                redraw(self.canvasObject);
            }

        });
        
        this.canvasObject.addEventListener("mouseup",function(e){
            self.paint = false;
        });

        this.canvasObject.addEventListener("mouseleave",function(e){
            self.paint = false;
        });
    
        function addClick(x, y, dragging){
            self.clickX.push(x);
            self.clickY.push(y);
            self.clickDrag.push(dragging);
        }
        
        function redraw(canvasObject){
        
            let context = canvasObject.getContext('2d');
            context.strokeStyle = "#df4b26";
            context.lineJoin = "round";
            context.lineWidth = 5;
            let startObj = {};

            for(var i=0; i < self.clickX.length; i++) {		
                context.beginPath();
            if(self.clickDrag[i] && i){
                context.moveTo(self.clickX[i-1], self.clickY[i-1]);
                startObj={
                        x:self.clickX[i-1],
                        y:self.clickY[i-1]
                    };
                }else{
                context.moveTo(self.clickX[i]-1, self.clickY[i]);
                startObj={
                    x:self.clickX[i]-1,
                    y:self.clickY[i]
                };

                }
                context.lineTo(self.clickX[i], self.clickY[i]);
                socket.emit('draw_line', {
                    start:startObj,
                    end:{
                        x:self.clickX[i],
                        y:self.clickY[i]

                    },
                    canvasID:self.canvasID
                });

                context.closePath();
                context.stroke();
            }
            
        }

        socket.on('draw_line',function(data){
            
            if(self.canvasID === data.line.canvasID){
                let context = self.canvasObject.getContext('2d');
                context.strokeStyle = "#df4b26";
                context.lineJoin = "round";
                context.lineWidth = 5;
                //draw on the canvas
                context.moveTo(data.line.start.x, data.line.start.y);
                context.lineTo(data.line.end.x, data.line.end.y);
                context.closePath();
                context.stroke();
            }
        });
    }

    logicClearCanvas(){

        let context = this.canvasObject.getContext('2d');
        this.clickX = new Array();
        this.clickY = new Array();
        this.clickDrag = new Array();
        
        context.restore();
    }

    logicSetImage(imageObj){
        let context = this.canvasObject.getContext('2d');
        context.drawImage(imageObj, 0, 0);
    }

    freeDrawing(status){
        this.enableDrawing = status;
    }

}
    
export default CanvasLogic;