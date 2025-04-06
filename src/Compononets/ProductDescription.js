import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./ProductDescription.css";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../Redux/CartSlice";

const ProductDescription = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const location = useLocation();
    const { product } = location.state || {};
    const cartItems = useSelector((state) => state.cart.items);
    const cartItem = cartItems.find((item) => item.id === product?.id);
    const selectedQuantity = cartItem ? cartItem.quantity : 0;

    return (
        <div className="product-description">
            {product ? (
                <>
                    <h2 className="product-title">{product.title}</h2>
                    <img
                        src={product.image}
                        alt={product.title}
                        className="product-image"
                    />
                    <p className="product-description-text">{product.description}</p>
                    <p className="product-category"><span className="bold-text">Category:</span> {product.category}</p>
                    <h2>Selected Quantity: {selectedQuantity}</h2>
                    <h3 className="product-price">Rating: {product.rating.rate}</h3>
                    <h3 className="product-numbers">Available no. in stock: {product.rating.count}</h3>
                    <h3 className="product-price">${product.price}</h3>
                 
                    <button type="button" className="go-back-btn" onClick={() => navigate("/")}>
                        Go to Home
                    </button>
                      <button
                        type="button"
                        className="go-back"
                        onClick={() => navigate("/cart")}
                      >
                            Go to the Cart
                       </button>
                </>
                        ) : (
                            <p>No product data available.</p>
                        )
            }
        </div>
    );
};

export default ProductDescription;
