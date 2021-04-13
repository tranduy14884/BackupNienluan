import React from "react";

InputField.propTypes = {
  // register: PropTypes.string.isRequired,
  // name: PropTypes.string.isRequired,
  // disable: PropTypes.bool,
  // errors : PropTypes.object.isRequired,
};

function InputField(props) {
  const { register, name, disable , errors} = props;
  return (
    <>
      <InputField  
        {...register({name})} 
        defaultValue="" 
      />
      <p>{errors.name?.message}</p>
    </>
  );
}

export default InputField;
