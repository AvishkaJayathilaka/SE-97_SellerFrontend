import React, { useContext } from "react";
import "./ProductDisplay.css";

import { ShopContext } from "../../Context/ShopContext";

const apiUrl ="https://autopilot97-8dad7d99b556.herokuapp.com";


const ProductDisplay = (props) => {
  const { product } = props;
  



  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img">
          <img
            className="productdisplay-main-img"
            src={apiUrl + product.image}
            alt="img"
          />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-new">
            Rs {product.new_price}
          </div>
        </div>
        
        <p className="productdisplay-right-category">
          <span>Brand :</span> {product.brand}
        </p>
        <p className="productdisplay-right-category">
          <span>Model :</span> {product.model}
        </p>
        <p className="productdisplay-right-category">
          <span>Part :</span> {product.category}
        </p>
        <p className="productdisplay-right-category">
          <span>Year :</span> {product.year}
        </p>
        <p className="productdisplay-right-category">
          <span>Contacts : {product.contact} </span>
        </p>
        <p className="productdisplay-right-category">
          <span>Description </span>
        </p>

        <div className="productdisplay-right-description">
          {`${product.description}`}
        </div>
        <br />
        <a href={`tel:${product.contact}`}> Contact Us</a>
      </div>
    </div>
  );
};

export default ProductDisplay;
