import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import userApi from "../../api/userApi";

export const register = createAsyncThunk("users/register", async (payload) => {
  //call Api to register
  const data = await userApi.register(payload);
  //save data to local
  localStorage.setItem("access_token", data.jwt);
  localStorage.setItem("user", JSON.stringify(data.user));
  return {};
});
const userSlice = createSlice({
  name: "user",
  initialState: {
    current: {},
    settings: {},
  },
  reducers: {},
  extraReducers: {
    [register.fulfilled]: (state, action) => {
      state.current = action.payload;
    },
  },
});

const { reducer } = userSlice;

export default reducer;
