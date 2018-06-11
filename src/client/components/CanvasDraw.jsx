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

  render() {
    
    return <div className="CanvasDraw">
      <canvas className="cavansBase"/>
      <DrawerInputField
        id={this.props.id}
        drawerName={'DrawerInputField'}
      />
      
      <ClearCanvasBtn
        id={this.props.id}  
      />
      
    </div>;

  }

}

CanvasDraw.propTypes ={
  lockedForUsage:PropTypes.bool,
  id:PropTypes.number,
};

export default CanvasDraw;