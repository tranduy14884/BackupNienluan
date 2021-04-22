import { unwrapResult } from "@reduxjs/toolkit";
import React from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "../../userSlice";
import RegisterForm from "../RegisterForm";

function Register(props) {
  const dispatch = useDispatch();
  const handeRegisterSubmit = async (values) => {
    try {
        //auto set username = email
        values.username = values.email;
        const action = registerUser(values);
        const resultAction = await dispatch(action);
        const user = unwrapResult(resultAction);
        console.log('User : ' , user);
    } catch (error) {
        console.log('Failed to register user ', error);
    }
  };
 
  return (
    <div>
      <RegisterForm onSubmit={handeRegisterSubmit} />
    </div>
  );
}

export default Register;
