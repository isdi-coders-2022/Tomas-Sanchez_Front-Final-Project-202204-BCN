import { configureStore, createSlice } from "@reduxjs/toolkit";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import LoggedControl from "./LoggedControl";

const mockUseNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  useNavigate: () => mockUseNavigate,
}));

let mockLogged = false;

describe("Given a LoggedControl component", () => {
  describe("When it's invoked and logged status is false", () => {
    test("Then it should call navigate with login page path", () => {
      const loginPagePath = "/login";
      const mockUserSlice = createSlice({
        name: "user",
        initialState: { logged: mockLogged },
        reducers: {},
      });

      const mockStore = configureStore({
        reducer: { user: mockUserSlice.reducer },
      });

      render(
        <Provider store={mockStore}>
          <LoggedControl>
            <p>Chilren</p>
          </LoggedControl>
        </Provider>
      );

      expect(mockUseNavigate).toHaveBeenCalledWith(loginPagePath);
    });
  });
});
