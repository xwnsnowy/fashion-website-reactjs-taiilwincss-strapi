// store.js
import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productSlice";

const store = configureStore({
  reducer: {
    product: productReducer,
  },
  // config middleware
});

export default store;
