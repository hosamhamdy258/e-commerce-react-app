import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const loginUser = createAsyncThunk(
  "auth/login",
  async (loginData, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    const options = { responseType: "json", responseEncoding: "utf8" };

    try {
      console.log(loginData);
      const response = await axios.post(
        `http://localhost:3010/login/`,
        loginData,
        options
      );
      return response;
    } catch (error) {
      console.error(rejectWithValue);
      return rejectWithValue(error);
    }
  }
);
export const registerUser = createAsyncThunk(
  "auth/register",
  async (regData, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    const options = { responseType: "json", responseEncoding: "utf8" };

    try {
      console.log(regData);
      const response = await axios.post(
        `http://localhost:3010/register/`,
        regData,
        options
      );
      return response;
    } catch (error) {
      console.error(rejectWithValue);
      return rejectWithValue(error);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: { isLogged: false, user: {}, logmsg: "", regmsg: "" },
  reducers: {
    // login_logout: (state, action) => {
    //   state.isLogged = !state.isLogged;
    // },
    logoutUser: (state, action) => {
      state.user = {};
      state.isLogged = false;
    },
  },
  extraReducers: {
    [loginUser.pending]: (state, action) => {},
    [loginUser.fulfilled]: (state, action) => {
      console.log(action.payload);
      state.user = action.payload.data.user;
      state.isLogged = true;
    },
    [loginUser.rejected]: (state, action) => {
      console.log(action.payload);
      state.logmsg = action.payload.response.data;
      console.log("failllled");
    },
    [registerUser.pending]: (state, action) => {},
    [registerUser.fulfilled]: (state, action) => {
      // state.user = action.payload.data.user;
      // state.isLogged = true;
      state.isLogged = true;
      console.log(action.payload);
      state.user = action.payload.data.user;
    },
    [registerUser.rejected]: (state, action) => {
      state.regmsg = action.payload.response.data;
    },
  },
});
export const { logoutUser } = authSlice.actions;
export default authSlice.reducer;
