import * as action from "actions/signup";
import signup from "reducers/signup";

const initialState = {
    "email": "",
    "errors": {},
    "isFetching": false,
    "password": "",
    "pause": false
};

describe("Test Signup Reducer", () => {

    it("Initial state", () => {
        expect(signup(undefined, {})).to.deep.equal(initialState);
    });

    xit("Handle SIGNUP_REQUEST action", () => {
        const prevState = initialState;
        const newState = login ( prevState , action.SIGNUP_REQUEST );
        const expecState = {
            "email": "",
            "errors": {},
            "isFetching": true,
            "password": "",
            "pause": false
        };
        expect(newState).to.deep.equal(expecState);
    });

    xit("Handle SIGNUP_FAILED action", () => {
        const prevState = initialState;
        const newState = login ( prevState , action.SIGNUP_FAILED );
    });

});
