import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import RegisterForm from "./RegisterForm";
import store from "../../redux/store/store";
import { BrowserRouter } from "react-router-dom";

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
});
