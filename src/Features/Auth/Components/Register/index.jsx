import { unwrapResult } from "@reduxjs/toolkit";
import { useSnackbar } from "notistack";
import PropTypes from "prop-types";
import React from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "../../userSlice";
import RegisterForm from "../RegisterForm";

Register.propTypes = {
  closeDialog: PropTypes.func,
};
function Register(props) {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const handeRegisterSubmit = async (values) => {
    try {
      //auto set username = email
      values.username = values.email;
      const action = registerUser(values);
      const resultAction = await dispatch(action);
      unwrapResult(resultAction);

      //close dialog
      const { closeDialog } = props;
      if (closeDialog) {
        closeDialog();
      }
      enqueueSnackbar("Đăng ký thành công !!! ", { variant: "success" });
    } catch (error) {
      console.log("Failed to register user ", error);
      enqueueSnackbar(error.message , {variant : "error"})
    }
  };

  return (
    <div>
      <RegisterForm onSubmit={handeRegisterSubmit} />
    </div>
  );
}

export default Register;
