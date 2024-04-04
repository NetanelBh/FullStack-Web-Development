import {configureStore} from '@reduxjs/toolkit';

import usersReducer from './users';

const store = configureStore({
  reducer: usersReducer
});

export default store;