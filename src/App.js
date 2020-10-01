import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import {Switch} from 'react-router-dom';

let skills_data=[
  {name:"HTML",img_url:process.env.PUBLIC_URL+'/html-logo.png'},
  {name:"CSS",img_url:"https://cdn.worldvectorlogo.com/logos/css3.svg"},
  {name:"Bootstrap",img_url:process.env.PUBLIC_URL+'/bootstrap.png'},
  {name:"Bulma",img_url:process.env.PUBLIC_URL+'/bulma.png'},
  {name:"Javascript",img_url:process.env.PUBLIC_URL+'/javascript.png'},
  {name:"React",img_url:"https://seeklogo.com/images/R/react-logo-7B3CE81517-seeklogo.com.png"},
  {name:"React-Native",img_url:process.env.PUBLIC_URL+'/react-native.png'},
  {name:"Python",img_url:process.env.PUBLIC_URL+'/python.png'},
  {name:"Flask",img_url:process.env.PUBLIC_URL+'/flask.png'},
  {name:"SQLite",img_url:"https://dwglogo.com/wp-content/uploads/2018/03/SQLite_Vector_logo.png"},
  {name:"PostgreSQL",img_url:"https://cdn.worldvectorlogo.com/logos/postgresql.svg"},
  {name:"Git",img_url:"https://cdn.worldvectorlogo.com/logos/git-icon.svg"}
]

function App() {
  return (
    <div className="App has-background-info-light">
      <Navbar></Navbar>
      <section className="hero is-medium">
        <div className="hero-body">
          <div className="container">
            <h1 className="title mb-6 pb-2">
              FULL-STACK DEVELOPER
            </h1>
            <h2 className="subtitle">
              Highly motivated and self driven individual who has the ability to work with other individuals to think critically in high pressure situations and form unique yet simple solutions.
            </h2>
            <h2 className="subtitle">
              I have the ability to think analytically and apply logic. As a result I take pride and pleasure in piecing quality, readable code.
            </h2>
          </div>
        </div>
      </section>
      <section className="container px-6">
        <h2 className="title">Skills</h2>
        <div className= "columns is-4 is-variable is-multiline">
          {skills_data.map((item)=>(
            <div className="column is-2" key={item.name}>
              <div className= "card">
                <div className="card-header">
                  <header className="card-header-title is-centered">
                    {item.name}
                  </header>
                </div>
                <figure className="image container is-128x128">
                  <img src={item.img_url} alt={item.name}></img>
                </figure >
              </div>
            </div>
          ))}
        </div>
      </section>
      <footer className="footer has-background-dark mt-6">
        <div className="columns is-centered">
          <div className="column is-5"></div>
          <a className="column" href="https://www.linkedin.com/in/kesihain-selvarajoo-47a189143/"><img src="https://cdn2.iconfinder.com/data/icons/on-point-social-media/141/LinkedIn-512.png" alt="LinkedIn" width="50" height="50"/></a>
          <a className="column" href="https://github.com/kesihain"><img src={process.env.PUBLIC_URL+'/github.png'} alt="Github" width="50" height="50"/></a>
          <div className="column is-5"></div>
        </div>
      </footer>
      <Switch>

      </Switch>
    </div>
  );
}

export default App;
