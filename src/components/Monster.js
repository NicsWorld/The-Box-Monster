import React, { Component } from 'react';
import {eyeTracking} from '../utils/eye-tracking';


class Monster extends Component{

  componentDidMount(){
    eyeTracking();
  }

render(){
return(
  <div className="box">
    <div className="monster">
      <div className="monster-body">

      <div className="eyes">

        <div className="monster-eye-lid-left">
        <div className="monster-eyes-left">
          <div className="monster-eye-left"></div>
        </div>
        </div>

        <div className="monster-eye-lid-right">
        <div className="monster-eyes-right">
          <div className="monster-eye-right"></div>
        </div>
        </div>

      </div>

        <div className="monster-mouth">
          <div className="monster-tooth"></div>
          <div className="monster-tooth2"></div>
        </div>

      </div>
    </div>
  </div>
);
}
}
export default Monster;
