import {configureStore} from '@reduxjs/toolkit';

import employeessReducer from './slices/employeesSlice.js';

const store  = configureStore({
    reducer: {
        employees: employeessReducer,
    }
});

export default store;