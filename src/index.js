import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./Redux/Store";
import { GoogleOAuthProvider } from '@react-oauth/google';
import App from "./App";
import "./index.css";
const googleClientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;
ReactDOM.createRoot(document.getElementById("root")).render(
  <GoogleOAuthProvider clientId={googleClientId}>
    <Provider store={store}>
      <App />
    </Provider>
  </GoogleOAuthProvider>
);


