import { createSlice } from "@reduxjs/toolkit";

const initialState = { categories: ["Clothing", "Toys"] };

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    add(state, action) {
      const isExist = state.categories.some((c) => c.name === action.payload);
      if (isExist) return;

      state.categories.push(action.payload);
    },
    remove(state, action) {
      state.categories = state.categories.filter(
        (c) => c.name !== action.payload
      );
    },
    update(state, action) {
      const originalName = action.payload.original;

      // Find the index of the original category name
      const index = state.categories.findIndex((c) => c.name === originalName);
      state.categories[index] = action.payload.newName;
    },
  },
});

export const categoriesActions = categoriesSlice.actions;

export default categoriesSlice.reducer;
