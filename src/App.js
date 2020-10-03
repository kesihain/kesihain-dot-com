import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import {Switch} from 'react-router-dom';
import ResponsiveEmbed from 'react-responsive-embed'

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

const body={
  backgroundColor:"#f2f2f2"
}

function App() {
  return (
    <div className="App" style={body}>
      <Navbar></Navbar>
      <section className="jumbotron">
        <div className="hero-body">
          <div className=" box py-6 container">
            <h1 className="title is-1 my-6 pb-2">
              FULL-STACK DEVELOPER
            </h1>
            <h2 className="subtitle has-text-justified mx-6 mb-6">
              Highly motivated and self driven individual with the ability to work with other individuals to think critically in high pressure situations and form unique yet simple solutions.
              I have the ability to think analytically and apply logic. As a result I take pride and pleasure in piecing quality, readable code.
            </h2>
          </div>
        </div>
      </section>
      <section className="box container my-6 py-6">
        <h2 className="title mb-6">Portfolio Projects</h2>
        <div className="container columns">
          {/* <div className="column is-2"></div> */}
          <div className="card mx-6 py-4 column is-flex-tablet">
            <div className="memori-vid p-5">
              <h5 className="title is-4">Memori</h5>
              {/* <iframe title="Memori Video" className="pl-0 ml-0" width="560" height="315" src="https://www.youtube.com/embed/QpS9Y9f1dbA" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> */}
              <ResponsiveEmbed src="https://www.youtube.com/embed/QpS9Y9f1dbA" allowFullScreen/>
            </div>
            <div className="memori-des memori-border-left p-5">
              <h6 className="title is-5 mb-1">Description</h6>
              <p className="is-size-7">Mobile app which allows users to save locations of choice with reminders.The app then sends push notifications to user reminding them of items or tasks they have set when entering or leaving the set locations</p>
              <h6 className="title is-5 mt-4 mb-3">Technologies used</h6>
              <p className="is-size-7">1. React-Native</p>
              <p className="is-size-7">2. Expo</p>
              <p className="is-size-7">3. Flask</p>
              <div className="mt-2">
                <a className=" is-size-6" href="https://github.com/kesihain/memori-front-end">Front-end github repo</a>
              </div>
                <a className=" is-size-6" href="https://github.com/kesihain/memori-back-end">Back-end github repo</a>
            </div>
          </div>
        </div>
        {/* <div className="mx-6 columns my-4">
          <div className="card column is-4">
            <h5 className="title is-4">Flask Nextagram</h5>
          </div>
        </div> */}
      </section>
      <section className=" box my-6 container px-6">
        <h2 className="title">Skills</h2>
        <div className= "columns is-4 py-4 is-variable is-multiline">
          {skills_data.map((item)=>(
            <div className="column is-3" key={item.name}>
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
