# 🛍️ FakeStore - React E-commerce Website

This is a simple e-commerce store built using **React** and **Redux**, fetching product data from the [Fake Store API](https://fakestoreapi.com/products). Users can browse products, view product details, add items to the cart, and proceed to checkout.
## Note:
``` 
you will need to add google CLient ID to your .env file (the .env file should be in the root of project)
you can create your own google client ID from the google cloud console
you can see how to get it easily from this blog:
(https://blog.logrocket.com/guide-adding-google-login-react-app/?utm_source=chatgpt.com)

```
---

## 🚀 Features

- 🛒 **Fetch Products** from [Fake Store API](https://fakestoreapi.com/products)  
- 🔍 **Product Listing & Description**  
- 🛍 **Cart Management** (Add & Remove Items)  
- ✅ **Checkout Page**  
- 🛂 **Google Authorization** for User Login  
- 📜 **Contact Us Page**  
- 📜 **Privacy Policy Page**  
- 📜 **About Us Page**  
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
│   ├── Products.js
│   ├── ProductItem.js
│   ├── ContactUs.js
│   ├── PrivacyPolicy.js
│   └── AboutUs.js

│-- redux/
│   ├── AuthorizationSlice.js
│   ├── CartSlice.js
│   ├── ProductSlice.js
│   └──  Store.js
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
npm install redux-persist
npm install @react-oauth/google
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

Redux is used to manage the **Authorization** ,**Cart** and **Product** state.

- **`AuthorizationSlice.js`** → Manages Google Authorization.  
- **`ProductSlice.js`** → Handles fetching products.  
- **`CartSlice.js`** → Manages cart state (add/remove items).  
- **`Store.js`** → Combines slices and configures Redux store.  

---

## 🌐 React Router Navigation

React Router is used for client-side routing:

- **Home Page** → `/`
- **Product Details** → `/productdescription`
- **Cart Page** → `/cart`
- **Checkout Page** → `/checkout`
- **404 Page** → `/*`
- **Product List** → `/products`
- **About Us** → `/Aboutus`
- **Contact Us** → `/Contactus`
- **Privacy Policy** → `/PrivacyPolicy`

### Example usage in `App.js`:

```js
function App() {
  return (
    <Router>
      <Routes>
    <Route path="/" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/productdescription" element={<ProductDescription />} /> 
        <Route path="/checkout" element={<Checkout profile={profile} />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/aboutus" element={<Aboutus/>}       
        <Route path="/contactus" element={<ContactUs/>} />
        <Route path="/privacypolicy" element={<PrivacyPolicy/>} />
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