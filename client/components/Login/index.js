import React, {Component, PropTypes as PT} from "react";
import { connect } from "react-redux";
import LoginForm from "components/Login/LoginForm";
import * as actions from "actions/login";
import { Link } from "react-router";

const Login = ({ loginRequest, inputChange, isFetching, email, password, errors, pause }) => {
    return (
        <div className="col-sm-4 col-sm-offset-4">
            <LoginForm
                processing={isFetching}
                email={email}
                password={password}
                pause={pause}
                errors={errors}
                login={ (loginData) => loginRequest(loginData) }
                onChangeHandle={ (change) => inputChange(change) } />
            <br/>
            <p>Dont have an account? <Link to={"/signup"}>Sign Up!</Link></p>
        </div>
    );
};

Login.propTypes = {
    isFetching: PT.bool,
    errors: PT.object,
    loginRequest: PT.func,
    inputChange: PT.func,
    email: PT.string,
    password: PT.string
};

const mapStateToProps = ({ login }) => ({
    errors: login.errors,
    isFetching: login.isFetching,
    email: login.email,
    password: login.password,
    pause: login.pause
});

const mapDispatchToProps = dispatch => ({
    inputChange: (change) => dispatch(actions.loginInputChange(change)),
    loginRequest: (loginData) => {
        // Front Validation
        let newErrors = {};
        let hasErrors = false;
        let { email, password } = loginData;
        if ( !email || email.length < 2) {
            newErrors.email = "min 2";
            hasErrors = true;
        }
        if ( !password || password.length < 2) {
            newErrors.password = "min 2";
            hasErrors = true;
        }
        if ( !hasErrors ){
            dispatch(actions.loginRequest(loginData));
        } else {
            dispatch(actions.loginFailed(newErrors));
        }
    }
});


export default connect(mapStateToProps, mapDispatchToProps)(Login);
