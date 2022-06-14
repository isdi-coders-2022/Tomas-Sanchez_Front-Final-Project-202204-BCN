import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store/store";
import EditCoffeeShopFormPage from "./EditCoffeeShopFormPage";

describe("Given a EditCoffeeShopForm Page", () => {
  describe("When it's invoked", () => {
    test("Then it should render the text 'Edit a CoffeeShop'", () => {
      const expectedText = "Tomas Café?";

      render(
        <Provider store={store}>
          <BrowserRouter>
            <EditCoffeeShopFormPage />
          </BrowserRouter>
        </Provider>
      );

      const receivedResult = screen.getByText(expectedText);

      expect(receivedResult).toBeInTheDocument();
    });
  });
});
