import React from 'react';
import dummy_logo1 from '../images/dummy_logo1.png';
import dummy_logo2 from '../images/dummy_logo2.png';
import dummy_logo3 from '../images/dummy_logo3.png';

const Client = () => {
  return (
    <div className="clients">
        <div className="container">
            <div className="row">
                <div className="col-12 text-center">
                    <h2>Trusted by clients across the globe</h2>
                </div>
                <div className="col-12"> 
                    <div className="owl-carousel client-slider-section">
                        <div className="item">
                         <img src={dummy_logo1} alt='dummy_logo1'/>
                        </div>
                        <div className="item">
                         <img src={dummy_logo2} alt='dummy_logo2'/>
                        </div>
                        <div className="item">
                         <img src={dummy_logo3} alt='dummy_logo3'/>  
                        </div>
                        <div className="item">
                         <img src={dummy_logo1} alt='dummy_logo1'/>
                        </div>
                        <div className="item">
                         <img src={dummy_logo2} alt='dummy_logo2'/>
                        </div>
                        <div className="item">
                         <img src={dummy_logo3} alt='dummy_logo3'/>  
                        </div>
                        <div className="item">
                         <img src={dummy_logo1} alt='dummy_logo1'/>
                        </div>
                        <div className="item">
                         <img src={dummy_logo2} alt='dummy_logo2'/>
                        </div>
                        <div className="item">
                         <img src={dummy_logo3} alt='dummy_logo3'/>  
                        </div>
                        <div className="item">
                         <img src={dummy_logo1} alt='dummy_logo1'/>
                        </div>
                        <div className="item">
                         <img src={dummy_logo2} alt='dummy_logo2'/>
                        </div>
                        <div className="item">
                         <img src={dummy_logo3} alt='dummy_logo3'/>  
                        </div>
                        
                    </div> 
                </div>
            </div>
        </div>
    </div>
  )
}

export default Client