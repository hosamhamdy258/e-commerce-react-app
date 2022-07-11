import { createSlice } from "@reduxjs/toolkit";
const initialState = { value: false };
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    show_hide: (state) => {
      state.value = !state.value;
    },
  },
});
export const { show_hide } = authSlice.actions;
export default authSlice.reducer;
