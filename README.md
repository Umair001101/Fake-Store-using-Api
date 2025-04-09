# 🛍️ FakeStore - React E-commerce Website

This is a simple e-commerce store built using **React** and **Redux**, fetching product data from the [Fake Store API](https://fakestoreapi.com/products). Users can browse products, view product details, add items to the cart, and proceed to checkout.
# Note:
## Create a Google Client ID:
### ( you can ignore it too but then Google authentication login will not work.)

1. Go to the [Google Cloud Console](https://console.cloud.google.com/).
2. If you don’t have a project, create a new one by clicking on the **New Project** button.
3. Once your project is created, navigate to **APIs & Services > Credentials**.
4. Under the **Credentials** section, click on **Create Credentials** and select **OAuth 2.0 Client IDs**.
5. You'll need to configure the **OAuth consent screen** first, if you haven't already. You can just fill in the basic information like the app name, email, and developer contact info.
6. For the **Application type**, select **Web application**.
7. Under **Authorized JavaScript origins**, add your app's URL (e.g., `http://localhost:3000` for local development).
8. Under **Authorized redirect URIs**, add your app’s redirect URL. For local development, this is usually something like `http://localhost:3000`.
9. After this, you’ll be given a **Client ID** (and Client Secret, but you typically only need the **Client ID** for the front-end).

## Update .env File:

1. Open the root of your React project and find (or create) the `.env` file.
2. Add the following line to the `.env` file:
REACT_APP_GOOGLE_CLIENT_ID=your-client-id.apps.googleusercontent.com
```
Replace `your-client-id.apps.googleusercontent.com` with the Client ID you generated.
```
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
│   ├── Orderlist.js
│   ├── NotFound.js
│   ├── Checkout.js
│   ├── ProductDescription.js
│   ├── Products.js
│   ├── ProductItem.js
│   ├── ContactUs.js
│   ├── PrivacyPolicy.js
│   └── AboutUs.js

│-- redux/
│   ├── OrderSlice.js
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

- - **`OrderSlice.js`** → Manages Order List.  
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
- **Orderlist** → `/Orderlist`

### Example usage in `App.js`:

```js
function App() {
  return (
    <Router>
      <Routes>
   <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/productdescription" element={<ProductDescription />} />
          <Route path="/checkout" element={<Checkout profile={user} />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route path="/Orderlist" element={<Orderlist />} />
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
