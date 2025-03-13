import { createSlice } from "@reduxjs/toolkit";

const initialState = { members: [] };

const membersSlice = createSlice({
    name: "members",
    initialState,
    reducers: {
        load(state, action) {   
            state.members = action.payload.data;
        },
        update(state, action) {
            const index = state.members.findIndex((member) => member._id === action.payload._id);
            if (index!== -1) {
                state.members[index] = action.payload;
            }
        }
    },
});

export const membersActions = membersSlice.actions;

export default membersSlice.reducer;