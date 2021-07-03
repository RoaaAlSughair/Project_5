import React from "react";
import { Link,Route } from "react-router-dom";
import "./footer.css";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import {
	FaFacebookSquare,
	FaYoutube,
	FaInstagramSquare,
	FaLinkedin,
  } from "react-icons/fa";



const Footer = () => {
	let iconStyles = { color: "white", fontSize: "2.5em" , };

  return (
    <div id="footer">
      <Link to="/AboutUs"  className='footerLink' style={{ textDecoration: "none" }}><Route path="/AboutUs" render={() => <AboutUs />} />
        <div className="link">About Us</div>
      </Link>
      <Link to="/ContactUs" className='footerLink' style={{ textDecoration: "none" }}><Route path="/ContactUs" render={() => <ContactUs />} />
        <div className="link">Contact Us</div>
      </Link>
      <div id ="social">
      <FaFacebookSquare style={iconStyles} />
      <FaInstagramSquare style={iconStyles} />
      <FaYoutube  style={iconStyles}/>
      <FaLinkedin style={iconStyles}/>
    </div>
      
    </div>
  );
};

export default Footer;
