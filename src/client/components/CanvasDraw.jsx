import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DrawerInputField from './DrawerInputField.jsx';
import ClearCanvasBtn from './ClearCanvasBtn.jsx';
import CanvasLogic from '../js/CanvasLogic.js'

class CanvasDraw extends Component {

  constructor(props) {

    super(props);
    this.state = {
      showCanvasRedBorder:false
    };

    this.canvasLogic = null;
    
    this.imageObj = new Image();

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

    this.canvasLogic = new CanvasLogic(canvas);
    this.canvasLogic.logicDrawingInit(); //create and handle canvas drawing logic
    
  }

  render() {

    return <div className="CanvasDraw">
      <div>
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
    this.canvasLogic.logicDrawingInit(); //create and handle canvas drawing logiconDrawingNameChange

  }
  
  onDrawingNameChange(value){
    
    //TODO:fill this area with
    //input and change the border canvas border color

    this.canvasLogic.freeDrawing((value.length > 0));

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