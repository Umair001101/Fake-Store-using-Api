import { useSelector, useDispatch } from "react-redux";
import { addItem, removeItem } from "../Redux/CartSlice";
import "./Cart.css"; 
import { useNavigate } from "react-router-dom";


const Cart = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.items);

    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    const Checkout = () => {
        navigate("/Checkout");
    };

    const AddMore = () => {
        navigate("/");
    };

    const Details = (item) => {
        navigate("/ProductDescription", { state: { product: item } });
    };        

    return (
        <div className="cart-container">
            <h2>Shopping Cart</h2>
            {cartItems.length === 0 ? (<>
                <p className="empty-cart">Your cart is empty.</p>
                <button onClick={AddMore}>Add items in cart</button>
                </>
            ) : (
                <>
                    {cartItems.map((item) => (
                        <div key={item.id} className="cart-item">
                            <img src={item.image} alt={item.title} className="item-image" />
                            <div className="item-details">
                                <h4>{item.title}</h4>
                                <p>Price: ${item.price}</p>
                                <p>Quantity: {item.quantity}</p>
                                <p>Subtotal: ${item.price * item.quantity}</p>
                                <button onClick={() => dispatch(removeItem(item.id))} className="remove-button">
                                    Remove
                                    </button>
                                    <button onClick={() => Details(item)} className="details-button">
                                    Details
                                    </button>
                                    <button onClick={() => dispatch(addItem(item))} className="add-more-button">
                                    Add more to Cart
                                    </button>
                                    </div>
                        </div>
                    ))}
                    <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
                    <button onClick={Checkout}>Checkout</button>
                    <button onClick={AddMore}>Add More</button>
                </>
            )}

        </div>
    );
};

export default Cart;
