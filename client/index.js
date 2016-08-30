import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import configureStore from "store";
import { Router, browserHistory } from "react-router";
import routes from "routes";

const RootElement = document.getElementById("root");
const Store = configureStore();

render(
    <Provider store={Store} >
        <Router history={browserHistory} routes={routes} />
    </Provider>
    , RootElement
);
