import React from "react";

import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const MmovieSubscriptionsList = ({ movie }) => {
	const members = useSelector((state) => state.members.members);
	const subscriptions = useSelector((state) => state.subscriptions.subscriptions);

	return (
		<ul>
			{subscriptions.map((subscription) => {
				// If subscription watched the movie, return the watched movid details from subscription's movies list
				const subscriptionWatchedMovie = subscription.movies.find((subMovie) => subMovie.movieId === movie._id);
				if (subscriptionWatchedMovie) {
					// After the watched movie is found, return the watched member's name and the date of watch.
					const watchedMember = members.find((member) => member._id === subscription.memberId);
					return (
						<li key={subscription.memberId}>
							<NavLink>{watchedMember.name}</NavLink>, {subscriptionWatchedMovie.date}
						</li>
					);
				}
			})}
		</ul>
	);
};

export default MmovieSubscriptionsList;
