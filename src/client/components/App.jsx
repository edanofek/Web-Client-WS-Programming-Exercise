import React, { Component } from 'react';
import CanvasDraw from './CanvasDraw.jsx';


class App extends Component {
  render() {
    return <div className="container">
        <div className="row">
          <div className="col3rd">
            <CanvasDraw id={1}/>
          </div>
          <div className="col3rd">
            <CanvasDraw id={2}/>
          </div>
          <div className="col3rd">
            <CanvasDraw id={3}/>
          </div>
        </div>
        <div/>
        <div className="row">
          <div className="col3rd">
            <CanvasDraw id={4}/>
          </div>
          <div className="col3rd">
            <CanvasDraw id={5}/>
          </div>
          <div className="col3rd">
            <CanvasDraw id={6}/>
          </div>
        </div>
      </div>
    
  }
}

export default App;