import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { GoogleLogin, googleLogout, useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import Products from "./Compononets/Products";
import Cart from "./Compononets/Cart";
import ProductDescription from "./Compononets/ProductDescription";
import Checkout from "./Compononets/Checkout";
import NotFound from "./Compononets/NotFound";
import Aboutus from './Compononets/Aboutus';
import ContactUs from './Compononets/ContactUs';
import PrivacyPolicy from './Compononets/PrivacyPolicy';
import "./App.css";
function App() {
    const [user, setUser] = useState([]);
    const [profile, setProfile] = useState([]);
    const cartItems = useSelector((state) => state.cart.items);

    const login = useGoogleLogin({
        onSuccess: (codeResponse) => setUser(codeResponse),
        onError: (error) => console.log('Login Failed:', error),
    });

    useEffect(() => {
        if (user) {
            axios
                .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
                    headers: {
                        Authorization: `Bearer ${user.access_token}`,
                        Accept: 'application/json',
                    },
                })
                .then((res) => {
                    setProfile(res.data);
                })
                .catch((err) => console.log(err));
        }
    }, [user]);

    const logOut = () => {
        googleLogout();
        setProfile(null);
    };

    return (
        <Router>
            <div className="navbar">
                <h2>Zylo 💎</h2>
                <nav>
                    <Link to="/">Products</Link>
                    <Link to="/cart" className="cart-icon">
                        🛒 Cart
                        {cartItems.length > 0 && <span >{cartItems.length}</span>}
                    </Link>
                </nav>
                <div className="auth">
                    {profile ? (
                        <div className="user-profile">
                            <img src={profile.picture} alt="user" className="user-avatar" />
                            <span>{profile.name}</span>
                            <button onClick={logOut} style={{ marginLeft: '30px' }}>Log out</button>
                        </div>
                    ) : (
                        <button onClick={login}>Sign in with Google 🚀</button>
                    )}
                </div>
            </div>

            <div className="container">
                <Routes>
                    <Route path="/" element={<Products />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/productdescription" element={<ProductDescription />} />
                    <Route path="/checkout" element={<Checkout profile={profile} />} />
                    <Route path="*" element={<NotFound />} />
                    <Route path="/aboutus" element={<Aboutus/>} />
                    <Route path="/contactus" element={<ContactUs/>} />
                    <Route path="/privacypolicy" element={<PrivacyPolicy/>} />
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
