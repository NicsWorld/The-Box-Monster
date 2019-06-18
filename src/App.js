import React, { Component } from 'react';
import './App.css';
import {Stage} from './components/Stage';

class App extends Component {
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <Stage/>
        </header>
      </div>
    );
  }
}

export default App;
