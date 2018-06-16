import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DrawerInputField from './DrawerInputField.jsx';
import ClearCanvasBtn from './ClearCanvasBtn.jsx';

class CanvasDraw extends Component {

  constructor(props) {
    super(props);
    this.state = {
        
    };
  }

  componentDidMount(){
    
    const widthHeight = 200,processNumber = 3000;
    let canvas = document.getElementById('canvasDraw_'+this.props.id);
    let context = canvas.getContext('2d');
    let imageObj = new Image();

    imageObj.onload = function() {
      context.drawImage(imageObj, 0, 0);
    };
    imageObj.src = 'http://localhost:'+processNumber+'/image/'+this.props.id; 

    let clickX = new Array();
    let clickY = new Array();
    let clickDrag = new Array();
    let paint;
 
    canvas.addEventListener("mousedown",function(e){
      var mouseX = e.pageX - this.offsetLeft;
      var mouseY = e.pageY - this.offsetTop;
        
      paint = true;
      addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop);
      redraw();
    });
    canvas.addEventListener("mousemove",function(e){
      if(paint){
        addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop, true);
        redraw();
      }
    });
    canvas.addEventListener("mousedown",function(e){
      paint = false;
    });
    canvas.addEventListener("mouseleave",function(e){
      paint = false;
    });

    function addClick(x, y, dragging)
    {
      clickX.push(x);
      clickY.push(y);
      clickDrag.push(dragging);
    }

    function redraw(){
      context.clearRect(0, 0, context.canvas.width, context.canvas.height); // Clears the canvas
      
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

  render() {
    
    return <div className="CanvasDraw">
      <div>
        <canvas className="cavansBase"
          id={"canvasDraw_"+this.props.id}
        />
        <br/>
        <DrawerInputField
          id={this.props.id}
          drawerName={'DrawerInputField'}
        />
        <br/>
        <ClearCanvasBtn
          id={this.props.id}  
        />
      </div>
    </div>;

  }

}

CanvasDraw.propTypes ={
  id:PropTypes.number,
  lockedForUsage:PropTypes.bool,
};

export default CanvasDraw;