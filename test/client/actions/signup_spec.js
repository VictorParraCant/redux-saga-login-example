import * as action from "actions/signup";

describe("Login Actions Creators", () => {

    it("Action signupRequest", () => {
        expect(
            action.signupRequest({ email: "test", password: "1234" })
        ).to.deep.equal({
            type: action.SIGNUP_REQUEST,
            signupData: {
                email: "test",
                password: "1234"
            }
        });
    });

    it("Action signupFailed", () => {
        expect(
            action.signupFailed({ email: "email fail", password: "password fail" })
        ).to.deep.equal({
            type: action.SIGNUP_FAILED,
            errors: {
                email: "email fail",
                password: "password fail"
            }
        });
    });

});
