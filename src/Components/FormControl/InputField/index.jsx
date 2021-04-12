import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@material-ui/core';
import { Controller } from 'react-hook-form';

InputField.propTypes = {
    form : PropTypes.object.isRequired,
    name : PropTypes.string.isRequired,
    label : PropTypes.string,
    disable : PropTypes.bool,
};

function InputField(props) {
    const {form, name, label, disable} = props;
    const { errors, formState } = form;
    const hasErr =  formState.touchedFields[name]  &&  formState.errors[name];
    console.log(formState);
     console.log(formState.errors[name], formState.touchedFields[name]);
    return (
        <Controller 
            name={name}
            control={form.control}
            render = {({ field }) => <TextField {...field} />}

            fullWidth
            disable={disable}
            label={label}

            error = {errors}
            helperText='loi'
        />
            
      
    );
}

export default InputField;