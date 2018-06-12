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
      
      return <input className="DrawerInputField" type='text' name={'title_'+this.props.id} value={this.state.drawerName} />
      ;

    }
  }
  
  DrawerInputField.propTypes ={
    id:PropTypes.number,
    drawerName:PropTypes.string,
  };
  
  export default DrawerInputField;