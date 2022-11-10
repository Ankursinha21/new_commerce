import React from "react";
import "../styles/Footer.css";
import { NavLink } from "react-router-dom";
import { CgInstagram, CgYoutube, CgFacebook, CgTwitter } from "react-icons/cg";

const Footer = () => {
  return (
    <>
      <footer className="section-p1 section-m1" style={{marginBottom: 0}}>
        <div className="col">
          {/* <img className="logo" src="img/logo.png" alt=""/> */}
          <h4>Contact</h4>
          <p>
            <strong>Adress: </strong>  F-1, 2nd Flr Ali Towers,22 Greams Road , Chennai 
          </p>
          <p>
            <strong>Phone: </strong> 7470348765/9179256754
          </p>
          <p>
            <strong>Hours: </strong>7:00 am to 10:00 pm Mon-Sat
          </p>
          <div className="follow_us">
            <h4>Follow Us</h4>
            <div className="icon">
              <a href="http://instagram.com">
                <CgInstagram style={{ padding: "5px", fontSize: "30px" }} />
              </a>
              <a href="http://youtube.com">
                <CgYoutube style={{ padding: "5px", fontSize: "30px" }} />
              </a>
              <a href="http://facebook.com">
                <CgFacebook style={{ padding: "5px", fontSize: "30px" }} />
              </a>
              <a href="http://twitter.com">
                <CgTwitter style={{ padding: "5px", fontSize: "30px" }} />
              </a>
            </div>
          </div>
        </div>
        <div className="col">
          <h4>About</h4>
          <NavLink to="/about">About Us</NavLink>
          <a href="#">Terms and Condition</a>
          <NavLink to="/contact">Contact Us</NavLink>
        </div>
        <div className="col">
          <h4>My Account</h4>
          <a href="#">Sign In</a>
          <NavLink to="/cart">View Cart</NavLink>
          <a href="#">Track My Order</a>
          <a href="#">Help</a>
        </div>
        <div className="col install">
          <h4>Install App</h4>
          <p>From App Store or Google Play</p>
          <div className="row">
            <img src="img/app.jpg" alt="app" />
            <img src="img/play.jpg" alt="pay" />
          </div>
          <p>Secured Payment Options</p>
          <img src="img/pay.png" alt="pay" />
        </div>
        <div className="copyrights">
          <p>@2022, Anonymous Reactjs E-commerce Site </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
