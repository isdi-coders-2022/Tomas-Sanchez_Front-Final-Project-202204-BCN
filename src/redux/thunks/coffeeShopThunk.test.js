import axios from "axios";
import { loadCoffeeShopsActionCreator } from "../features/coffeeShopsSlice";
import { loadCoffeeShopThunk } from "./coffeeShopThunk";

describe("Given the loadCoffeeShopThunk function", () => {
  describe("When it's called and receives a correct token", () => {
    test("Then should call dispatch with loadCoffeeShopActionCreator and the coffeeshops received", async () => {
      const dispatch = jest.fn();
      const returnedData = { data: ["Morrow", "Cafe de la esquina"] };
      axios.get = jest.fn().mockReturnValue(returnedData);

      const expectedCoffeeShops = ["Morrow", "Cafe de la esquina"];

      const token = "Token";

      const expectedAction = loadCoffeeShopsActionCreator(expectedCoffeeShops);

      const thunk = loadCoffeeShopThunk(token);
      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalledWith(expectedAction);
    });
  });
});
