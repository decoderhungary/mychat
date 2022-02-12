import { TextField } from 'material-ui';
import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import "./account-style.scss";

const SignUpForm = ({
    onSubmit,
    onChange,
    onPwChange,
    errors,
    user,
    type }) => {
    return (
        <div className="loginBox">
            <h1>Sign Up</h1>
            {errors.message && <p style={{ color: "red" }}>{errors.message}</p>}

            <form onSubmit={onSubmit}>
                <div>
                    <TextField
                        name="username"
                        floatingLabelText="user name"
                        value={user.username}
                        onChange={onChange}
                        errorText={errors.username}
                    />
                </div>
                <div>
                    <TextField
                        name="email"
                        floatingLabelText="email"
                        value={user.email}
                        onChange={onChange}
                        errorText={errors.email}
                    />
                </div>
                <div>
                    <TextField
                        type={type}
                        name="password"
                        floatingLabelText="password"
                        value={user.password}
                        onChange={onChange}
                        errorText={errors.password}
                    />
                </div>
                <div>
                    <TextField
                        type={type}
                        name="pwconfirm"
                        floatingLabelText="confirm password"
                        value={user.pwconfirm}
                        onChange={onPwChange}
                        errorText={errors.pwconfirm}
                    />
                </div>
                <br />
                <RaisedButton
                    className="signUpSubmit"
                    primary={true}
                    type="submit"
                    label="Sign Up"
                />
            </form>
            <p>
                Already have an account? <br />
                <a href="/login">Log in here</a>
            </p>
        </div>
    );
};


export default SignUpForm;