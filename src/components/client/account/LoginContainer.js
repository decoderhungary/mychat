import React, { useState } from 'react';
import LoginForm from './LoginForm';
import { validateLoginForm } from "./validate";
import { apiClient } from '../../../interactions/api-client/api-client';

const LoginContainer = () => {
    const [state, setState] = useState({
        errors: {},
        user: {
            email: '',
            password: ''
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
        var payload = validateLoginForm(state.user);
        if (payload.success) {
            setState({ ...state, errors: {} });
            var user = {
                pw: state.user.password,
                email: state.user.email
            };

            submitLogin(user);
        }
        else {
            const errors = payload.errors;
            setState({ ...state, errors });
        }
    }

    const loginResponseHandler = (res) => {
        if (res) {
            alert(`${res.username} ${res.color}`);
        }
    }

    const submitLogin = async (user) => {
        let params = { password: user.pw, email: user.email };

        const client = new apiClient('/static');
        client.post('loginResponse.json', params, loginResponseHandler);
    }

    return (
        <div>
            <LoginForm
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

export default LoginContainer;