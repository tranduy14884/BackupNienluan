import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../Features/Auth/userSlice";
import adminReducer from "../Admin/Components/adminSlice";
const rootReducer = {
    user : userReducer,
    admin : adminReducer
}

const store = configureStore({
    reducer : rootReducer,
})

export default store;