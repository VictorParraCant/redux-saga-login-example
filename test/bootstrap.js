import chai from "chai";
import { ShallowWrapper, ReactWrapper } from "enzyme";
import chaiEnzyme from "chai-enzyme";

chai.use(chaiEnzyme());

global.AssertionError = chai.AssertionError;
global.expect = chai.expect;
global.should = chai.should();
