import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import ParentComponent from './components/ParentComponent';

class App extends Component {
  render() {
    return (
      <div className="App">
          <ParentComponent/>
      </div>
    );
  }
}

export default App;
