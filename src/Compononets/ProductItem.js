import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../Redux/CartSlice";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import './ProductItem.css'; 

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.items);
  const cartItem = cartItems.find((item) => item.id === product.id);
  const selectedQuantity = cartItem ? cartItem.quantity : 0;
  const [text, settext] = useState('Add to Cart');

  const handleViewDetails = () => {
    navigate("/productdescription", { state: { product } });
  };

  const handleAddToCart = () => {
    dispatch(addItem({ ...product, quantity: selectedQuantity + 1 }));
    settext("Go to Cart");
  };

  const handleGoToCart = () => {
    navigate("/cart");
  };

  return (
<div className="card" onClick={handleViewDetails}>
  <img className="image" src={product.image} alt={product.title} />
  <h4>{product.title}</h4>
  <p>${product.price}</p>
  <p>Available Quantity: {product.rating.count}</p>
  <p>Rating: {product.rating.rate}</p>
  <button
  className="button"
  onClick={(e) => {
    e.stopPropagation();
    text === "Add to Cart" ? handleAddToCart() : handleGoToCart();
  }}
  style={{ backgroundColor: text === "Add to Cart" ? "" : "rgb(22, 172, 39)" }}
  >
    {text}
  </button>

  
  <p style={{ color: "green" }}>{text === "Add to Cart" ? "" : "Added to Cart!"}</p>
</div>

  );
};

export default ProductItem;
