import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../redux/store/store";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import { loginThunk } from "../../redux/thunks/userThunks";
import LoginForm from "./LoginForm";

const mockDispatch = jest.fn();
jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
}));

jest.mock("../../redux/thunks/userThunks", () => ({
  loginThunk: jest.fn(),
}));

describe("Given a RegisterForm function", () => {
  describe("When its invoked", () => {
    test("Then it should render a form with a button with text 'Sign In' inside", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <LoginForm />
          </Provider>
        </BrowserRouter>
      );
      const buttonRendered = screen.getByRole("button", {
        name: "Sign In",
      });

      expect(buttonRendered).toBeInTheDocument();
    });
  });

  describe("When the user click on submit button with all fields filled", () => {
    test("Then it should dispatch register Thunk", () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <LoginForm />
          </BrowserRouter>
        </Provider>
      );

      const expectedFormData = {
        username: "Julie",
        password: "123456",
      };
      const usernameField = screen.getByPlaceholderText("Username:");
      const passwordField = screen.getByPlaceholderText("Password:");
      const button = screen.getByRole("button");

      userEvent.type(usernameField, "Julie");
      userEvent.type(passwordField, "123456");
      userEvent.click(button);

      expect(loginThunk).toHaveBeenCalledWith(expectedFormData);
    });
  });
});
