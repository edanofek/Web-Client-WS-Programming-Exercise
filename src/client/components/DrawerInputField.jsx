import React, { Component } from 'react';
import PropTypes from 'prop-types';

class DrawerInputField extends Component {

    constructor(props) {
      super(props);
      this.state = {
          total: 0
      };
    }
  
    render() {
      
      //TODO:Con't here
  
      return 
        <input type='text' name='title' value='' />
      ;

    }
  }
  
  DrawerInputField.propTypes ={
    lockedForUsage:PropTypes.bool,
    id:propTypes.number,
    // drawerName:
  };
  
  export default DrawerInputField;