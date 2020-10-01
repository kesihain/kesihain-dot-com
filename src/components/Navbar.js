import React from 'react';
// import {Link} from 'react-router-dom';


function Navbar(){
    return (
        <nav className="navbar is-dark is-spaced level" role="navigation" aria-label="main-navigation">
            <div className="navbar-brand has-text-info-light level-left">
                <a className="navbar-item has-text-info-light" href="https://www.kesihain.com">
                    <img src={process.env.PUBLIC_URL+'/logo.png'} width="130px" alt="Kesihain"></img>
                </a>
                <p href="#" role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </p>
            </div>
            <div className="level-right">
                <a className="navbar-item has-text-info-light" href={process.env.PUBLIC_URL+'/Software_Developer_Kesihain_resume.pdf'} download>Download Resume</a>
            </div>
        </nav>
    )
}
export default Navbar