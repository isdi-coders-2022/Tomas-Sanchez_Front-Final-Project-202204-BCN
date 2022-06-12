import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {},
  reducers: {
    register: (user, action) => ({ ...action.payload }),
    login: (user, action) => ({ ...action.payload }),
  },
});

export const {
  register: registerActionCreator,
  login: loginActionCreator,
  logout: logoutActionCreator,
} = userSlice.actions;

export default userSlice.reducer;
