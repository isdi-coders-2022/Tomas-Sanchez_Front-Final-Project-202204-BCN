import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store/store";
import EditButton from "./EditButton";

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

describe("Given a EditButton Component", () => {
  describe("When it's invoked", () => {
    test("Then it should render the text 'Edit'", () => {
      const expectedResult = "Edit";

      render(
        <Provider store={store}>
          <BrowserRouter>
            <EditButton />
          </BrowserRouter>
        </Provider>
      );

      const receivedResult = screen.getByText(expectedResult);

      expect(receivedResult).toBeInTheDocument();
    });
  });
});
