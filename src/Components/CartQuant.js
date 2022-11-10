import React from 'react'
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";
import '../styles/CartQuant.css'

const CartQuant = ({amount, increment, decrement}) => {
  return (
    <div className='cart-quantity'>
        <div className="toggle">
            <button onClick={()=>decrement()}><AiOutlineMinusCircle/></button>
            <div className='quant-style'><p>{amount}</p></div>
            <button onClick={()=>increment()}><AiOutlinePlusCircle/></button>
        </div>
    </div>
  )
}

export default CartQuant