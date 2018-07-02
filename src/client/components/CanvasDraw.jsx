import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DrawerInputField from './DrawerInputField.jsx';
import ClearCanvasBtn from './ClearCanvasBtn.jsx';
import CanvasLogic from '../js/CanvasLogic.js'
import socketIOClient from 'socket.io-client'

class CanvasDraw extends Component {

  constructor(props) {

    super(props);
    this.state = {
      showCanvasRedBorder:false
    };

    this.canvasLogic = null;
    this.imageObj = new Image();
    this.drawerName = "";

  }

  componentDidMount(){
    
    const protNumber = 3000;
    let canvas = document.getElementById('canvasDraw_'+this.props.id);
    let context = canvas.getContext('2d');
    
    let self = this;
    this.imageObj.onload = function() {
      context.drawImage(self.imageObj, 0, 0);
      context.save();
    };

    this.imageObj.src = 'http://localhost:'+protNumber+'/image/'+this.props.id; 

    this.canvasLogic = new CanvasLogic(canvas,this.props.id);
    this.canvasLogic.logicDrawingInit(); //create and handle canvas drawing logic
  
    const socket = socketIOClient(`http://localhost:${protNumber}`);

    socket.on('lock_canvas_for_drawing',function(data){
      
      if(data.canvasID === self.props.id){
        self.setState({
          showCanvasRedBorder : true
        });

        self.drawerName = data.drawerName;
        
        //lock the canvas for usage for 5 seconeds stop drawing 
        self.canvasLogic.setEnableDrawing(false);
        setTimeout(()=>{
          self.canvasLogic.setEnableDrawing(true);
          self.drawerName = undefined;
          self.setState({
            showCanvasRedBorder : false
          });
        },5000);
      }
    });

  }

  render() {
    return <div className="CanvasDraw">
      <div>
        <span 
          className={ (this.drawerName !== undefined && this.drawerName.length > 0) ? "visible" : "not_visible"}>
          <b>{this.drawerName}</b>
        </span>
        <br className={ (this.drawerName !== undefined && this.drawerName.length > 0) ? "visible" : "not_visible"}/>
        <canvas className={["canvasBase",
        (this.state.showCanvasRedBorder ? 
        "showCanvasRedBorder":
        "showCanvasClearBorder")].join(' ')}
          id={"canvasDraw_"+this.props.id}
        />
        <br/>
        <DrawerInputField
          id={this.props.id}
          drawerName={'DrawerInputField'}
          onDrawingNameChange={this.onDrawingNameChange.bind(this)}
        />
        <br/>
        <ClearCanvasBtn
          id={this.props.id}  
          clearCanvasDrawing={this.clearCanvasDrawing.bind(this)}
        />
      </div>
    </div>;

  }

  clearCanvasDrawing(){

    this.canvasLogic.logicClearCanvas(); //clear canvas drawing
    this.canvasLogic.logicSetImage(this.imageObj);
    //create and handle canvas drawing logiconDrawingNameChange
    this.canvasLogic.logicDrawingInit(); 

  }
  
  onDrawingNameChange(value){
    
    //input and change the border canvas border color
    this.canvasLogic.setEnableDrawing((value.length > 0));

    //change the color of the border to each canvas
    this.canvasLogic.setDrawerName(value);

    this.setState({
      showCanvasRedBorder : (value.length > 0)
    });

  }

}

CanvasDraw.propTypes ={
  id:PropTypes.number,
  lockedForUsage:PropTypes.bool,
};

export default CanvasDraw;