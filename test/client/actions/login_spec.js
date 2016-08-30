import * as action from "actions/login";

describe("Login Actions Creators", () => {

    it("Action LoginRequest", () => {
        expect(
            action.loginRequest({ email: "test", password: "1234" })
        ).to.deep.equal({
            type: action.LOGIN_REQUEST,
            loginData: {
                email: "test",
                password: "1234"
            }
        });
    });

    it("Action LoginFailed", () => {
        expect(
            action.loginFailed({ email: "email fail", password: "password fail" })
        ).to.deep.equal({
            type: action.LOGIN_FAILED,
            errors: {
                email: "email fail",
                password: "password fail"
            }
        });
    });

});
