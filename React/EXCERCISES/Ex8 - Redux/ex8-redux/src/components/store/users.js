import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [
    { id: 1, firstName: "Netanel", lastName: "Ben hamo", age: 37 },
    { id: 2, firstName: "Nofar", lastName: "Hadad", age: 17 },
    { id: 3, firstName: "Moshe", lastName: "Levi", age: 24 },
    { id: 4, firstName: "Romi", lastName: "Sturm", age: 37 },
  ],
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    add(state, action) {
      state.users.push(action.payload);
    },
    edit(state, action) {
      const index = state.users.findIndex(
        (user) => user.id === parseInt(action.payload.id)
      );

      if (index !== -1) {
        state.users[index] = action.payload;
      }
    },
    delete(state, action) {
      const index = state.users.findIndex(
        (user) => user.id === parseInt(action.payload)
      );

      if (index !== -1) {
        state.users.splice(index, 1);
      }
    },
  },
});

export const usersActions = usersSlice.actions;

export default usersSlice.reducer;
