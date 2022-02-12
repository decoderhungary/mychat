import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import "./account-style.scss";

const LoginForm = ({
    onSubmit,
    onChange,
    errors,
    user,
    type
}) => {
    return (
        <div className="loginBox">
            <h1>Login</h1>
            {errors.message && <p style={{ color: "red" }}>{errors.message}</p>}

            <form onSubmit={onSubmit}>
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
                <br />
                <RaisedButton
                    className="loginSubmit"
                    primary={true}
                    type="submit"
                    label="Login"
                />
            </form>
            <p>
                Don't have an account? <br />
                <a href="/signup">Sign up here</a>
            </p>
        </div>
    );
};

export default LoginForm;