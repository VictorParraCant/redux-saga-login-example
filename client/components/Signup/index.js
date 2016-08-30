import React, {Component, PropTypes as PT} from "react";
import { connect } from "react-redux";
import SignupForm from "components/Signup/SignupForm";
import * as actions from "actions/signup";

const Signup = ({ signupRequest, inputChange, isFetching, email, password, errors, pause }) => {
    return (
        <div className="col-sm-4 col-sm-offset-4">
            <SignupForm
                processing={isFetching}
                email={email}
                password={password}
                pause={pause}
                errors={errors}
                signup={ (signupData) => signupRequest(signupData) }
                onChangeHandle={ (change) => inputChange(change) } />
        </div>
    );
};

Signup.propTypes = {
    isFetching: PT.bool,
    errors: PT.object,
    signupRequest: PT.func,
    inputChange: PT.func,
    email: PT.string,
    password: PT.string
};

const mapStateToProps = ({ signup }) => ({
    errors: signup.errors,
    isFetching: signup.isFetching,
    email: signup.email,
    password: signup.password,
    pause: signup.pause
});

const mapDispatchToProps = dispatch => ({
    inputChange: (change) => dispatch(actions.inputChange(change)),
    signupRequest: (signupData) => {
        // Front Validation
        let newErrors = {};
        let hasErrors = false;
        let { email, password } = signupData;
        if ( !email || email.length < 2) {
            newErrors.email = "min 2";
            hasErrors = true;
        }
        if ( !password || password.length < 2) {
            newErrors.password = "min 2";
            hasErrors = true;
        }
        if ( !hasErrors ){
            dispatch(actions.signupRequest(signupData));
        } else {
            dispatch(actions.signupFailed(newErrors));
        }
    }
});



export default connect(mapStateToProps, mapDispatchToProps)(Signup);
