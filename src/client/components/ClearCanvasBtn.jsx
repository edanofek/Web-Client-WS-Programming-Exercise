import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ClearCanvasBtn extends Component {

    constructor(props) {
        super(props);
        this.state = {
            
        };
    }
    
    render() {
        
        return <div className="ClearCanvasBtn">
           ClearCanvasBtn
        </div>;
    
    }
}

ClearCanvasBtn.propTypes ={
    id:PropTypes.number,
  };
  
  export default ClearCanvasBtn;