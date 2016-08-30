import * as action from "actions/login";
import login from "reducers/login";

describe("Test Login Reducer", () => {

    it("Initial state", () => {
        expect(login(undefined, {})).to.deep.equal({
            "errors": {},
            "isFetching": false
        });
    });

    xit("Handle LOGIN_REQUEST action", () => {

    });

    xit("Handle LOGIN_FAILED action", () => {

    });

});
