import React , {useState} from "react";
import { NavLink } from "react-router-dom";
import FormatPrice from "../Helpers/FormatPrice";
import { BsFillCartPlusFill } from "react-icons/bs";
import "../styles/ListView.css";
import "../Components/GlobalStyles.css";
import { useCartContext } from '../Context/cartContext';
import AddToCart from "./AddToCart";
// import { useProductContext } from "../Context/productContext";
// import CartQuant from './CartQuant';

const ListView = ({ products }) => {
  // const { getSingleProduct, isSingleLoading, singleProduct } =
  //   useProductContext();
  // const { id } = useParams();

  // const {
  //   id: alias,
  //   name,
  //   title,
  //   price,
  //   description,
  //   category,
  //   company,
  //   stars,
  //   image,
  //   rate,
  //   count,
  //   stock,
  //   reviews,
  // } = singleProduct;
  // const { addToCart } = useCartContext();

  //   const { id, stock,color } = product;

    // const [amount, setQuantity] = useState(1);

    // const decrement = ()=>{
    //     if(amount > 1){
    //         setQuantity(amount - 1);
    //     }
    //     else{
    //         setQuantity(1);
    //     }
    // }
    // const increment = ()=>{
    //     if(amount < stock){
    //         setQuantity(amount + 1);
    //     }
    //     else{
    //         setQuantity(stock);
    //     }
    // }        
    
  return (
    <div className="list-view container grid">
      {products.map((currElem) => {
        const { id, price, name, image, description } = currElem;
        return (
          <div className="card grid grid-two-column">
            <figure>
              <img src={image} alt={name} />
            </figure>
            <div className="product-data">
              <h3>{name}</h3>
              <p>
                <FormatPrice price={price} />{" "}
              </p>
              <p>{description}</p>
              <div className="next-buttons">
                <NavLink to={`/singleproduct/${id}`}>
                  <button>More Details</button>
                </NavLink>
                <div className="cart-container">
                {/* <CartQuant amount={amount} decrement={decrement} increment={increment}/>
                  <NavLink to="/cart" onClick={()=>addToCart(id,color, product, amount)}>
                    <BsFillCartPlusFill className="cart-icon" />
                  </NavLink> */}
                  {/* <AddToCart product={singleProduct}/> */}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ListView;
