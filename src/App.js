import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Products from "./Compononets/Products"; 
import Cart from "./Compononets/Cart";
import ProductDescription from "./Compononets/ProductDescription";  
import Checkout from "./Compononets/Checkout";
import NotFound from "./Compononets/NotFound";
import "./App.css";

function App() {
  const cartItems = useSelector((state) => state.cart.items);
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
      </div>
      <div className="container">
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/productdescription" element={<ProductDescription />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
