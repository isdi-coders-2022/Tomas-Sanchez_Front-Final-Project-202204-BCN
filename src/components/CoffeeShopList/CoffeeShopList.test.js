import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store/store";
import CoffeeShopList from "./CoffeeShopList";

describe("Given the CoffeeShopList component", () => {
  describe("When it's invoked", () => {
    test("Then it should render a list element", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <CoffeeShopList />
          </Provider>
        </BrowserRouter>
      );

      const result = screen.getByRole("list");
      expect(result).toBeInTheDocument();
    });
  });
});
