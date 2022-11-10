import React from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/Banner.css'
import './GlobalStyles.css'
import image from '../styles/b2.jpg'

const Banner = () => {
  return (
    <section id="banner" className="section-m1" style={{backgroundImage:`url(${image})`}}>
        <h4>Repair Services</h4>
        <h2>Up to <span>50% off</span> -All Electronics Gadgets & Accessories</h2>
        <NavLink to="/products">
            <button className="normal">
                 Explore Now
            </button> 
        </NavLink>
    </section>
  )
}

export default Banner