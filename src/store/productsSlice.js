import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const getProducts = createAsyncThunk(
  "products/getProducts",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await axios.get("http://localhost:3010/products");
      // console.log(response.data);
      return response.data;
    } catch (error) {
      console.error(rejectWithValue);
      return rejectWithValue(error);
    }
  }
);

const initialState = { products: [], isLoading: false };
const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    productsApisetter: (state, action) => {
      state.products = action.payload;
    },
  },
  extraReducers: {
    // get product from api server
    [getProducts.pending]: (state, action) => {},
    [getProducts.fulfilled]: (state, action) => {
      state.products = action.payload;
    },
    [getProducts.rejected]: (state, action) => {
      // show erorr tooltip at top of screen
      // state.isLoading = true;
    },
  },
});
export default productsSlice.reducer;
export const { productsApisetter } = productsSlice.actions;

