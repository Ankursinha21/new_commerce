import React from 'react'
import { NavLink } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div style={{padding:"8rem 0", textAlign:"center"}}>
      <h2>404</h2>
      <h3>Ohh! You are Lost.</h3>
      <p style={{margin:"2rem 0"}}>The page for which you are looking does not exist.You can Click the below button to go back to the home page.</p>
      <NavLink to="/"><button>Go Back To Home</button></NavLink>
    </div>
  )
}

export default ErrorPage