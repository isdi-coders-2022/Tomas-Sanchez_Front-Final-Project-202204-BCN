import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {},
  reducers: {
    register: (user, action) => ({ ...action.payload }),
  },
});

export const { register: registerActionCreator } = userSlice.actions;

export default userSlice.reducer;