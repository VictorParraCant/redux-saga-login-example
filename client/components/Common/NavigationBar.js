import React, {PropTypes as PT} from "react";
import { connect } from "react-redux";
import { Link } from "react-router";

const NavigationBar = ({ email }) => {

    const menus = ( email && email !== "" ) ?
        <li>
            <Link to={"/signout"} activeStyle={{color: "white"}}>Logout</Link>
        </li>
    :
        <li>
            <Link to={"/login"} activeStyle={{color: "white"}}>Login</Link>
        </li>
    ;

    return (
        <nav className="navbar navbar-inverse navbar-fixed-top">
            <div className="container">
                <div className="navbar-header">
                    <Link to={"/"} className="navbar-brand">PANEL</Link>
                </div>
                <div className="collapse navbar-collapse">
                    <ul className="nav navbar-nav navbar-right">
                        { menus }
                    </ul>
                </div>
                </div>
        </nav>
    );
};

NavigationBar.propTypes = {
    email: PT.string
};

const mapStateToProps = ({ user }) => ({
    email: user.email
});

export default connect(mapStateToProps, null)(NavigationBar);
