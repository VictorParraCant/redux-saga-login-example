import React, {Component, PropTypes as PT} from "react";
import { connect } from "react-redux";
import LoginForm from "components/Login/LoginForm";
import * as actions from "actions/login";

const Login = ({ loginRequest, isFetching, errors }) => {
    return (
        <div className="col-sm-4 col-sm-offset-4">
            <LoginForm
                processing={isFetching}
                errors={errors}
                login={ (loginData) => loginRequest(loginData) } />
        </div>
    );
};

Login.propTypes = {
    isFetching: PT.bool,
    errors: PT.object,
    loginRequest: PT.func
};

const mapStateToProps = ({ login }) => ({
    errors: login.errors,
    isFetching: login.isFetching
});
const mapDispatchToProps = dispatch => ({
    loginRequest: (loginData) => dispatch( actions.loginRequest(loginData) )
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
