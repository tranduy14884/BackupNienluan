import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import userApi from "../../api/userApi";

export const registerUser = createAsyncThunk(
  "accounts/register",
  async (payload) => {
    //call Api to register
    const data = await userApi.register(payload);
    //save data to local
    localStorage.setItem("access_token", data.jwt);
    localStorage.setItem("user", JSON.stringify(data.user));
    return data.user;
  }
);

export const loginUser = createAsyncThunk(
  "accounts/login",
  async (payload) => {
    //call Api to login
    const data = await userApi.login(payload);
    //save data to local
    localStorage.setItem("access_token", data.jwt);
    localStorage.setItem("user", JSON.stringify(data.user));
    return data.user;
  }
);
const userSlice = createSlice({
  name: "user",
  initialState: {
    current: JSON.parse(localStorage.getItem('user')) || {},
    settings: {},
  },
  reducers: {
    logout(state){
      //clear local Storage
      localStorage.removeItem('access_token');
      localStorage.removeItem('user');
      state.current = {};
    }
  },
  extraReducers: {
    [registerUser.fulfilled]: (state, action) => {
      state.current = action.payload;
    },
    [loginUser.fulfilled]: (state, action) => {
      state.current = action.payload;
    },
  },
});

const {actions, reducer } = userSlice;
export const { logout } = actions;
export default reducer;
