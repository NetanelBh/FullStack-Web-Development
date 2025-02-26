import styles from "./movieListItem.module.css";

import MmovieSubscriptionsList from "./movieSubscriptionsList";

const MovieListItem = ({movie}) => {
	return (
		<li className={styles.all_movies_list_li}>
			<span className={styles.all_movies_list_movie_name}>
				{movie.name} - {movie.premiered.slice(0, 4)}
			</span>
			{/* Get the genres array into one string and add comma between them */}
			<span className={styles.all_movies_list_genre}>Genres: {movie.genre.map((genre) => genre).join(", ")}</span>
			<div className={styles.all_movies_list_image_subscription_container}>
				<img src={movie.image} alt="Movie Image" className={styles.all_movies_list_image} />
				<div className={styles.all_movies_list_subscriptions_container}>
					<span>Subscription Watched:</span>
					<MmovieSubscriptionsList movie={movie}/>
				</div>
			</div>
		</li>
	);
};

export default MovieListItem;
