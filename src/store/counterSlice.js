import { createSlice } from "@reduxjs/toolkit";
const initialState = { value: 0 };
export const counterSlice = createSlice({
  name: "counter",
  //   key and value are the same name you can remove value and automaticlly will assign key and value with the same name
  // initialState,
  initialState: initialState,
  //   rudex toolkit comes with lib called immer handle mutation object you don't have to use ...state anymore
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});
// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;
