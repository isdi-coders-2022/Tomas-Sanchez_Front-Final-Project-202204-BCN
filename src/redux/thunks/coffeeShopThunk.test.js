import {
  deleteCoffeeShopActionCreator,
  loadCoffeeShopsActionCreator,
} from "../features/coffeeShopsSlice";
import { deleteCoffeeShopThunk, loadCoffeeShopThunk } from "./coffeeShopThunk";
import server from "./mocks/server";
import { mockCoffeeShop } from "./mocks/handlers";
import axios from "axios";

beforeEach(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

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

describe("Given a deleteCoffeeShopThunk function", () => {
  describe("When it's called", () => {
    test("Then it should dispatch the deleteCoffeeShopActionCreator", async () => {
      const dispatch = jest.fn();

      const deleteAction = deleteCoffeeShopActionCreator(mockCoffeeShop.id);
      const thunk = deleteCoffeeShopThunk(mockCoffeeShop.id);

      await thunk(dispatch);
      expect(dispatch).toHaveBeenCalledWith(deleteAction);
    });
  });
});
