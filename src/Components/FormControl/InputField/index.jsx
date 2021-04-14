import { TextField } from "@material-ui/core";
import React from "react";
import PropTypes from "prop-types";

InputField.propTypes = {
  register: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  disable: PropTypes.bool,
  errors : PropTypes.object.isRequired,
  label : PropTypes.string,
};

function InputField(props) {
  const { register, name, disable , errors , label} = props;
  console.log(name);
  return (
    <>
      <TextField  
        {...register({name})} 
        defaultValue="" 
        label={label}
        fullWidth
        variant="outlined"
      />
      <p>{errors['fullName']?.message}</p>
    </>
  );
}

export default InputField;
