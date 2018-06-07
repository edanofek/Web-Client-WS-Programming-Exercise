import React, { Component } from 'react';
import PropTypes from 'prop-types';

class DrawerInputField extends Component {

    constructor(props) {
      super(props);
      this.state = {
          drawerName: ''
      };
    }
  
    render() {
      
      //TODO:Con't here
  
      return 
        <input type='text' name='title' value={this.state.drawerName} />
      ;

    }
  }
  
  DrawerInputField.PropTypes ={
    id:PropTypes.number,
    drawerName:PropTypes.string,
  };
  
  export default DrawerInputField;