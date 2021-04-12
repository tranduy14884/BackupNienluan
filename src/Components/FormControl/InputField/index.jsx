import React from "react";
import PropTypes from "prop-types";
import { TextField } from "@material-ui/core";
import { Controller } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

InputField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  disable: PropTypes.bool,
};

function InputField(props) {
  const { form, name, label, disable } = props;
  const { controls, formState } = form;
  const hasErr = formState.touchedFields[name] && formState.errors[name];
  // console.log(formState);
  // console.log(formState.errors[name], formState.touchedFields[name]);
  return (
    <>
    <Controller
      name={name}
      control={form.control}
      render={({
        field: { onChange, onBlur, value, name, ref },
        fieldState: { invalid, isTouched, isDirty, error },
        formState,
      }) => <TextField  />}
      fullWidth
     
      disable={disable}
      label={label}

     
      //helperText={formState.errors[name]?.message}
    >
        
    </Controller>
    <p>{formState.errors[name]?.message}</p>
    </>
  );
}

export default InputField;
