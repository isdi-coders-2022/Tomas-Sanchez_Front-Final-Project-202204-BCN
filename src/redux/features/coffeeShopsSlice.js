import { createSlice } from "@reduxjs/toolkit";

const coffeeShopsSlice = createSlice({
  name: "coffeeShops",
  initialState: [],
  reducers: {
    loadCoffeeShops: (coffeeShops, action) => [...action.payload],
    deleteCoffeeShop: (coffeeShops, action) =>
      coffeeShops.filter((coffeeShop) => coffeeShop._id !== action.payload),
    createCoffeeShop: (coffeeShops, action) => [...coffeeShops, action.payload],
  },
});

export const {
  loadCoffeeShops: loadCoffeeShopsActionCreator,
  deleteCoffeeShop: deleteCoffeeShopActionCreator,
  createCoffeeShop: createCoffeeShopActionCreator,
} = coffeeShopsSlice.actions;

export default coffeeShopsSlice.reducer;
