import React, {Component, PropTypes as PT} from "react";
import { Link } from "react-router";

const Welcome = () => {
    return (
        <div className="jumbotron">
            <h2>Welcome</h2>
            <Link to={"/signup"}>Sign Up</Link> or <Link to={"/login"}>Login</Link>
        </div>
    );
};

export default Welcome;
