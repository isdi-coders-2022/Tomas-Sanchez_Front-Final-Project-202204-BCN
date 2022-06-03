import {
  loginActionCreator,
  registerActionCreator,
} from "../features/userSlice";
import "./mocks/server";
import { loginThunk, registerThunk } from "./userThunks";

jest.mock("jwt-decode", () => () => ({ name: "Julia", username: "Julie" }));

describe("Given a loginThunk function", () => {
  describe("When it is called", () => {
    test("It should dispatch loginActionCreator with the data from the token", async () => {
      const dispatch = jest.fn();

      const expectedData = {
        name: "Julia",
        username: "Julie",
      };
      const userData = {
        username: "Julie",
        password: "123456",
      };

      const expectedAction = loginActionCreator(expectedData);

      const thunk = loginThunk(userData);
      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalledWith(expectedAction);
    });
  });
});

describe("Given a registerThunk function", () => {
  describe("When it is called", () => {
    test("It should call the API with a post method containing the user", async () => {
      const dispatch = jest.fn();

      const expectData = {
        username: "Tomatito",
        id: "soyunaid",
      };

      const expectedAction = registerActionCreator(expectData);

      const thunk = registerThunk({});
      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalledWith(expectedAction);
    });
  });
});
