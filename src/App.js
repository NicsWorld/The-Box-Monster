import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Stage from './components/Stage';

class App extends Component {
  constructor(){
    super();
  }

  componentDidMount() {
    console.log('it mounted!');
    window.addEventListener('mousemove', (e) => {
      //turn to a function for both eyes
      let eyeLeft = document.querySelector('.monster-eye-left');
        let mouseX = (eyeLeft.getBoundingClientRect().left);
        let mouseY = (eyeLeft.getBoundingClientRect().top);
        let radianDegrees = Math.atan2(e.pageX - mouseX, e.pageY - mouseY);
        let rotationDegrees = (radianDegrees * (180/ Math.PI) * -1) + 180;
        eyeLeft.style.transform = `rotate(${rotationDegrees}deg)`;
    });
  }
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
