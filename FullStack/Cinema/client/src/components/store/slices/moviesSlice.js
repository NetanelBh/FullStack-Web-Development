import { createSlice } from "@reduxjs/toolkit";

const initialState = {movies: [], readFromDb: false};

const moviesSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
        load(state, action) {
            state.movies = action.payload;
            state.readFromDb = false;
        },
        edit(state, action) {},
        delete(state, action) {}
    }
})

export const moviesActions = moviesSlice.actions;

export default moviesSlice.reducer;