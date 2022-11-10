import React from "react";
import FormatPrice from "../Helpers/FormatPrice";
import CartQuant from "./CartQuant";
import { FaTrash } from "react-icons/fa";
import { useCartContext } from "../Context/cartContext";
import '../styles/CartItem.css'

const CartItem = ({ id, name, image, amount, price }) => {
  const { removeItem } = useCartContext();
//   const [amount, setAmount] = useState(1);
  const decrement = () => {
    // if(amount > 1){
    //     setAmount(amount - 1);
    // }
    // else{
    //     setAmount(1);
    // }
  };
  const increment = () => {
    // if(amount < stock){
    //     setAmount(amount + 1);
    // }
    // else{
    //     setAmount(stock);
    // }
  };
  return (
    <div className="cart_row">
      <div className="cart_image_name">
        <div>
          <figure>
            <img src={image} alt={name} />
          </figure>
        </div>
        <div className="cart_prod_name">
          <p>{name}</p>
        </div>
      </div>
      <div className="cart_price">
        <p>
          <FormatPrice price={price} />
        </p>
      </div>
      <div className="cart_quantity">
        <CartQuant
          amount={amount}
          decrement={decrement}
          increment={increment}
        />
      </div>
      <div className="cart_subtotal">
        <p>
          <FormatPrice price={price*amount} />
        </p>
      </div>
      <div className="cart_remove_item">
        <FaTrash className="remove_icon" onClick={() => removeItem(id)} />
      </div>
    </div>
  );
};

export default CartItem;
