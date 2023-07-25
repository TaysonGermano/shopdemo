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
    remove: (state, action) => {
      state.value = state.value.filter(
        (product) => product.SKU !== action.payload.SKU
      );
    },
  },
});

export const { add, remove } = cartReducer.actions;

export default cartReducer.reducer;
