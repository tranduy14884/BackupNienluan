import React from 'react';
import PropTypes from 'prop-types';

Register.propTypes = {
};

function Register(props) {
    const handeRegisterSubmit  = (value) =>{
        console.log(value);
    };
    return (
        <div>
            <RegisterForm onSubmit={handeRegisterSubmit}/>
        </div>
    );
}

export default Register;