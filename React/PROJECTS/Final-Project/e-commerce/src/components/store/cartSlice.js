import {createSlice} from '@reduxjs/toolkit';

const initialState = {products: [], isOpen: false, totalPrice: 0};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add(state, action) {},
    increase(state, action) {},
    decrease(state, action) {},
    delete(state, action) {},
    showCart(state) {
      state.isOpen = !state.isOpen;
    }
  }
});

export const usersActions = cartSlice.actions;

export default cartSlice.reducer;