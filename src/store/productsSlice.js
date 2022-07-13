import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const getProducts = createAsyncThunk(
  "products/getProducts",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await axios.get("https://dummyjson.com/products");
      return response.data;
    } catch (error) {
      console.error(rejectWithValue);
      return rejectWithValue(error);
    }
  }
);

const initialState = {};
const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    productsApisetter: (state, action) => {
      state.products = action.payload;
    },
  },
  extraReducers: {
    [getProducts.pending]: (state, action) => {
      console.log("pend");
    },
    [getProducts.fulfilled]: (state, action) => {
      state.products = action.payload.products;
    },
    [getProducts.rejected]: (state, action) => {
      console.log("failed");
    },
  },
});
export default productsSlice.reducer;
export const { productsApisetter } = productsSlice.actions;
