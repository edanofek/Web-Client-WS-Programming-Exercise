import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DrawerInputFiled from 'DrawerInputFiled';

class CanvasDraw extends Component {

  constructor(props) {
    super(props);
    this.state = {
        
    };
  }

  render() {
    
    //TODO:Con't here

    return <h2>drawer name</h2>;
  }
}

CanvasDraw.propTypes ={
  lockedForUsage:PropTypes.bool,
  id:propTypes.number,
  // drawerName:
};

export default CanvasDraw;