import { yupResolver } from "@hookform/resolvers/yup";
import { Avatar, Button, makeStyles, TextField } from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import InputField from "../../../../Components/FormControl/InputField";
import "./style.css";
import Typography from '@material-ui/core/Typography';

const useStyle = makeStyles((theme) => ({
  
  root : {
    paddingTop : theme.spacing(2),


  },

  avatar : {
    margin : '0 auto',
    backgroundColor : theme.palette.secondary.main,
  },

  title : {
    textAlign : 'center',
    margin : theme.spacing(1, 0, 3, 0)
  },

  submit : {
      backgroundColor : '#ff6600',
      width : '100%',
      padding : theme.spacing(1 , 0),
      fontSize : '20px',
      fontWeight : '600'
  },


}));
RegisterForm.propTypes = {
  onSubmit: PropTypes.func,
};

function RegisterForm(props) {
  const classes = useStyle();
  const schema = yup.object().shape({
    fullName: yup.string().required("Please enter data"),
    email: yup.string().required("Please enter data"),
    password: yup.string().required("Please enter data"),
    repassword: yup.string().required("Please enter data"),
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
  return (
    <div className={classes.root}>
      <Avatar className={classes.avatar}>
        <i class="fas fa-unlock-alt"></i>
      </Avatar>
      <Typography className={classes.title} component="h3" variant="h">
          Create Account
        </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField {...register("fullName")} label="Full name" variant="outlined" fullWidth />
        <p className="message">{errors.fullName?.message}</p>

        <TextField {...register("email")} label="email"  variant="outlined" fullWidth  />
        <p className="message">{errors.email?.message}</p>

        <TextField {...register("password")} label="password"  variant="outlined" fullWidth  />
        <p className="message">{errors.password?.message}</p>

        <TextField {...register("repassword")} label="repassword"  variant="outlined" fullWidth  />
        <p className="message">{errors.repassword?.message}</p>

        <button className={classes.submit} type="submit">
            CREATE AN ACCOUNT
        </button>
      </form>
    </div>
  );
}

export default RegisterForm;
