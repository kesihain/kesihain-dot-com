import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import {Switch} from 'react-router-dom';

function App() {
  return (
    <div className="App has-background-info-light">
      <Navbar></Navbar>
      <section className="hero is-medium">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">
              Full-stack Developer
            </h1>
            <h2 className="subtitle">
              Highly motivated and self driven individual who has the ability to work with other individuals to think critically in high pressure situations and form unique yet simple solutions.
              I have the ability to think analytically and apply logic. As a result I take pride and pleasure in piecing quality, readable code
            </h2>
          </div>
        </div>
      </section>
      <Switch>

      </Switch>
    </div>
  );
}

export default App;
