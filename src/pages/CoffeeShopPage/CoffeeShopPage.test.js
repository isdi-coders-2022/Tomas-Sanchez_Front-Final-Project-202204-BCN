import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store/store";
import CoffeeShopPage from "./CoffeeShopPage";

describe("Given a CoffeeShopPage Component", () => {
  describe("When it's invoked", () => {
    test("Then it should render the text 'All Coffee Shops'", () => {
      const expectedResult = "All Coffee Shops";

      render(
        <Provider store={store}>
          <BrowserRouter>
            <CoffeeShopPage />
          </BrowserRouter>
        </Provider>
      );

      const receivedResult = screen.getByText(expectedResult);

      expect(receivedResult).toBeInTheDocument();
    });
  });
});
