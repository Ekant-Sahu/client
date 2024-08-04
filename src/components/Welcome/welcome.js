import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar, faMotorcycle } from '@fortawesome/free-solid-svg-icons';
import insureImage from '../../assets/insure.png';
import "./welcome.css"
import { NavLink } from 'react-router-dom';
import Contact from '../Contact/contact';
import FAQShow from '../FAQ/faqshow';

const Welcome= () => {
  
  
  return (
    <>
      <div className="main-content">
  <div className="text-content">
    <h1 className="h1">
    Welcome to FinSure!!
      {/* <FontAwesomeIcon className="icon" icon={faHandPeace} /> */}
    </h1>
    <br/>
    <p className="p">
      <b>Redefining the standard for digital Insurance</b>
    </p>
    <br />
    
    <span className="span">FinSure is a cutting-edge platform specializing in car and bike insurance services, leveraging blockchain technology to ensure complete security and transparency for our users. Our mission is to revolutionize the insurance industry by integrating advanced technology to provide a seamless, secure, and efficient experience for our customers.
      <br/>
      <br/>
    Get quota for Cars and Bikes---&gt;
    </span>
  <br/><br/><br/>
   <NavLink to="/cars"> <button className="button">
        <FontAwesomeIcon icon={faCar} className="icon" />
        Cars
      </button></NavLink>
      <NavLink to="/bikes"> <button  className="button">
        <FontAwesomeIcon icon={faMotorcycle} className="icon" />
        Bikes
      </button></NavLink>
  </div>
  <div className="img-swap">
    <img src={insureImage} alt='insure'/>
  </div>
</div>
<Contact/>
<FAQShow/>
</>
);
};

export default Welcome;