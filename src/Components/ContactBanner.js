import React from 'react'
import '../styles/ContactBanner.css'
import image from '../styles/banner.png'

const ContactBanner = () => {
  return (
    <section id="hero_shop" className="contact-header section-p1" style={{backgroundImage:`url(${image})`, backgroundSize:"contain"}}>
        <h2>#let's_communicate</h2>
        <p>Get In Touch With Us</p>
    </section>
  );
}

export default ContactBanner