import { createSlice } from "@reduxjs/toolkit";

const coffeeShopsSlice = createSlice({
  name: "coffeeShops",
  initialState: [],
  reducers: {
    loadCoffeeShops: (coffeeshops, action) => [...action.payload],
  },
});

export const { loadCoffeeShops: loadCoffeeShopsActionCreator } =
  coffeeShopsSlice.actions;

export default coffeeShopsSlice.reducer;
