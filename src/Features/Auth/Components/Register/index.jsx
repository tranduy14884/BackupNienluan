import { unwrapResult } from '@reduxjs/toolkit';
import React from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../userSlice';

Register.propTypes = {
};

function Register(props) {
    const disPatch = useDispatch();
    const handeRegisterSubmit  = async (values) =>{
        try {
            const action = register(values);
            const resultAction = await dispatch(action);
            const user = unwrapResult(resultAction);
            console.log('User : ' , user);
        } catch (error) {
            console.log('Failed to register user ', err);
        }
        
    };
    return (
        <div>
            <RegisterForm onSubmit={handeRegisterSubmit}/>
        </div>
    );
}

export default Register;