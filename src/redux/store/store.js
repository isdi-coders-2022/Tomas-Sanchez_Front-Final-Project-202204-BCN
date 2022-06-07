import { configureStore } from "@reduxjs/toolkit";
import coffeeShopsReducer from "../features/coffeeShopsSlice";
import userReducer from "../features/userSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    coffeeShops: coffeeShopsReducer,
  },
});

export default store;
