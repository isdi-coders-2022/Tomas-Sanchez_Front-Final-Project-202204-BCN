import coffeeShopsReducer, {
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
