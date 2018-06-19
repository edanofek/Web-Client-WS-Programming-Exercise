import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ClearCanvasBtn extends Component {

    constructor(props) {
        super(props);
        this.state = {
            
        };
    }
    
    
    clearButtonHandler(){
        // console.info("clearButtonHandler");
        this.props.clearCanvasDrawing();
    }

    render() {
        
        return <div className="ClearCanvasBtn">
           <button onClick={this.clearButtonHandler.bind(this)}>Clear button</button>
        </div>;
    
    }
}

ClearCanvasBtn.propTypes ={
    id:PropTypes.number,
    clearCanvasDrawing:PropTypes.func,
  };
  
  export default ClearCanvasBtn;