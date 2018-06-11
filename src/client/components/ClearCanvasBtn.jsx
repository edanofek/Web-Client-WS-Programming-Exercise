import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ClearCanvasBtn extends Component {

    constructor(props) {
        super(props);
        this.state = {
            
        };
    }
    
    
    clearButtonHandler(){
        console.info("clearButtonHandler");
    }

    render() {
        
        return <div className="ClearCanvasBtn">
           <button onClick={this.clearButtonHandler.bind(this)}>Clear button</button>
        </div>;
    
    }
}

ClearCanvasBtn.propTypes ={
    id:PropTypes.number,
  };
  
  export default ClearCanvasBtn;