import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { stringify } from "query-string";
import adminApi from "../../api/adminApi";

export const loginAdmin = createAsyncThunk(
     'admin/login',
     async (payload) =>{
         //call api
         const data = await adminApi.login(payload);
         //save data to local
         localStorage.setItem('admin_token',data.jwt);
         localStorage.setItem('admin',JSON.stringify(data.admin));
         return data.admin;
     }
 );

const adminSlice = createSlice({
    name : 'admin',
    initialState : {
        current : JSON.parse(localStorage.getItem('admin')) || {}
      
    },
    reducers : {
        logout(state){
            //clear
            localStorage.removeItem('admin');
            localStorage.removeItem('admin_token');
            state.current = {};
        }
    },
    extraReducers : {
        [loginAdmin.fulfilled] : (state, actions) => {
            state.current = actions.payload;
        }
    }

});

  
const { actions, reducer} = adminSlice;
export const {logout} = actions;
export default reducer;
