import axios from "axios";
import { loadCoffeeShopsActionCreator } from "../features/coffeeShopsSlice";
import { loadCoffeeShopThunk } from "./coffeeShopThunk";

describe("Given the loadCoffeeShopThunk function", () => {
  describe("When it's called and receives a correct token", () => {
    test("Then should call dispatch with loadCoffeeShopActionCreator and the coffeeshops received", async () => {
      const dispatch = jest.fn();
      const returnedData = ["Morrow", "Cafe de la esquina"];
      axios.get = jest.fn().mockResolvedValueOnce({
        data: { coffeShops: returnedData },
        status: 200,
      });

      const expectedAction = loadCoffeeShopsActionCreator(returnedData);

      const thunk = loadCoffeeShopThunk();
      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalledWith(expectedAction);
    });
  });
});
