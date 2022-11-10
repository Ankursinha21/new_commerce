import { createContext, useContext } from "react";
import { useEffect } from "react";
import { useReducer } from "react";
import reducer from '../Reducer/cartReducer';

const CartContext = createContext();

const getCartDataLocal=()=>{
    let localCartData = localStorage.getItem("myItems");
    if(localCartData === []){
        return [];
    }
    else{
        return JSON.parse(localCartData);
    }
}
// cart: [],
const initialState = {
    cart: getCartDataLocal(),
    total_item: "",
    total_amount: "",
    shipping_charges: 2000,
}; 

const CartProvider = ({children})=>{

    const [state, dispatch] = useReducer(reducer, initialState);

    const addToCart = (id, amount, product)=>{
        dispatch({type: "ADD_TO_CART", payload: {id, amount, product}});
    };
    const removeItem = (id) => {
        dispatch({ type: "REMOVE_ITEM", payload: id });
      };
    const clearCart = ()=>{
        dispatch({type: "CLEAR_CART"});
    }

      //for local storage//
      useEffect(()=>{
        localStorage.setItem("myItems", JSON.stringify(state.cart))
      },[state.cart]);

    return <CartContext.Provider value={{...state, addToCart, removeItem, clearCart}}>
        {children}
    </CartContext.Provider>
}

//custom hook
const useCartContext=()=>{
    return useContext(CartContext);
}
export {CartProvider, useCartContext};