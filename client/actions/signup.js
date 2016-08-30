export const SIGNUP_REQUEST = "SIGNUP_REQUEST";
export const SIGNUP_SUCCEEDED = "SIGNUP_SUCCESS";
export const SIGNUP_FAILED = "SIGNUP_FAILED";
export const INPUTCHANGE = "INPUTCHANGE";

export const signupRequest = (signupData) => ({
    type: SIGNUP_REQUEST,
    signupData
});

export const signupFailed = (errors) => ({
    type: SIGNUP_FAILED,
    errors
});

export const inputChange = (change) => ({
    type: INPUTCHANGE,
    change
});
