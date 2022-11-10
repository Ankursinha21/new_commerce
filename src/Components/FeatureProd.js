import React from 'react'
import { useProductContext } from '../Context/productContext';
import Product from './Product';
import './GlobalStyles.css';
import '../styles/FeatureProd.css';

const FeatureProd = () => {

  const {isLoading, featureProducts} = useProductContext();

  if(isLoading){
    return <div>.....Loading</div>
  }

  return (
    <>
    <section id="product1" className="section-p1">
        <h2>Check Now!</h2>
        <p>Our Feature Products</p>
        <div className="pro-container">
            <div className="pro">
            {
                featureProducts.map((curElem)=>{
                    return <Product key={curElem.id} {...curElem} />;
                })
            }  
            </div>
        </div>
    </section>
    </>
  )
}

export default FeatureProd;