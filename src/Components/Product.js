import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Product.css";
import "./GlobalStyles.css";
import FormatPrice from "../Helpers/FormatPrice";
// import {useProductContext} from "../Context/productContext";

const Product = (curElem) => {
  const { id, name, image, category, price } = curElem;
  return (
    <NavLink to={`/singleproduct/${id}`}>
      <div className="pros">
        <figure>
          <img src={image} alt={name} />
        </figure>
        <figcaption className="caption">{category}</figcaption>
        <div className="description">
          <h5>{name}</h5>
          <h4>{<FormatPrice price={price} />}</h4>
          {/* <a><i class="fas fa-cart-arrow-down cart cart"></i></a> */}
        </div>
      </div>
    </NavLink>
  );
};

export default Product;
