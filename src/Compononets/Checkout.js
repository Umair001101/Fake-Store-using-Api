import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../Redux/CartSlice";
import { useDispatch, useSelector } from "react-redux";
import "./Checkout.css";
import { addOrder } from "../Redux/OrderSlice";

const Checkout = ({ profile }) => {  
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [order, setOrder] = useState({
    name: profile ? profile.name : "",
    email: profile ? profile.email : "",
    phone: "",
    address: "",
    city: "",
    zip: "",
    cardNumber: "",
    cvv: "",
    expiry: "",
  })
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
    const fullOrder = {
      ...order,
      ...profileData,
      items: cartItems, 
    };
    dispatch(addOrder(fullOrder));
    console.log("Order Details:", fullOrder);
    dispatch(clearCart());
  };
  const handleOrderChange = (e) => {
    const { name, value } = e.target;
    setOrder((prevOrder) => ({
      ...prevOrder,
      [name]: value,
    }));
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
              <input type="text" name="address" placeholder="Address"  required value={order.address} onChange={handleOrderChange}  />
              <input type="text" name="city" placeholder="City"  required value={order.city} onChange={handleOrderChange} />
              <input
                type="text"
                name="zip"
                placeholder="ZIP Code"
                maxLength="5"
                required value={order.zip} onChange={handleOrderChange}
              />
              <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              maxLength="13"
              minLength="11"
              required value={order.phone} onChange={handleOrderChange}
              />
              <h3>Payment Info</h3>
              <input
                type="text"
                name="cardNumber"
                placeholder="Card Number"
                required value={order.cardNumber} onChange={handleOrderChange}
                maxLength="16"
                minLength={16}
      
              />
              <input
                type="text"
                name="expiry"
                placeholder="MM/YY"
                required value={order.expiry} onChange={handleOrderChange}
                maxLength="5"
                minLength={5}
              />
              <input
                type="text"
                name="cvv"
                placeholder="CVV"
                required value={order.cvv} onChange={handleOrderChange}
                maxLength="3"
                minLength={3}
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
