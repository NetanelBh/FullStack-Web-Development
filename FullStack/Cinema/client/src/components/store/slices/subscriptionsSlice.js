import { createSlice } from "@reduxjs/toolkit";

const initialState = { subscriptions: [] };

const subscriptionsSlice = createSlice({
	name: "subscriptions",
	initialState,
	reducers: {
		load(state, action) {
			state.subscriptions = action.payload;
		},
		add(state, action) {
			state.subscriptions.push(action.payload);
		},
		remove(state, action) {
            state.subscriptions = state.subscriptions.filter((sub) => sub.memberId !== action.payload);
        },
        clear(state, action) {
            state.subscriptions = [];
        }
	},
});

export const subscriptionsActions = subscriptionsSlice.actions;

export default subscriptionsSlice.reducer;
