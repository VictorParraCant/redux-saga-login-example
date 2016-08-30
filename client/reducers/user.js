import {
    USER_LOGIN,
    USER_LOGOUT
} from "actions/user";

const initialState = {
    email: "",
};

export default (state=initialState, action={}) => {
    switch (action.type) {
        case USER_LOGIN:
            console.log('user login', action);
            return { ...state, email: action.user.email };
        case USER_LOGOUT:
            return {  email: "" }
        default: return state;
    }
};
