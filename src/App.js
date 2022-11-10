import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Home';
import About from './About';
import Cart from './Cart';
import Contact from './Contact';
import Products from './Products';
import SingleProduct from './SingleProduct';
import ErrorPage from './ErrorPage';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Checkout from './Checkout';
import Placed from './Placed';

const App = () => {
  return (
  <Router>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      {/* <Route path="/about" element={<About/>}/> */}
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/products" element={<Products/>}/>
      <Route path="/singleproduct/:id" element={<SingleProduct/>}/>
      <Route path="/checkout" element={<Checkout/>}/>
      <Route path="/order_placed" element={<Placed/>}/>
      <Route path="*" element={<ErrorPage/>}/>
    </Routes>
    <Footer/>
  </Router>
    
  )
}

export default App