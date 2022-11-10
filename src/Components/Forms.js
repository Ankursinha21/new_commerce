import React from "react";
import "../styles/Forms.css";
import "./GlobalStyles.css"
import {CgHome, CgMail, CgPhone, CgCalendar, CgTime} from "react-icons/cg";

const Forms = () => {
  return (
    <>
      <section id="address" className="section-p1">
        <div className="details">
          <h2>Visit One of Agency Locations OR Contact Us Now.</h2>
          <h3>Head Office</h3>
          <div className="addres-list">
            <li>
              <CgHome style={{marginTop:"15px", marginRight:"10px"}}/>
              <p>F-1, 2nd Flr Ali Towers,22 Greams Road , Chennai </p>
            </li>
            <li>
              <CgMail style={{marginTop:"15px", marginRight:"10px"}}/>
              <p>anchit.gedekar123@gmail.com</p>
            </li>
            <li>
              <CgPhone style={{marginTop:"15px", marginRight:"10px"}}/>
              <p>7470348765</p>
            </li>
            <li>
              <CgCalendar style={{marginTop:"15px", marginRight:"10px"}}/>
              <p>Monday to Saturday</p>
            </li>
            <li>
              <CgTime style={{marginTop:"15px", marginRight:"10px"}}/>
              <p>8:00 AM to 10:00 PM</p>
            </li>
          </div>
        </div>
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14872.478050435791!2d81.58662571651509!3d21.266736320485307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28e0a7d9c693f5%3A0xa7cfe542db2d913d!2z4KSV4KSs4KWA4KSwIOCkqOCkl-CksCwg4KSw4KS-4KSv4KSq4KWB4KSwLCDgpJvgpKTgpY3gpKTgpYDgpLjgpJfgpKLgpLwgNDkyMDk5!5e0!3m2!1shi!2sin!4v1644567895937!5m2!1shi!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullscreen=""
            loading="lazy"
          ></iframe>
        </div>
      </section>
      <section id="contact_form">
        <form action="https://formspree.io/f/mqkjywyo" method="POST">
          <span>LEAVE A MESSAGE</span>
          <h2>We love to contact with you</h2>
          <input type="text" placeholder="Your Name" name="Username" required autoComplete="off"/>
          <input type="email" placeholder="E-mail" name="Email" required autoComplete="off"/>
          <input type="text" placeholder="Subject" name="Subject"  required/>
          <textarea
            name="Message"
            id=""
            cols="30"
            rows="10"
            placeholder="Your Message"
            required
            autoComplete="off"
          ></textarea>
          <button  className="normal" type="submit">Submit</button>
          
        </form>
        {/* <div className="people">
            <div>
                <img src="img/ankur.jpg" alt=""/>
                <p><span>Ankur Sinha</span> Web Developer <br> Phone: 7470346900 <br> Email: ankur.sinha2019@gmail.com</p>
            </div>
        </div> */}
      </section>
    </>
  );
};

export default Forms;
