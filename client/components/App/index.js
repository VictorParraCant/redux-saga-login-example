import React, {Component, PropTypes as PT} from "react";
import NavigationBar from "components/Common/NavigationBar";
import FlashMessages from "components/Common/FlashMessages";

const App = ({ children }) => (
    <div className="container">
        <NavigationBar />
        <FlashMessages />
        {children}
    </div>
);

export default App;
