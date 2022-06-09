import { mockCoffeeShop } from "../thunks/mocks/handlers";
import coffeeShopsReducer, {
  deleteCoffeeShopActionCreator,
  loadCoffeeShopsActionCreator,
} from "./coffeeShopsSlice";

describe("Given a usersSlice reducer", () => {
  describe("When we pass a list of coffeeshops", () => {
    test("Then it should return the new state with coffeeshops", () => {
      const initialValue = [];
      const receivedValue = [
        {
          name: "Morrow",
          address: "la calle de la lloreria",
          image: "image.png",
        },
      ];

      const action = loadCoffeeShopsActionCreator(receivedValue);
      const newState = coffeeShopsReducer(initialValue, action);

      expect(newState).toEqual(receivedValue);
    });
  });
});

describe("Given the deleteCoffeeShopActionCreator", () => {
  describe("When invoked with the id to be deleted", () => {
    test("Then the item with the id will be deleted from the CoffeeShop list", () => {
      const initialState = mockCoffeeShop;

      const expectedState = [];

      const action = deleteCoffeeShopActionCreator(mockCoffeeShop.id);
      const newState = coffeeShopsReducer(initialState, action);

      expect(newState).toEqual(expectedState);
    });
  });
});
