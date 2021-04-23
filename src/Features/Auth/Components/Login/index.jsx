import { unwrapResult } from "@reduxjs/toolkit";
import { useSnackbar } from "notistack";
import PropTypes from "prop-types";
import React from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../../userSlice";
import LoginForm from "../LoginForm";

Login.propTypes = {
  closeDialog: PropTypes.func,
};
function Login(props) {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const handeRegisterSubmit = async (values) => {
    try {
      const action = loginUser(values);

      const resultAction = await dispatch(action);
      unwrapResult(resultAction);

      //close dialog
      const { closeDialog } = props;
      if (closeDialog) {
        closeDialog();
      }
      // enqueueSnackbar('Thanh cong', { variant: "success" });

    } catch (error) {
      // console.log("Failed to login ", error);
      enqueueSnackbar(error.message, { variant: "error" });
    }
  };

  return (
    <div>
      <LoginForm onSubmit={handeRegisterSubmit} />
    </div>
  );
}

export default Login;
