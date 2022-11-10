import React from 'react'
import '../styles/HeroSection.css'
import './GlobalStyles.css'
import image from '../styles/hero-back.jpg'
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <section id='hero' style={{backgroundImage:`url(${image})`}}>
     
        <h3>Trade-in-offer</h3>
        <h2>Grab amazing Deals and Offer</h2>
        <h1>On Every Product</h1>
        <p>Save more with coupons and get 70% off</p>
        <button onClick={()=>{navigate('./products')}}>Shop Now</button>
    </section>
  )
}



export default HeroSection;