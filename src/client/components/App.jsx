import React, { Component } from 'react';
import CanvasDraw from './CanvasDraw.jsx';


class App extends Component {
  render() {
    return <div className="container">
        <div className="row">
          <div className="col3rd">
            <CanvasDraw/>
          </div>
          <div className="col3rd">
            <CanvasDraw/>
          </div>
          <div className="col3rd">
            <CanvasDraw/>
          </div>
        </div>
        <div/>
        <div className="row">
          <div className="col3rd">
            <CanvasDraw/>
          </div>
          <div className="col3rd">
            <CanvasDraw/>
          </div>
          <div className="col3rd">
            <CanvasDraw/>
          </div>
        </div>
      </div>
    
  }
}

export default App;