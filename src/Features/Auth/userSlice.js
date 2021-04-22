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
const userSlice = createSlice({
  name: "user",
  initialState: {
    current: {},
    settings: {},
  },
  reducers: {},
  extraReducers: {
    [registerUser.fulfilled]: (state, action) => {
      state.current = action.payload;
    },
  },
});

const { reducer } = userSlice;

export default reducer;
