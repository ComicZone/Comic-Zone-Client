import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css";
import App from "./App";
import { CartProvider } from "./Context/cart_context";
import { UserProvider } from "./Context/user_context";
import { StoreProvider } from "./Context/store_context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UserProvider>
      <StoreProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </StoreProvider>
    </UserProvider>
  </React.StrictMode>
);

