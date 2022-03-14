import React from 'react'
import logo from '../logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <header className="header_wrapper">
        <nav className="navbar navbar-expand-lg fixed-top">
            <div className="container-fluid">
                <a className="navbar-brand" href="*">
                   <img src={logo} alt='logo'/>
                </a>
                <button className="navbar-toggler pe-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    <FontAwesomeIcon icon={faBars} />
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav menu-navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#home">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#about">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#features">Features</a>
                        </li> 
                        <li className="nav-item">
                            <a className="nav-link" href="#pricing">Pricing</a>
                        </li> 
                        <li className="nav-item">
                            <a className="nav-link" href="#reviews">Reviews</a>
                        </li> 
                        <li className="nav-item">
                            <a className="nav-link" href="#brands">Clients</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#faqs">FAQs</a>
                        </li>
                    </ul>
                    <ul className="navbar-nav">
                        <li className="nav-item text-center">
                            <a className="nav-link learn-more-btn btn-extra-header" href="#contact">Contact</a>
                        </li>
                        <li className="nav-item text-center">
                            <a className="nav-link learn-more-btn" href="#contact">Free Trial</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>  
  )
}

export default Navbar