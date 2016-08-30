import * as action from "actions/flashMessages";
import flashMessages from "reducers/flashMessages";

describe("Test Login Reducer", () => {

    it("Initial state", () => {
        expect(flashMessages(undefined, {})).to.deep.equal([]);
    });

    xit("Handle ADD_FLASH_MESSAGE action", () => {

    });

    xit("Handle DELETE_FLASH_MESSAGE action", () => {

    });

});
