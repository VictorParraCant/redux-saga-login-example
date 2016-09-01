import { takeEvery, delay } from "redux-saga";
import { call, put, select } from "redux-saga/effects";
import axios from "axios";

import { addFlashMessage } from "actions/flashMessages";
import * as loginActions from "actions/login";
import * as userActions from "actions/user";

function* login_process(action) {
    try {
        yield delay(1000); // simulate long db query
        // Llamada a la api
        const payload = yield call(
            postLoginToAPI,
            action.loginData
        );

        // Obtener datos del store actual
        // const loginState = yield select( (state) => state.login );

        // Hay errores
        if(payload.data.errors){
            yield put(loginActions.loginFailed(payload.data.errors));
        }

        // Pasamos los datos del usuario
        if(payload.data.user){
            yield put(userActions.userLogin(payload.data.user));
        }


    } catch (e) {
        console.log("login error", e);
        yield put(
            addFlashMessage({
                "type": "error",
                "text": "Network Error!"
            })
        );
    }
}


const postLoginToAPI = data => {

    let bodydata = JSON.stringify({
        email: data.email,
        password: data.password
    });

    let instance = axios.create({
        headers: { "Content-Type": "application/json" }
    });

    return instance.post("/api/login", bodydata);

};

export function* watchLoginRequest() {
    yield* takeEvery( loginActions.LOGIN_REQUEST, login_process );
}
