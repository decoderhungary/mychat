import React, { useState } from 'react';
import { apiClient } from '../../../interactions/api-client/api-client';
import SignUpForm from './SignUpForm';
import { validateSignUpForm } from "./validate";

const SignUpContainer = () => {
    const [state, setState] = useState({
        errors: {},
        user: {
            username: '',
            email: '',
            password: '',
            pwconfirm: ''
        },
        type: 'password'
    });

    const handleChange = (event) => {
        const field = event.target.name;
        let user = state.user;
        user[field] = event.target.value;

        setState({ ...state, user });
    }

    const pwHandleChange = (event) => {
        const field = event.target.name;
        let user = state.user;
        user[field] = event.target.value;

        setState({ ...state, user });
    }

    const validateForm = (event) => {
        event.preventDefault();
        var payload = validateSignUpForm(state.user);
        if (payload.success) {
            setState({ ...state, errors: {} });
            var user = {
                usr: state.user.username,
                pw: state.user.password,
                email: state.user.email
            };

            submitSignup(user);
        }
        else {
            const errors = payload.errors;
            setState({ ...state, errors });
        }
    }

    const signUpResponseHandler = (res) => {
        if (res && res.success){
            // Ird ki, hogy a regisztracio OK
        }
    }

    const submitSignup = async (user) => {
        let params = { username: user.usr, password: user.pw, email: user.email };

        const client = new apiClient('/static');
        client.post('signupResponse.json', params, signUpResponseHandler);
    }

    return (
        <div>
            <SignUpForm
                onSubmit={validateForm}
                onChange={handleChange}
                onPwChange={pwHandleChange}
                errors={state.errors}
                user={state.user}
                type={state.type}
            />
        </div>
    );
};

export default SignUpContainer;