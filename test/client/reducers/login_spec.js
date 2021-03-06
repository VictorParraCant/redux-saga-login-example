import * as action from "actions/login";
import login from "reducers/login";

const initialState = {
    "email": "",
    "errors": {},
    "isFetching": false,
    "password": "",
    "pause": false
};

describe("Test Login Reducer", () => {

    it("Initial state", () => {
        expect(login(undefined, {})).to.deep.equal(initialState);
    });

    xit("Handle LOGIN_REQUEST action", () => {
        const prevState = initialState;
        const newState = login ( prevState , action.LOGIN_REQUEST );
        const expecState = {
            "email": "",
            "errors": {},
            "isFetching": true,
            "password": "",
            "pause": false
        };
        expect(newState).to.deep.equal(expecState);
    });

    xit("Handle LOGIN_FAILED action", () => {
        const prevState = initialState;
        const newState = login ( prevState , action.LOGIN_FAILED );
    });

});
