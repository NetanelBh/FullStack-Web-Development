import { configureStore } from "@reduxjs/toolkit";

// Default localStorage for web
import storage from "redux-persist/lib/storage";
// Use persist redux to keep the last redux state when refresh the browser(if refresh, the redux get the default value)
import { persistReducer, persistStore } from "redux-persist";
import { combineReducers } from 'redux';

import employeesReducer from "./slices/employeesSlice.js";
import moviesReducer from "./slices/moviesSlice.js";

const persistConfig = {
    // Key to use in storage
    key: "root",
    storage,
};

// Combine Reducers
const rootReducer = combineReducers({
    // My reducers
    employees: employeesReducer,
    movies: moviesReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false, // Required for Redux Persist
        }),
});

export const persistor = persistStore(store);
export default store;
