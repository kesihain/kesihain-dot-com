import React from 'react';
// import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

function Navbar(){
    return (
        <nav className="navbar is-dark is-spaced level" role="navigation" aria-label="main-navigation">
            <div className="navbar-brand has-text-info-light level-left">
                <a className="navbar-item has-text-info-light" href="https://www.kesihain.com">
                    <img src={process.env.PUBLIC_URL+'/logo.png'} width="130px" alt="Kesihain"></img>
                </a>
                {/* <p href="#" role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </p> */}
            </div>
            <div className="level-right">
                <div className="dropdown is-hoverable">
                    <div className="dropdown-trigger">
                        <button className="button" aria-haspopup="true" aria-controls="dropdown-menu">
                        <span>Contact me</span>
                        <span className="icon is-small">
                            <FontAwesomeIcon icon={faAngleDown} />
                        </span>
                        </button>
                    </div>
                    <div className="dropdown-menu has-background-dark" id="dropdown-menu" role="menu">
                        <div className="dropdown-content">
                            <a href="mailto:kesihainselvarajoo@gmail.com" className="dropdown-item mt-0 mb-1 px-2 box has-background-grey-light">
                                Email me
                            </a>
                            {/* <a className="dropdown-item my-1 px-2 box has-background-grey-light">
                                Drop Message
                            </a> */}
                            <a className="column my-1 box has-background-grey-light" href="https://www.linkedin.com/in/kesihain-selvarajoo-47a189143/"><img className="my-0" src="https://cdn2.iconfinder.com/data/icons/on-point-social-media/141/LinkedIn-512.png" alt="LinkedIn" width="30" height="30"/></a>
                            <a className="column mt-1 mb-0 box has-background-grey-light" href="https://github.com/kesihain"><img className="my-0" src={process.env.PUBLIC_URL+'/githubblack.png'} alt="Github" width="30" height="30"/></a>
                        </div>
                    </div>
                </div>
                {/* <a className="navbar-item has-text-info-light" href="mailto:kesihainselvarajoo@gmail.com">Email me</a> */}
                <a className="navbar-item has-text-info-light" href={process.env.PUBLIC_URL+'/Full_Stack_Developer_Kesihain_resume.pdf'} download>Download Resume</a>
            </div>
        </nav>
    )
}
export default Navbar