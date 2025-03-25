import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../Redux/CartSlice";
import "./Checkout.css";
import { useDispatch,  } from "react-redux";

const Checkout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(clearCart());
    setSubmitted(true);
    console.log("Order Placed!");
  };
  const GoBack = () => {
    navigate("/");
    };
  return (
    <div className="checkout-container">
      <h2>Checkout</h2>
      {submitted ? (<>
        <p className="success-message">🎉 Order placed successfully!</p>
        <button className="go-back-button" onClick={GoBack}>Go to Home page</button> 
        </>
      ) : (
        <form onSubmit={handleSubmit} className="checkout-form">
          <input type="text" name="name" placeholder="Name" required />
          <input type="email" name="email" placeholder="Email" required />
          <input type="text" name="address" placeholder="Address" required />
          <input type="text" name="city" placeholder="City" required />
          <input type="text" name="zip" placeholder="ZIP Code" required maxLength="5" />
          <h3>Payment Info</h3>
          <input type="text" name="cardNumber" placeholder="Card Number" required maxLength="16" />
          <input type="text" name="expiry" placeholder="MM/YY" required maxLength="5" />
          <input type="text" name="cvv" placeholder="CVV" required maxLength="3" />
          <div className="buttons">
            <button type="submit" className="checkout-btn">✅ Place Order</button>
            <button type="button" className="cancel-btn" onClick={GoBack}>Go to Home page</button>
            <button type="button" className="go-back-btn" onClick={() => navigate("/cart")}>🔙 Go Back</button>

          </div>
        </form>
      )}
    </div>
  );
};

export default Checkout;
