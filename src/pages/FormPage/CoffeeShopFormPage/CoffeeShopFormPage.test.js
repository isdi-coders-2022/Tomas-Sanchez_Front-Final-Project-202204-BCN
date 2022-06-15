import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../../redux/store/store";
import CoffeeShopFormPage from "./CoffeeShopFormPage";

describe("Given component", () => {
  describe("When it's instantiated", () => {
    test("Then it should render a button", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <CoffeeShopFormPage />
          </Provider>
        </BrowserRouter>
      );

      const testedButtons = screen.getByRole("button", { name: "Add" });

      expect(testedButtons).toBeInTheDocument();
    });
  });
});
