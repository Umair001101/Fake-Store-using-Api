// ProductDescription.js
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./ProductDescription.css";
import { useDispatch } from "react-redux";
import { addItem } from "../Redux/CartSlice";
const ProductDescription = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const location = useLocation();
    const { product } = location.state || {};
  if (!product) {
    return <p>No product data available.</p>;
  }
  return (<>
    <div className="product-description">
      <h2 className="product-title">{product.title}</h2>
      <img 
        src={product.image} 
        alt={product.title} 
        className="product-image"
      />
      <p className="product-description-text">{product.description}</p>
      <h3 className="product-price">Rating: {product.rating.rate}</h3>
      <h3 className="poduct-numbers">Availabe no. in stock: {product.rating.count}</h3>
      <h3 className="product-price">${product.price}</h3>
      <button 
        className="add-to-cart-btn"
        onClick={() => dispatch(addItem(product))}
      >
        Add to Cart
      </button>
      <button type="button" className="go-back-btn" onClick={() => navigate("/")}>🔙 Go Back</button>
    </div>
    </>
  );
};

export default ProductDescription;
