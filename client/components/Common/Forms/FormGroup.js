import React, {Component, PropTypes as PT} from "react";
import cx from "classnames";

const FormGroup = ({ label, errorText, children }) => {

    let wrapperClass = cx({
        "form-group": true,
        "has-error": hasError(errorText)
    });

    let errorMessage = (typeof errorText === "string" && errorText.length ) ?
        <span className="help-block">{errorText}</span> : null;

    return (
        <div className={wrapperClass}>
            {label && <label className="control-label">{label}</label>}
            {children}
            {errorMessage}
        </div>
    );
};

const hasError = (errorText) => {
    return (errorText !== null) && (errorText !== false);
};


FormGroup.propTypes = {
    label: PT.string,
    errorText: PT.oneOfType([PT.bool, PT.string])
};

FormGroup.defaultProps = {
    label: "",
    errorText: false
};

export default FormGroup;
