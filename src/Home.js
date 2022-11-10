import React  from 'react';
import Services from './Components/Services';
import HeroSection from './Components/HeroSection';
import FeatureProd from './Components/FeatureProd';
import Banner from './Components/Banner';
// import {useProductContext} from "./Context/productContext";


const Home = () => {
  
  return (
    <>
      <HeroSection/>
      <FeatureProd/>
      <Banner/>
      <Services/>
    </>
  )
}

export default Home;