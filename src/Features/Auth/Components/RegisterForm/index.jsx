import { yupResolver } from "@hookform/resolvers/yup";
import {
  Avatar,






  FormControl, IconButton,






  InputAdornment, InputLabel, makeStyles,




  OutlinedInput, TextField,

  Typography
} from "@material-ui/core";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import PropTypes from "prop-types";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import "./style.css";

const useStyle = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(2),
  },

  avatar: {
    margin: "0 auto",
    backgroundColor: theme.palette.secondary.main,
  },

  title: {
    textAlign: "center",
    margin: theme.spacing(1, 0, 3, 0),
  },

  submit: {
    backgroundColor: "#ff6600",
    width: "100%",
    padding: theme.spacing(1, 0),
    fontSize: "20px",
    fontWeight: "600",
  },
}));
RegisterForm.propTypes = {
  onSubmit: PropTypes.func,
};

function RegisterForm(props) {
  const classes = useStyle();
  const schema = yup.object().shape({
    fullName: yup
    .string()
    .required("Please enter data")
    .test('The least is two words','Please enter at least two words ',(value) =>{
      return value.split(' ').length >= 2;
    }),
    email: yup
    .string()
    .required("Please enter data")
    .email('Email is valid'),
    password: yup.string().required("Please enter data").min(6,'Please enter at least 6 chars'),
    repassword: yup.string().required("Please enter data").oneOf([yup.ref('password')],'Repassword does not match'),
  });
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValue: {
      fullName: "",
    },
  });
  const onSubmit = (data) => console.log(data);

  const [showPassword, setShowPassword] = useState(false);
  const [showRePassword, setShowRePassword] = useState(false);

  const toggleShowRePassword = () => {
    setShowRePassword((x) => !x);
  };

  const toggleShowPassword = () => {
    setShowPassword((x) => !x);
  };
  return (
    <div className={classes.root}>
      <Avatar className={classes.avatar}>
        <i class="fas fa-unlock-alt"></i>
      </Avatar>
      <Typography className={classes.title} component="h3" variant="h5">
        Create Account
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          {...register("fullName")}
          label="Full name"
          variant="outlined"
          fullWidth
        />
        <p className="message">{errors.fullName?.message}</p>

        <TextField
          {...register("email")}
          label="email"
          variant="outlined"
          fullWidth
        />
        <p className="message">{errors.email?.message}</p>

        <FormControl fullWidth variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? "text" : "password"}
            {...register("password")}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={toggleShowPassword}
                  edge="end"
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
            labelWidth={70}
          />
        </FormControl>
        <p className="message">{errors.password?.message}</p>

        <FormControl fullWidth variant="outlined">
          <InputLabel htmlFor="outlined-adornment-repassword">
            RePassword
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-repassword"
            type={showRePassword ? "text" : "password"}
            {...register("repassword")}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={toggleShowRePassword}
                  edge="end"
                >
                  {showRePassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
            labelWidth={100}
          />
        </FormControl>
        <p className="message">{errors.repassword?.message}</p>
        <button className={classes.submit} type="submit">
          CREATE AN ACCOUNT
        </button>
      </form>
    </div>
  );
}

export default RegisterForm;
