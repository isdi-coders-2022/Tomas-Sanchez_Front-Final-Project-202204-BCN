import userSlice from "./userSlice";
import userReducer, { registerActionCreator } from "./userSlice";

describe("Given a userReducer", () => {
  describe("When we send a new user", () => {
    test("Then it should return the new state with the new user", () => {
      const initialValue = {};
      const receivedValue = {
        name: "Julie",
        username: "Julia",
        password: "password",
      };

      const action = registerActionCreator(receivedValue);
      const newState = userReducer(initialValue, action);

      expect(newState).toEqual(receivedValue);
    });
  });
});

describe("Given a user register reducer", () => {
  describe("When it receives an initial state status and a register action with the register user credentials", () => {
    test("Then it should return the new user state with the received user credentials and the logged property false", () => {
      const initialState = { username: "", name: "", id: "" };

      const userInfo = { username: "pepito", name: "pepe", id: "dfdwedd2w" };

      const expectedState = userInfo;

      const registerAction = registerActionCreator(userInfo);
      const userStatus = userSlice(initialState, registerAction);

      expect(userStatus).toEqual(expectedState);
    });
  });
});
