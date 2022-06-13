import { configureStore } from "@reduxjs/toolkit";
import coffeeShopReducer from "../features/coffeeShopSlice";
import coffeeShopsReducer from "../features/coffeeShopsSlice";
import uiReducer from "../features/ui/uiSlice";

import userReducer from "../features/userSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    coffeeShops: coffeeShopsReducer,
    ui: uiReducer,
    coffeeShop: coffeeShopReducer,
  },
});

export default store;
