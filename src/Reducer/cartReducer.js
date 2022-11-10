const cartReducer = (state, action) => {

    if(action.type === "ADD_TO_CART"){
        let { id, amount, product } = action.payload;

    let cartitems;
    cartitems={
        id: product.id,
        name: product.name,
        amount,
        image: product.image[0].url,
        price: product.price,
        max: product.stock,
    };

  return {
    ...state,
    cart: [...state.cart, cartitems],
  };
}
if (action.type === "REMOVE_ITEM") {
    let updatedCart = state.cart.filter(
      (curItem) => curItem.id !== action.payload
    );
    return {
      ...state,
      cart: updatedCart,
    };
  }
  if(action.type === "CLEAR_CART"){
    return{
      ...state,
      cart:[],
    }
  }
return state;
}

export default cartReducer;