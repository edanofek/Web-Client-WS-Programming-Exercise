
class CanvasLogic {
    
    
    constructor(canvasObject){
        this.canvasObject = canvasObject;
    }

    logicDrawingInit(){

        let self = this;
        let clickX = new Array();
        let clickY = new Array();
        let clickDrag = new Array();
        let paint = false;

        this.canvasObject.addEventListener("mousedown",function(e){
            var mouseX = e.pageX - this.offsetLeft;
            var mouseY = e.pageY - this.offsetTop;
                
            paint = true;
            addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop);
            redraw(self.canvasObject);
        });
    
        this.canvasObject.addEventListener("mousemove",function(e){
            if(paint){
                addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop, true);
                redraw(self.canvasObject);
            }
        });
        
        this.canvasObject.addEventListener("mouseup",function(e){
            paint = false;
        });

        this.canvasObject.addEventListener("mouseleave",function(e){
            paint = false;
        });
    
        function addClick(x, y, dragging){
          clickX.push(x);
          clickY.push(y);
          clickDrag.push(dragging);
        }
        
        function redraw(canvasObject){
          
           let context = canvasObject.getContext('2d');
           context.strokeStyle = "#df4b26";
           context.lineJoin = "round";
           context.lineWidth = 5;
              
            for(var i=0; i < clickX.length; i++) {		
                context.beginPath();
            if(clickDrag[i] && i){
                context.moveTo(clickX[i-1], clickY[i-1]);
                }else{
                context.moveTo(clickX[i]-1, clickY[i]);
                }
                context.lineTo(clickX[i], clickY[i]);
                context.closePath();
                context.stroke();
            }
        }
    }

    logicClearCanvas(){

        let context = this.canvasObject.getContext('2d');
        context.clearRect(0, 0, this.canvasObject, this.canvasObject);
    }

    logicSetImage(imageObj){
        let context = this.canvasObject.getContext('2d');
        context.drawImage(imageObj, 0, 0);
    }

}
    
  export default CanvasLogic;