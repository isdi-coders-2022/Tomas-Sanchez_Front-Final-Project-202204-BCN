import {
  createCoffeeShopActionCreator,
  deleteCoffeeShopActionCreator,
  loadCoffeeShopsActionCreator,
} from "../features/coffeeShopsSlice";
import {
  createCoffeeShopThunk,
  deleteCoffeeShopThunk,
  getCoffeeShopThunk,
  loadCoffeeShopThunk,
} from "./coffeeShopThunk";
import server from "./mocks/server";
import { mockCoffeeShop } from "./mocks/handlers";
import axios from "axios";
import { loadOneCoffeeShopActionCreator } from "../features/coffeeShopSlice";

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

describe("Given a getCoffeeShopThunk function", () => {
  describe("When it is called", () => {
    test("It should dispatch loadOneCoffeeShopActionCreator with api's data", async () => {
      const dispatch = jest.fn();

      axios.get = jest.fn().mockResolvedValue({
        data: {
          coffeeShop: {
            id: "56ab0ertghrtgh6bb8",
            name: "Morrow",
            address: "calle la lloreria",
            image: "image.png",
          },
        },
      });

      const expectedAction = loadOneCoffeeShopActionCreator({
        id: "56ab0ertghrtgh6bb8",
        name: "Morrow",
        address: "calle la lloreria",
        image: "image.png",
      });

      const thunk = getCoffeeShopThunk("56ab0ertghrtgh6bb8");
      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalledWith(expectedAction);
    });
  });
});

describe("Given the createCoffeeShopThunk thunk", () => {
  describe("When it receives a CoffeeShop and data from response api", () => {
    test("Then it should call dispatch with createCoffeeShopActionCreator", async () => {
      const newPost = mockCoffeeShop;
      const mockAxiosReturn = {
        status: 201,
        data: mockCoffeeShop,
      };
      const dispatch = jest.fn();
      const createPropertyThunkTest = createCoffeeShopThunk(newPost);
      const expectedAction = createCoffeeShopActionCreator(newPost);
      axios.post = jest.fn().mockResolvedValue(mockAxiosReturn);

      await createPropertyThunkTest(dispatch);

      expect(dispatch).toHaveBeenNthCalledWith(1, expectedAction);
    });
  });
});
