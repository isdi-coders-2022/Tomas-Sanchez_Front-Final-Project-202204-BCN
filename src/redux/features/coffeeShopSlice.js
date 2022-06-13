import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  coffeeShop: {
    adress: "",
    name: "",
    rate: 0,
    image: "",
    id: "",
  },
};

const coffeeShopSlice = createSlice({
  name: "coffeeShop",
  initialState,
  reducers: {
    loadOneCoffeeShop: (coffeeShop, action) => ({
      coffeeShop: { ...action.payload },
    }),
    blankState: () => initialState,
  },
});

export default coffeeShopSlice.reducer;

export const {
  loadOneCoffeeShop: loadOneCoffeeShopActionCreator,
  blankState: blankStateActionCreator,
} = coffeeShopSlice.actions;
