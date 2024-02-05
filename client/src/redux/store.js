// store.js
import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productReducer";
import cartReducer from "./cartReducer";

const store = configureStore({
  reducer: {
    product: productReducer,
    cart: cartReducer,
  },
  // config middleware
});

export default store;
