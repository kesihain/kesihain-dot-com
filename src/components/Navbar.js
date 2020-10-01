import React from 'react';
// import {Link} from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

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
                {/* <div class="dropdown is-hoverable">
                    <div class="dropdown-trigger">
                        <button class="button" aria-haspopup="true" aria-controls="dropdown-menu">
                        <span>Contact me</span>
                        <span class="icon is-small">
                            <FontAwesomeIcon icon={faAngleDown} />
                        </span>
                        </button>
                    </div>
                    <div class="dropdown-menu" id="dropdown-menu" role="menu">
                        <div class="dropdown-content">
                        <a href="mailto:kesihainselvarajoo@gmail.com" class="dropdown-item">
                            Email me
                        </a>
                        <a class="dropdown-item">
                            Drop Message
                        </a>
                        </div>
                    </div>
                </div> */}
                <a className="navbar-item has-text-info-light" href="mailto:kesihainselvarajoo@gmail.com">Email me</a>
                <a className="navbar-item has-text-info-light" href={process.env.PUBLIC_URL+'/Software_Developer_Kesihain_resume.pdf'} download>Download Resume</a>
            </div>
        </nav>
    )
}
export default Navbar