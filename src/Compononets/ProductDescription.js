import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./ProductDescription.css";
import { useDispatch, useSelector } from "react-redux";
import { addItem, remove_a_Item, removeItems } from "../Redux/CartSlice";
const ProductDescription = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const location = useLocation();
    const { product } = location.state || {};
    const cartItems = useSelector((state) => state.cart.items);
    const cartItem = cartItems.find((item) => item.id === product?.id);
    const selectedQuantity = cartItem ? cartItem.quantity : 0;
    const handleAddToCart = () => {
        if (selectedQuantity >= product.rating.count) {
            alert("Cannot add more items than available items!");
            return;
        }
        dispatch(addItem({ id: product.id, quantity: selectedQuantity + 1 }));
    };
    const handleRemoveFromCart = () => {
        dispatch(removeItems(product.id));
    }
    const handleremove_a_Item = () => {
        if (selectedQuantity == 0) {
            alert("No items to remove!");
            return;
        }
        dispatch(remove_a_Item(product.id));
    };
    const subPrice = selectedQuantity * product.price;
    return (
        <div className="product-description">
            {product ? (
                <>
                    <button type="button" className="go-back-btn" onClick={() => navigate("/")}>
                    Go to Main Page
                    </button>
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
                    <h4 className="product-numbers">Available no. in stock: {product.rating.count}</h4>
                    <h3 className="product-price">Price: ${product.price}</h3>
                    <h3 className="product-price">total sub price ${subPrice}</h3>
                    <button
                        className="add-to-cart-btn"
                        onClick={handleAddToCart}
                        disabled={selectedQuantity >= product.rating.count} 
                    >
                        Add to Cart
                    </button>
                    <button
                        className="remove-item-btn"
                        onClick={handleremove_a_Item}
                        disabled={selectedQuantity <= 0}
                    >
                      Remove an Item 
                    </button>
                      <button
                        type="button"
                        className="go-back"
                        onClick={() => navigate("/cart")}
                      >
                            Go to the Cart
                       </button>
                       <button
                        type="button"
                        className="go-back"
                        onClick={handleRemoveFromCart}
                      >
                            Remove item from cart
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
