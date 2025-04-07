import { useSelector, useDispatch } from "react-redux";
import { addItem, clearCart, removeItems, remove_a_Item } from "../Redux/CartSlice";
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

  const handleAddToCart = (product) => {
    const selectedQuantity = product.quantity; 
    if (selectedQuantity >= product.rating.count) {
      alert("Cannot add more items than available items!");
      return;
    }

    dispatch(addItem(product)); 
  };

  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <>
          <p className="empty-cart">Your cart is empty.</p>
          <button onClick={AddMore} className="empty-cart-button">Add Items in cart</button>
        </>
      ) : (
        <>
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.title} className="item-image" />
              <div className="item-details">
                <h4>{item.title}</h4>
                <p>Price: ${item.price}</p>
                <p>Available Quantity: {item.rating.count}</p>
                <p>Selected Quantity: {item.quantity}</p>
                <p>Subtotal: ${item.price * item.quantity}</p>
                <div className="cart-buttons">
                  <button onClick={() => dispatch(removeItems(item.id))} className="remove-all-button">
                    Remove item
                  </button>
                  <button onClick={() => dispatch(remove_a_Item(item.id))} className="remove-one-button">
                    -
                  </button>
                  <button onClick={() => handleAddToCart(item)} className="add-more-button">
                    +
                  </button>
                  <button onClick={() => Details(item)} className="details-button">
                    Details
                  </button>
                </div>
              </div>
            </div>
          ))}
          <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
          <button onClick={() => dispatch(clearCart())} className="remove-cart-button">
            Remove All
          </button>
          <button onClick={Checkout}>Checkout</button>
          <button onClick={AddMore} className="add-more-button">Continue Shopping</button>
        </>
      )}
    </div>
  );
};

export default Cart;
