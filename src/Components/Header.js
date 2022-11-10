import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/navStyles.css";
import { CgMenu, CgClose } from "react-icons/cg";
import { FiShoppingCart } from "react-icons/fi";
import image from "../styles/my_logo.png";
import { useAuth0 } from "@auth0/auth0-react";

const Header = () => {
  const [Active, setActive] = useState(true);
  function handleClick() {
    if (Active) {
      setActive(false);
    } else {
      setActive(true);
    }
  }
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

  return (
    <nav id="header">
      {/* <a href="#">
        <img
          src="./logo192.png"
          alt="logo"
          class="logo"
          height="20%"
          width="20%"
        />
      </a> */}
      <a href="#">
        <img src={image} alt="logo" className="logo" height="16%" width="20%" />
      </a>

      <div>
        <ul id="navbar" className={Active ? "#navbar active" : "#navbar"}>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/products">Products</NavLink>
          </li>
          {/* <li>
            <NavLink to="/about">About Us</NavLink>
          </li> */}
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <li>
            <NavLink to="/cart">
              <FiShoppingCart />
            </NavLink>
          </li>
          {
            isAuthenticated? (<li>
              <button
                onClick={() => logout({ returnTo: window.location.origin })}
              >
                Log Out
              </button>
            </li>) :(<li>
            <button onClick={() => loginWithRedirect()}>Log In</button>
          </li> ) 
          }
          
          
        </ul>
      </div>
      <div id="mobile-navbar">
        {Active ? (
          <CgMenu name="bar" id="bar" onClick={handleClick} />
        ) : (
          <CgClose name="close" id="close" onClick={handleClick} />
        )}
      </div>
    </nav>
  );
};

export default Header;
