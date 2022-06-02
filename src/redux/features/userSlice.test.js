import userMockRegister from "../../mocks/userMock";
import userReducer, { registerActionCreator } from "./userSlice";

describe("Given a userReducer", () => {
  describe("When we send a new user", () => {
    test("Then it should return the new state with the new user", () => {
      const initialValue = {};
      const receivedValue = userMockRegister;

      const action = registerActionCreator(receivedValue);
      const newState = userReducer(initialValue, action);

      expect(newState).toEqual(receivedValue);
    });
  });
});
