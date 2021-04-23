import { yupResolver } from "@hookform/resolvers/yup";
import {
  Avatar,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  LinearProgress,
  makeStyles,
  OutlinedInput,
  TextField,
  Typography,
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
    position: "relative",
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
  progress: {
    position: "absolute",
    top: theme.spacing(1),
    left: 0,
    right: 0,
  },
}));

LoginForm.propTypes = {
  onSubmit: PropTypes.func,
};

function LoginForm(props) {
  const classes = useStyle();
  const schema = yup.object().shape({
    email: yup.string().required("Please enter data").email("Email is valid"),
    password: yup.string().required("Please enter data"),
  });
  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      
    },
  });

  const handleSubmitForm = async (data) => {
    const { onSubmit } = props;
    if (onSubmit) {
      await onSubmit(data);
    }
  };
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
      {isSubmitting && <LinearProgress className={classes.progress} />}
      <Avatar className={classes.avatar}>
        <i class="fas fa-unlock-alt"></i>
      </Avatar>
      <Typography className={classes.title} component="h3" variant="h5">
        Login
      </Typography>
      <form onSubmit={handleSubmit(handleSubmitForm)}>
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
        <button
          disabled={isSubmitting}
          className={classes.submit}
          type="submit"
        >
          SIGN IN
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
