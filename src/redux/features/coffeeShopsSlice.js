import { createSlice } from "@reduxjs/toolkit";

const coffeeShopsSlice = createSlice({
  name: "coffeeShops",
  initialState: [],
  reducers: {
    loadCoffeeShops: (coffeeShops, action) => [...action.payload],
    deleteCoffeeShop: (coffeeShops, action) =>
      coffeeShops.filter((coffeeShop) => coffeeShop._id !== action.payload),
  },
});

export const {
  loadCoffeeShops: loadCoffeeShopsActionCreator,
  deleteCoffeeShop: deleteCoffeeShopActionCreator,
} = coffeeShopsSlice.actions;

export default coffeeShopsSlice.reducer;
