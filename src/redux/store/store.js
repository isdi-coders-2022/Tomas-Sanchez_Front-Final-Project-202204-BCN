import { configureStore } from "@reduxjs/toolkit";
import coffeeShopsReducer from "../features/coffeeShopsSlice";
import uiReducer from "../features/ui/uiSlice";

import userReducer from "../features/userSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    coffeeShops: coffeeShopsReducer,
    ui: uiReducer,
  },
});

export default store;
