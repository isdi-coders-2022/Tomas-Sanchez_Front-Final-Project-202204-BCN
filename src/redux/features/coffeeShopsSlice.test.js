import { mockCoffeeShop, mockCoffeeShops } from "../thunks/mocks/handlers";
import coffeeShopsSlice from "./coffeeShopsSlice";
import coffeeShopsReducer, {
  createCoffeeShopActionCreator,
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

describe("Given a createCoffeeShop reducer", () => {
  describe("When it receives an initial state with 2 coffeeShops", () => {
    test("Then it should return 3 coffeeShops", () => {
      const expectedLength = 4;

      const initialState = mockCoffeeShops;

      const newcoffeeShop = {
        id: "56ab0ertghrtgh6bb23e8",
        name: "cafeteria molona",
        adress: "calle la lloreria",
        image: "image.png",
      };

      const createCoffeeAction = createCoffeeShopActionCreator(newcoffeeShop);

      const coffeeShopState = coffeeShopsSlice(
        initialState,
        createCoffeeAction
      );

      expect(coffeeShopState).toHaveLength(expectedLength);
    });
  });
});
