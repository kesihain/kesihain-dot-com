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
            Hello and welcome! I'm glad you took an interest in my portfolio but this site isn't ready yet. Please contact me at kesihainselvarajoo@gmail.com or revisit this site in the near future
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
