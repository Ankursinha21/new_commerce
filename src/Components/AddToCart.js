import React from 'react'
import {NavLink} from 'react-router-dom'
import { useState } from 'react';
import CartQuant from './CartQuant';
import { useCartContext } from '../Context/cartContext';

const AddToCart = ({ product }) => {

    const { addToCart } = useCartContext();

    const { id, stock,color } = product;

    const [amount, setQuantity] = useState(1);

    const decrement = ()=>{
        if(amount > 1){
            setQuantity(amount - 1);
        }
        else{
            setQuantity(1);
        }
    }
    const increment = ()=>{
        if(amount < stock){
            setQuantity(amount + 1);
        }
        else{
            setQuantity(stock);
        }
    }        
    

  return (
    <div style={{marginTop: 0}}>
        <CartQuant amount={amount} decrement={decrement} increment={increment}/>
        <NavLink to="/cart" onClick={()=>addToCart(id,color, product, amount)}><button>Add To Cart</button></NavLink>
    </div>
    
  )
}

export default AddToCart