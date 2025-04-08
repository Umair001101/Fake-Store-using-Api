# 🛍️ FakeStore - React E-commerce Website

This is a simple e-commerce store built using **React** and **Redux**, fetching product data from the [Fake Store API](https://fakestoreapi.com/products). Users can browse products, view product details, add items to the cart, and proceed to checkout.
## Note:
``` 
You need to add a Google Client ID to your `.env` file (which should be located in the root of the project).

You can create your own Google Client ID from the Google Cloud Console.

For a step-by-step guide on how to get it, check out this blog:  
https://blog.logrocket.com/guide-adding-google-login-react-app/?utm_source=chatgpt.com

You can skip the coding part of the blog — you only need to follow the steps to create the Client ID.

Once you have it, add the following line to your `.env` file:

REACT_APP_GOOGLE_CLIENT_ID=your-client-id.apps.googleusercontent.com

After that, install the dependencies and the program should run smoothly.



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
