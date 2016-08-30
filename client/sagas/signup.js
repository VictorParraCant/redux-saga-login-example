import { takeEvery, delay } from "redux-saga";
import { call, put, select } from "redux-saga/effects";
import axios from "axios";

import { addFlashMessage } from "actions/flashMessages";
import * as actions from "actions/signup";

function* signup_process(action) {
    try {
        yield delay(1000); // simulate long db query

        // Llamada a la api
        const payload = yield call(
            postSignupToAPI,
            action.signupData
        );

        // Hay errores
        if(payload.data.errors){
            yield put(actions.signupFailed(payload.data.errors));
        }

        // Pasamos los datos del usuario
        if(payload.data.user){
            // yield put(actions.signupSucceeded(payload.data.user));
            // REDIRECT??
        }

    } catch (e) {
        // Fallo del server, abría que avisar al usuario
        yield put(
            addFlashMessage({
                "type": "error",
                "text": "Network Error!"
            })
        );
    }
}

const postSignupToAPI = data => {

    let bodydata = JSON.stringify({
        email: data.email,
        password: data.password
    });
    let instance = axios.create({
        headers: { "Content-Type": "application/json" }
    });

    return instance.post("/api/signup", bodydata);

};

export function* watchSignupRequest() {
    yield* takeEvery( actions.SIGNUP_REQUEST, signup_process );
}
