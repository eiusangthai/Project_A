import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import RouterCustom from "./router";
import { CartProvider } from "./context/CartContext";
import "./style/style.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {" "}
    <BrowserRouter>
      <CartProvider>
        {" "}
        <RouterCustom />
      </CartProvider>
    </BrowserRouter>
  </React.StrictMode>
);
