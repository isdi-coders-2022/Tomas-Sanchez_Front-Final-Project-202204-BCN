import { render, screen, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import store from "./redux/store/store";

export const mockUsers = [
  {
    username: "Tomatito",
    password: "123456",
    id: "3",
  },
  {
    username: "Julie",
    password: "123456",
    id: "3",
  },
];

jest.mock("jwt-decode", () => () => ({
  username: "Tomatito",
  password: "123456",
  id: "3",
}));

describe("Given an App component function", () => {
  describe("When invoked and the user is not logged", () => {
    test("Then it should render a login form with a 'LOGIN' button", async () => {
      const expectedButtonText = "Sign In";

      render(
        <BrowserRouter>
          <Provider store={store}>
            <App />
          </Provider>
        </BrowserRouter>
      );

      const loginButton = screen.getByRole("button", {
        name: expectedButtonText,
      });

      expect(loginButton).toBeInTheDocument();
    });
  });

  describe("When invoked and the user is logged", () => {
    test("Then it should render a navigation element", async () => {
      const actionLogin = {
        type: "user/login",
        payload: {
          name: "Tomas",
          username: "Tomatito",
        },
      };

      render(
        <BrowserRouter>
          <Provider store={store}>
            <App />
          </Provider>
        </BrowserRouter>
      );

      await waitFor(() => {
        store.dispatch(actionLogin);
      });

      const token = "token";

      window.localStorage.setItem("token", token);

      const navElement = screen.getByRole("heading");

      expect(navElement).toBeInTheDocument();
    });
  });
});
