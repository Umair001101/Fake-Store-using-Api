import { useSelector, useDispatch } from "react-redux";
import { removeItem } from "../Redux/CartSlice";
import "./Cart.css"; 
import { useNavigate } from "react-router-dom";

const Cart = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.items);
    console.log("Cart Items in Redux:", cartItems); 
    const Checkout = () => {
     
        navigate("/Checkout");
        };
    const AddMore = () => {
        navigate("/");
        };

    return (
        <div className="cart-container">
        <h2>Shopping Cart</h2>
        {cartItems.length === 0 ? (
            <p className="empty-cart">Your cart is empty.</p>
        ) : (
            cartItems.map((item) => (
            <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.title} className="item-image" />
                <div className="item-details">
                <h4>{item.title}</h4>
                <p>${item.price}</p>
                <button onClick={() => dispatch(removeItem(item.id))}>Remove</button>
                </div>
            </div>
            ))
        )}
        <button onClick={Checkout}>Checkout</button>
        <button onClick={AddMore}>Add More</button>
        </div>
    );
    };

export default Cart;
