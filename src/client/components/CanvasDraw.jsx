import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DrawerInputFiled from './DrawerInputField.jsx';
import DrawerInputField from './DrawerInputField.jsx';

class CanvasDraw extends Component {

  constructor(props) {
    super(props);
    this.state = {
        
    };
  }

  render() {
    
    //TODO:Con't here
    return <div>
      <DrawerInputField
      />
    </div>;

  }
}

CanvasDraw.PropTypes ={
  lockedForUsage?:PropTypes.bool,
  id?:PropTypes.number,
};

export default CanvasDraw;