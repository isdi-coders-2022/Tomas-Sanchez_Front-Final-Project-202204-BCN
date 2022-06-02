import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import RegisterForm from "./RegisterForm";
import store from "../../redux/store/store";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import { registerThunk } from "../../redux/thunks/userThunks";
import userMock from "../../mocks/userMock";

const mockDispatch = jest.fn();
jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
}));

jest.mock("../../redux/thunks/userThunks", () => ({
  registerThunk: jest.fn(),
}));

describe("Given a RegisterForm function", () => {
  describe("When its invoked", () => {
    test("Then it should render a form with a button with text 'Sign Up' inside", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <RegisterForm />
          </Provider>
        </BrowserRouter>
      );
      const buttonRendered = screen.getByRole("button", {
        name: "Sign Up",
      });

      expect(buttonRendered).toBeInTheDocument();
    });
  });

  describe("When the user click on submit button with all fields filled", () => {
    test("Then it should dispatch register Thunk", () => {
      render(
        <Provider store={{ ...store }}>
          <BrowserRouter>
            <RegisterForm />
          </BrowserRouter>
        </Provider>
      );

      const expectedFormData = userMock;
      const nameField = screen.getByPlaceholderText("Name:");
      const usernameField = screen.getByPlaceholderText("Username:");
      const passwordField = screen.getByPlaceholderText("Password:");
      const button = screen.getByRole("button");

      userEvent.type(nameField, "Julia");
      userEvent.type(usernameField, "Julie");
      userEvent.type(passwordField, "123456");
      userEvent.click(button);

      expect(registerThunk).toHaveBeenCalledWith(expectedFormData);
    });
  });
});
