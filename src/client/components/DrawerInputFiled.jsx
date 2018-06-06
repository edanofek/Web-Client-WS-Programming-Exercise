import React, { Component } from 'react';
import PropTypes from 'prop-types';

class DrawerInputFiled extends Component {

    constructor(props) {
      super(props);
      this.state = {
          total: 0
      };
    }
  
    render() {
      
      //TODO:Con't here
  
      return 
        <input type='text' name='title' value='Mr.' />
      ;
    }
  }
  
  CanvasDraw.propTypes ={
    lockedForUsage:PropTypes.bool,
    id:propTypes.number,
    // drawerName:
  };
  
  export default DrawerInputFiled;