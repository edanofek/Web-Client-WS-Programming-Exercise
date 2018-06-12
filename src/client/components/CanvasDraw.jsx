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