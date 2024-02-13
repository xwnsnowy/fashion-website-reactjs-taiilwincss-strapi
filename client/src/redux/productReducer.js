import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productDetail: null,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProductDetail: (state, action) => {
      state.productDetail = action.payload;
    },
  },
});

export const { setProductDetail } = productSlice.actions;

export default productSlice.reducer;
