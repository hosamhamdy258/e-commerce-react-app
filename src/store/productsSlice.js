import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const getProducts = createAsyncThunk(
  "products/getProducts",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("https://dummyjson.com/products");
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
);

const initialState = {products:[]};
const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    productsApisetter: (state, action) => {
      state.products = action.payload;
    },
  },
  extraReducers: {
    [getProducts.pending]: (state, action) => {},
    [getProducts.fulfilled]: (state, action) => {
      state.products = action.payload.products;
    },
    [getProducts.rejected]: (state, action) => {},
  },
});
export default productsSlice.reducer;
export const { productsApisetter } = productsSlice.actions;
