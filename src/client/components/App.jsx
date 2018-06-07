import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import CanvasDraw from './CanvasDraw.jsx';


class App extends Component {
  render() {
    return <div>
        <div>
          <CanvasDraw/>
        </div>
        <div>
          <CanvasDraw/>
        </div>
        <div>
          <CanvasDraw/>
        </div>
      </div>
    
  }
}

export default App;