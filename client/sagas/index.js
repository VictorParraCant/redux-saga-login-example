import { fork } from "redux-saga/effects";
import { watchLoginRequest } from "sagas/login";
import { watchSignupRequest } from "sagas/signup";

export default function* Root() {
    yield [
        fork(watchLoginRequest),
        fork(watchSignupRequest)
    ];
}
