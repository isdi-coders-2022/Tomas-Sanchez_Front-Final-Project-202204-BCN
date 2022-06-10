import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../redux/store/store";
import CoffeeShop from "./CoffeeShop";

describe("Given a CoffeeShop component", () => {
  describe("When it is invoked", () => {
    test("it renders an image", () => {
      const CoffeeShopInfo = {
        name: "Morrow",
        image:
          "https://th.bing.com/th/id/R.b817a65e00c5132ee99b855fe08ed567?rik=Io4q5j8beStwUA&pid=ImgRaw&r=0",
        address: "Av. Gran via de les cortes catalanes",
      };

      render(
        <Provider store={store}>
          <CoffeeShop coffeShop={CoffeeShopInfo} />
        </Provider>
      );

      const renderedImage = screen.getByRole("img");

      expect(renderedImage).toBeInTheDocument();
    });
  });
});
