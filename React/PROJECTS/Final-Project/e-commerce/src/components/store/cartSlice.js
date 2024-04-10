import {createSlice} from '@reduxjs/toolkit';

const initialState = {products: []};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    increase(state, action) {},
    decrease(state, action) {},
    delete(state, action) {},
  }
});

export const usersActions = cartSlice.actions;

export default cartSlice.reducer;