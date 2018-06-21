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
      
      return <input className="DrawerInputField" type='text' 
        name={'title_'+this.props.id} value={this.state.drawerName}
        onChange={this.onDrawingNameChange.bind(this)}
         />
      ;

    }

    onDrawingNameChange(e){
      
      this.setState({
        drawerName:e.target.value
      });

      this.props.onDrawingNameChange(e.target.value);
    }

  }

  
  DrawerInputField.propTypes ={
    id:PropTypes.number,
    drawerName:PropTypes.string,
    onDrawingNameChange:PropTypes.func,
  };
  
  export default DrawerInputField;