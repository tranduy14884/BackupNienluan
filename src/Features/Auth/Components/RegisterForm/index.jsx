import { yupResolver } from '@hookform/resolvers/yup';
import { TextField } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import InputField from '../../../../Components/FormControl/InputField';
import './style.css';

RegisterForm.propTypes = {
  onSubmit: PropTypes.func,
};

function RegisterForm(props) {
  const schema = yup.object().shape({
    fullName: yup.string().required('Please enter data'),

  });
;
  const { register, formState: { errors }, handleSubmit } = useForm({
    resolver: yupResolver(schema),
    defaultValue : {
      fullName : '',
    }
  });
  const onSubmit = data => console.log(data);
  return (
    
    <form onSubmit={handleSubmit(onSubmit)}>
      <p className="field-title">Ho va ten</p>
      <TextField {...register("fullName")}/>
      <p className="message">{errors.fullName?.message}</p>


      {/* <InputField register={register} errors = {errors} name="fullName"></InputField> */}
      <button type="submit">Create an account</button>
    </form>
  );
}

export default RegisterForm;
