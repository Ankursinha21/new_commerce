import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useProductContext } from "./Context/productContext";
import "./styles/SingleProduct.css";
import "./Components/GlobalStyles.css";
import PageNavigation from "./Components/PageNavigation";
import ProdImage from "./Components/ProdImage";
import FormatPrice from "./Helpers/FormatPrice";
import Star from "./Components/Star";
import AddToCart from "./Components/AddToCart";
import { MdSecurity } from "react-icons/md";
import { TbTruckDelivery, TbReplace } from "react-icons/tb";

// const API = "https://fakestoreapi.com/products";
const API = "https://api.pujakaitem.com/api/products";
// const API = "https://ecommapinew.herokuapp.com/products";
// const API = "https://ecommapinew.herokuapp.com/products/singleproduct";

const SingleProduct = () => {
  const { getSingleProduct, isSingleLoading, singleProduct } =
    useProductContext();
  const { id } = useParams();

  const {
    id: alias,
    name,
    title,
    price,
    description,
    category,
    company,
    stars,
    image,
    rate,
    count,
    stock,
    reviews,
  } = singleProduct;

  useEffect(() => {
    getSingleProduct(`${API}?id=${id}`);
    // getSingleProduct(`${API}/${id}`);
  }, []); // eslint-disable-next-line

  if (isSingleLoading) {
    return <div className="page_loading">Loading.....</div>;
  }

  return (
    <section>
      <PageNavigation title={name} />
      <div className="container">
        <div className="grid grid-two-column">
          {/* product Images  */}
          <div className="product_images">
            <ProdImage image={image} />
          </div>

          {/* product dAta  */}
          <div className="product-data">
            <h2>{name}</h2>
            <p>
              <Star stars={stars} reviews={reviews} />
            </p>
            <p className="product-data-price">
              MRP:
              <del>
                <FormatPrice price={price + 250000} />
              </del>
            </p>
            <p className="product-data-price product-data-real-price">
              <span>Deal of the Day: </span>
              <FormatPrice price={price} />
            </p>
            <p>{description}</p>
            <div className="product-data-warranty">
              <div className="product-warranty-data">
                <TbTruckDelivery className="warranty-icon" />
                <p>Free Delivery</p>
              </div>

              <div className="product-warranty-data">
                <TbReplace className="warranty-icon" />
                <p>30 Days Replacement</p>
              </div>

              <div className="product-warranty-data">
                <TbTruckDelivery className="warranty-icon" />
                <p>Assured Delivered </p>
              </div>

              <div className="product-warranty-data">
                <MdSecurity className="warranty-icon" />
                <p>2 Year Warranty </p>
              </div>
            </div>

            <div className="product-data-info">
              <p>
                Available:
                <span> {stock > 0 ? "In Stock" : "Not Available"}</span>
              </p>
              {/* <p>
                ID : <span> {id} </span>
              </p> */}
              <p>
                Brand :<span> {company} </span>
              </p>
            </div>
            <hr />
            {stock > 0 && <AddToCart product={singleProduct} />}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleProduct;
