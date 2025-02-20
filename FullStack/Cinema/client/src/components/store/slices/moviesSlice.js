import { createSlice } from "@reduxjs/toolkit";

const initialState = {movies: []};

const moviesSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
        load(state, action) {
            state.movies = action.payload;
        },
        edit(state, action) {},
        delete(state, action) {}
    }
})

export const moviesActions = moviesSlice.actions;

export default moviesSlice.reducer;