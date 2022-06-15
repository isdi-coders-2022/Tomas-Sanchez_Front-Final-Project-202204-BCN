import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import NotFoundPage from "./NotFoundPage";
import store from "../../redux/store/store";

describe("Given a NotfFoundComponent function", () => {
  describe("When it render the text `sorry`", () => {
    test("Then it should in to the document the text `sorry`", () => {
      const expectedResult = "COFFEE NOT FOUND";
      render(
        <BrowserRouter>
          <Provider store={store}>
            <NotFoundPage />
          </Provider>
        </BrowserRouter>
      );

      const receivedResult = screen.getByText(expectedResult);

      expect(receivedResult).toBeInTheDocument();
    });
  });
});
