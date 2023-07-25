import { createSlice } from "@reduxjs/toolkit";

export const cartReducer = createSlice({
  name: "cart",
  initialState: {
    value: [],
  },
  reducers: {
    add: (state, action) => {
      state.value.push(action.payload);
    },
  },
});

export const { add } = cartReducer.actions;

export default cartReducer.reducer;
