import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";

import rootSaga from "sagas";
import rootReducer from "reducers";

// Cogeremos los datos del locas Storage
import { loadState } from "localStorage";


const sagaMiddleware = createSagaMiddleware();
const configureStore = () => {

    const persistedState = loadState();
    const middlewares = [sagaMiddleware];
    const store = createStore(
        rootReducer,
        persistedState,
        compose(
            applyMiddleware(...middlewares),
            window.devToolsExtension ? window.devToolsExtension() : f => f
        )
    );

    sagaMiddleware.run(rootSaga);
    return store;
};

export default configureStore;
