import styles from "./movieSubscriptionsList.module.css";

import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const MmovieSubscriptionsList = ({ movie }) => {
	const members = useSelector((state) => state.members.members);
	const subscriptions = useSelector((state) => state.subscriptions.subscriptions);

    // TODO: ADD THE PROPERTY "TO" TO NAVIGATE FROM NAVLINK TO THE USER SUBSCRIPTION'S EDIT PAGE

	return (
		<ul className={styles.movies_subscriptions_list_ul}>
			{subscriptions.map((subscription) => {
				// If subscription watched the movie, return the watched movid details from subscription's movies list
				const subscriptionWatchedMovie = subscription.movies.find((subMovie) => subMovie.movieId === movie._id);
				if (subscriptionWatchedMovie) {
					// After the watched movie is found, return the watched member's name and the date of watch.
					const watchedMember = members.find((member) => member._id === subscription.memberId);
					return (
						<li key={subscription.memberId} className={styles.movies_subscriptions_list_ul_li}>
							<NavLink to="/layout/editSubscription" state={subscription.memberId} className={StyleSheet.movies_subscriptions_list_li}>{watchedMember.name}</NavLink>,{" "}
							<span>{subscriptionWatchedMovie.date}</span>
						</li>
					);
				}
			})}
		</ul>
	);
};

export default MmovieSubscriptionsList;
