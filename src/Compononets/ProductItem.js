// ProductItem.js
import { useDispatch } from "react-redux";
import { addItem } from "../Redux/CartSlice";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

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
  margin: 5px;
  padding: 5px 10px;
  cursor: pointer;
`;

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate("/productdescription", { state: { product } });
  };

  return (
    <Card>
      <Image src={product.image} alt={product.title} />
      <h4>{product.title}</h4>
      <p>${product.price}</p>
      <Button onClick={handleViewDetails}>View Details</Button>
      <Button onClick={() => dispatch(addItem(product))}>Add to Cart</Button>
    </Card>
  );
};

export default ProductItem;
