import {configureStore} from '@reduxjs/toolkit';

import cartReducer from './cartSlice';
import usersReducer from './usersSlice';
import categoriesReducer from './categoriesSlice';

const store = configureStore({
  reducer: {
    users: usersReducer,
    orders: cartReducer,
    categories: categoriesReducer,
  }
})

export default store;