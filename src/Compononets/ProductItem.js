import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../Redux/CartSlice";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";
const Card = styled.div`
  border: 1px solid #ccc;
  padding: 10px;
  width: 200px;
`;

const Image = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
`;

const Button = styled.button`
  margin: 5px 5px 0 0;
  padding: 8px 12px;
  font-size: 0.9rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s;
  
  &:first-of-type {
    background-color: #007bff;
    color: #fff;
  }
  
  &:nth-of-type(2) {
    background-color: #28a745;
    color: #fff;
  }

  &:hover {
    opacity: 0.4;
  }
`;

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
    <Card>
      <Image src={product.image} alt={product.title} />
      <h4>{product.title}</h4>
      <p>${product.price}</p>
      <p>Available Quantity: {product.rating.count}</p>
      <Button onClick={handleViewDetails}>View Details</Button>
      <Button onClick={text === "Add to Cart" ? handleAddToCart : handleGoToCart}>{text}</Button>
    </Card>
  );
};

export default ProductItem;
