import React, { Component } from 'react';
import CanvasDraw from './CanvasDraw.jsx';


class App extends Component {
  render() {
    return <div className="wrapper">
            <div class="box">
              <CanvasDraw id={1}/>
            </div>
            <div class="box">
              <CanvasDraw id={2}/>
            </div>
            <div class="box">
              <CanvasDraw id={3}/>
            </div>
            <div class="box">
              <CanvasDraw id={4}/>
            </div>
            <div class="box">
              <CanvasDraw id={5}/>
            </div>
            <div class="box">
              <CanvasDraw id={6}/> 
            </div>
      </div>
    
  }
}

export default App;