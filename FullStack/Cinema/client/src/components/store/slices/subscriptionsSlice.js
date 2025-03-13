import { createSlice } from "@reduxjs/toolkit";

const initialState = { subscriptions: [] };

const subscriptionsSlice = createSlice({
	name: "subscriptions",
	initialState,
	reducers: {
		load(state, action) {
			state.subscriptions = action.payload.data;
		},
		add(state, action) {
			state.subscriptions.push(action.payload);
		},
		remove(state, action) {
            state.subscriptions = state.subscriptions.filter((sub) => sub.memberId !== action.payload);
        },
		update(state, action) {
			// TODO: in payload I have movieId and the subscriptions list. find in the list who have the removed movie
			// 		and update the moviesList of the subscriptions that watched this movie
		}
	},
});

export const subscriptionsActions = subscriptionsSlice.actions;

export default subscriptionsSlice.reducer;
