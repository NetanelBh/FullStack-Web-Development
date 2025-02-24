import { createSlice } from "@reduxjs/toolkit";

const initialState = { members: [] };

const membersSlice = createSlice({
    name: "members",
    initialState,
    reducers: {
        load(state, action) {
            state.members = action.payload;
        },
        clear(state, action) {
            state.members = [];
        }
    },
});

export const membersActions = membersSlice.actions;

export default membersSlice.reducer;