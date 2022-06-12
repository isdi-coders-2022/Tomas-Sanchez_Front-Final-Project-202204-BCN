import { createSlice } from "@reduxjs/toolkit";

const loadingSlice = createSlice({
  name: "ui",
  initialState: {
    loaded: false,
  },
  reducers: {
    setLoadingOn: (ui) => ({ ...ui, loaded: true }),
    setLoadingOff: (ui) => ({ ...ui, loaded: false }),
  },
});

export const {
  setLoadingOn: setLoadingOnActionCreator,
  setLoadingOff: setLoadingOffActionCreator,
} = loadingSlice.actions;

export default loadingSlice.reducer;
