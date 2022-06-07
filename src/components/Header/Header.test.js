import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store/store";
import Header from "./Header";

describe("Given a Header Component", () => {
  describe("When it's instantiated", () => {
    test("Then it should render a heading with the name 'Tomas Café?'", () => {
      const expectedText = "Tomas Café";

      render(
        <BrowserRouter>
          <Provider store={store}>
            <Header />
          </Provider>
        </BrowserRouter>
      );

      const heading = screen.getByRole("heading");

      expect(heading).toHaveTextContent(expectedText);
    });
  });
});
