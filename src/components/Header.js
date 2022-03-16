import React from 'react';
import hero from '../images/hero_img.png';

const Header = () => {
  return (
    
        <section id="home" className="banner_wrapper">

        <div className="container">
            <div className="row align-items-center">
                <div className="col-md-6 header-img-section">
                <img src={hero} className="img-fluid" alt='logo'/>
                </div>
                <div className="col-md-6 my-5 my-md-0 text-center text-md-start">
                    <p className="banner-subtitle">Social Media Marketing</p>
                    <h1 className="banner-title">Start <span>connecting</span> with your online customers</h1>
                    <p className="banner-title-text">Hashtag is a bright and results driven social media marketing
                        drive customers, grow your audience and expand your reach.</p>
                    <div className="learn-more-btn-section">
                        <a className="nav-link learn-more-btn btn-header" href="#about">Start your free trial</a>
                    </div>
                </div> 
            </div>  
        </div>

        </section>
  )
}

export default Header