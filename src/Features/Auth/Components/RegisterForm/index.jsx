import React from 'react';
import PropTypes from 'prop-types';
// import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import InputField from '../../../../Components/FormControl/InputField';
import { useForm } from 'react-hook-form';

RegisterForm.propTypes = {
  onSubmit: PropTypes.func,
};

function RegisterForm(props) {
  const schema = yup.object().shape({
    fullName: yup.string().required('Please enter data'),

  });
  

  const form = useForm({
    defaultValues: {
      fullName: '',
    },
    resolver: yupResolver(schema),
  });

  const handleSubmit = (value) => {
    // const {onSubmit} = props;
    // if(onSubmit)
    // {
    //     onSubmit(value);
    // }
    // form.reset();
    console.log(value);
  };
  return (
    <form onSubmit={form.handleSubmit(handleSubmit)}>
      <InputField name="fullName" form={form} label="todo" />
    
    </form>
  );
}

export default RegisterForm;
