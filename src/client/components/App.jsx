import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import CanvasDraw from './CanvasDraw.jsx';


class App extends Component {
  render() {
    return <div className="row">
        <div className="col3d">
          <CanvasDraw/>
        </div>
        <div className="col3d">
          <CanvasDraw/>
        </div>
        <div className="col3d">
          <CanvasDraw/>
        </div>
        <div/>
        <div className="row">
          <CanvasDraw/>
        </div>
        <div className="col3d">
          <CanvasDraw/>
        </div>
        <div className="col3d">
          <CanvasDraw/>
        </div>
      </div>
    
  }
}

export default App;