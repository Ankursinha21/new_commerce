import React from "react";
import { NavLink } from "react-router-dom";
import "./styles/Cart.css";
import { useCartContext } from "./Context/cartContext";
import CartItem from "./Components/CartItem";

const Cart = () => {
  const { cart, clearCart } = useCartContext();
  if(cart.length === 0){
    return(
      <div>
        <h3 style={{alignSelf: "center", textTransform: "capitalize"}}>No Items In The Cart</h3>
      </div>
    )
  }
  return (
    <div className="total-container">
      <div className="cart_container">
        <div className="cart_header">
          <p>Items</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Subtotal</p>
          <p>Remove</p>
        </div>
        <hr style={{ alignSelf: "center" }} />
        <div className="cart-items-container">
          <div className="cart-items">
            {cart.map((curElem) => {
              return <CartItem key={curElem.id} {...curElem} />;
            })}
            {/* <CartItem/> */}
          </div>
        </div>
        <hr style={{ alignSelf: "center", marginBottom: "2rem" }} />
      </div>
      <div className="btn-cont">
        <div className="to_checkout">
        <NavLink to="/checkout">
          <button>Prodeed To Checkout</button>
        </NavLink>
      </div>
      <div className="clear-cart">
          <button onClick={clearCart}>Clear Cart</button>
      </div>
      </div>
      
    </div>
  );
};

export default Cart;
