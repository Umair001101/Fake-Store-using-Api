import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { login, logout } from './Redux/AuthorizationSlice';
import { useGoogleLogin, googleLogout } from '@react-oauth/google';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ProductDescription from './Compononets/ProductDescription';
import Cart from './Compononets/Cart';
import Checkout from './Compononets/Checkout';
import NotFound from './Compononets/NotFound';
import Aboutus from './Compononets/Aboutus';
import ContactUs from './Compononets/ContactUs';
import Products from './Compononets/Products';
import PrivacyPolicy from './Compononets/PrivacyPolicy';
import './App.css';
function App() {
  const dispatch = useDispatch();
  const { user, isAuthenticated } = useSelector(state => state.authorization);
  const cartItems = useSelector((state) => state.cart.items);

  const loginGoogle = useGoogleLogin({
    onSuccess: (codeResponse) => {
      dispatch(login(codeResponse)); 
    },
    onError: (error) => console.log('Login Failed:', error),
  });

  useEffect(() => {
    if (isAuthenticated && user) {
      axios
        .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
          headers: {
            Authorization: `Bearer ${user.access_token}`,
            Accept: 'application/json',
          },
        })
        .then((res) => {
          dispatch(login(res.data));
        })
        .catch((err) => console.log(err));
    }
  }, [isAuthenticated, user, dispatch]);

  const logOut = () => {
    googleLogout();
    dispatch(logout()); 
  };

  return (
    <Router>
      <div className="navbar">
        <h2>Zylo 💎</h2>
        <nav>
          <Link to="/">Products</Link>
          <Link to="/cart" className="cart-icon">
            🛒 Cart
            {cartItems.length > 0 && <span>{cartItems.length}</span>}
          </Link>
        </nav>
        <div className="auth">
          {isAuthenticated ? (
            <div className="user-profile">
              <img src={user.picture} alt="user" className="user-avatar" />
              <span>{user.name}</span>
              <button onClick={logOut} style={{ marginLeft: '30px' }}>Log out</button>
            </div>
          ) : (
            <button onClick={loginGoogle}>Sign in with Google 🚀</button>
          )}
        </div>
      </div>

      <div className="container">
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/productdescription" element={<ProductDescription />} />
          <Route path="/checkout" element={<Checkout profile={user} />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        </Routes>
      </div>

      <footer>
        <div className="footer">
          <p>© 2025 Zylo. All rights reserved.</p>
          <Link to="/aboutus">About us</Link>
          <br />
          <Link to="/contactus">Contact us</Link>
          <br />
          <Link to="/privacypolicy">Privacy Policy</Link>
        </div>
      </footer>
    </Router>
  );
}

export default App;
