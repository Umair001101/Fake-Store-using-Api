import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../Redux/CartSlice";
import { useDispatch, useSelector } from "react-redux";
import "./Checkout.css";

const Checkout = ({ profile }) => {  
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [submitted, setSubmitted] = useState(false);
  const cartItems = useSelector((state) => state.cart.items);
  const [profileData, setProfileData] = useState({
    name: profile ? profile.name : "",
    email: profile ? profile.email : "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    console.log("Order Placed!");
    dispatch(clearCart());
  };

  const GoBack = () => {
    navigate("/");
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }
  return (
    <div className="checkout-container">
      {(cartItems.length === 0 && submitted === false ) ? (<>
        <h1>Cart is empty!</h1>
        <p>Add items to cart to checkout!</p>
        <button className="go-back-button" onClick={GoBack}>
                Go to Home page
        </button>
        </>
      ) : (
        <>
          <h2>Checkout</h2>
          {submitted ? (
            <>
              <p className="success-message">🎉 Order placed successfully!</p>
              <button className="go-back-button" onClick={GoBack}>
                Go to Home page
              </button>
            </>
          ) : (
            <form onSubmit={handleSubmit} className="checkout-form">
              <p>Welcome, {profile ? profile.name : "Guest"}</p> 
              <input
                type="text"
                name="name"
                placeholder="Name"
                required
                value={profileData.name}
                onChange={handleChange}
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                value={profileData.email}
                onChange={handleChange}
              />
              <input type="text" name="address" placeholder="Address" required />
              <input type="text" name="city" placeholder="City" required />
              <input
                type="text"
                name="zip"
                placeholder="ZIP Code"
                required
                maxLength="5"
              />
              <h3>Payment Info</h3>
              <input
                type="text"
                name="cardNumber"
                placeholder="Card Number"
                required
                maxLength="16"
              />
              <input
                type="text"
                name="expiry"
                placeholder="MM/YY"
                required
                maxLength="5"
              />
              <input
                type="text"
                name="cvv"
                placeholder="CVV"
                required
                maxLength="3"
              />
              <div className="buttons">
                <button type="submit" className="checkout-btn">
                   Place Order
                </button>
                <button
                  type="button"
                  className="cancel-btn"
                  onClick={GoBack}
                >
                  Go to Home page
                </button>
                <button
                  type="button"
                  className="go-back-button"
                  onClick={() => navigate("/cart")}
                >
                   Go Back to Cart
                </button>
              </div>
            </form>
          )}
        </>
      )}
    </div>
  );
};

export default Checkout;
