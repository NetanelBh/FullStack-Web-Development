import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  products: [
    { name: "PC", price: 200 },
    { name: "Laptop", price: 130 },
    { name: "Tablet", price: 80 },
    { name: "iPhone", price: 450 },
  ],
};

const productsSlice = createSlice({
  name: "products",
  initialState: INITIAL_STATE,
  reducers: {
    addProduct(state, action) {
      state.products.push(action.payload);
    },
    removeProduct(state, action) {
      const index = state.products.findIndex((p) => {
        return p.name === action.payload;
      })

      if (index !== -1) {
        state.products.splice(index, 1);
      }
    },
  },
});

export const productsActions = productsSlice.actions;

export default productsSlice.reducer;
