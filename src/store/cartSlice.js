import { createSlice } from "@reduxjs/toolkit";
const initialState = [];
const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    addItems: (state, action) => {
      state.push(action.payload);
    },
    deleteItems: (state, action) => {
      return state.filter((item) => {
        return item.id !== action.payload.id;
      });
    },
  },
});

export default cartSlice.reducer;
export const { addItems, deleteItems } = cartSlice.actions;
