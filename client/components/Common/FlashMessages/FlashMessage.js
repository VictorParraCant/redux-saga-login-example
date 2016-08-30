import React, {Component, PropTypes as PT} from "react";
import cx from "classnames";

const FlashMessage = ({ id, type, text, onClick }) => {
    let wrapperClass = cx({
        "alert": true,
        "alert-success": type === "success",
        "alert-danger": type === "error"
    });
    return (
      <div className={wrapperClass}>
        <button onClick={ () => onClick(id)} className="close"><span>&times;</span></button>
        {text}
      </div>
    );
};

FlashMessage.propTypes = {
    id: PT.string,
    type: PT.oneOf(["success", "error"]),
    text: PT.string,
    onClick: PT.func
};

FlashMessage.defaultProps = {
    id: "x",
    type: "success",
    text: "info",
    onClick: () => {}
};

export default FlashMessage;
