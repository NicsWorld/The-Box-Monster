import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import React from 'react';
import Monster from './Monster';
import {About} from './About';
import {Kits} from './Kits';

export function Menu() {
  return(
    <Router>
    <div>
      <nav>
        <ul className="navigation">
          <li className="home-link">
            <Link to="/">Home</Link>
          </li>

          <li className="about-link">
            <Link to="about" >About</Link>
          </li>

          <li className="kits-link">
            <Link to="kits">Kits</Link>
          </li>
        </ul>
        </nav>
        <Route exact path="/" component={Monster}/>
        <Route path="/about" component={About} />
        <Route path="/kits" component={Kits} />
      </div>
    </Router>
  );
}
