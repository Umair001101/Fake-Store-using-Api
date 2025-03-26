# 🛍️ FakeStore - React E-commerce Website

This is a simple e-commerce store built using **React** and **Redux**, fetching product data from the [Fake Store API](https://fakestoreapi.com/products). Users can browse products, view product details, add items to the cart, and proceed to checkout.

---

## 🚀 Features

- 🛒 **Fetch Products** from [Fake Store API](https://fakestoreapi.com/products)  
- 🔍 **Product Listing & Description**  
- 🛍 **Cart Management** (Add & Remove Items)  
- ✅ **Checkout Page**  
- 🎯 **Redux State Management**  
- ❌ **404 Not Found Page**  

---

## 📁 Project Structure

```
src/
│-- components/
│   ├── Cart.js
│   ├── NotFound.js
│   ├── Checkout.js
│   ├── ProductDescription.js
│   ├── Product.js
│   ├── ProductItem.js
│-- redux/
│   ├── CartSlice.js
│   ├── ProductSlice.js
│   ├── Store.js
│-- App.css
│-- App.js
│-- App.test.js
│-- index.css
│-- index.js
│-- reportWebVitals.js
│-- setupTests.js
│-- .gitignore
│-- package.json
│-- README.md
```
## 2️⃣ Install dependencies
```
npm install
npm install react react-dom react-router-dom @reduxjs/toolkit react-redux
```
## 🔌 API Integration
### This project fetches product data from Fake Store API.
### Example API call:
```
fetch("https://fakestoreapi.com/products")
  .then(res => res.json())
  .then(data => console.log(data));
```
## 📂 Redux State Management

Redux is used to manage the **Cart** and **Product** state.

- **`ProductSlice.js`** → Handles fetching products.  
- **`CartSlice.js`** → Manages cart state (add/remove items).  
- **`Store.js`** → Combines slices and configures Redux store.  

---

## 🌐 React Router Navigation

React Router is used for client-side routing:

- **Home Page** → `/`
- **Product Details** → `/product/:id`
- **Cart Page** → `/cart`
- **Checkout Page** → `/checkout`
- **404 Page** → `/not-found`

### Example usage in `App.js`:

```js
function App() {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/productdescription" element={<ProductDescription />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
``` 
## 3️⃣ Start the development server
```
npm start
```
### Open your browser and navigate to `http://localhost:3000/` to see the application in action.
---