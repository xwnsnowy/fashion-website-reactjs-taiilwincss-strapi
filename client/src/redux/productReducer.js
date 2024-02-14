import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productDetail: null,
  listProduct: null,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProductDetail: (state, action) => {
      state.productDetail = action.payload;
    },
    setListProduct: (state, action) => {
      state.listProduct = action.payload;
    },
  },
});

export const { setProductDetail, setListProduct } = productSlice.actions;

export default productSlice.reducer;
