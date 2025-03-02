import styles from "./movieListItem.module.css";

import MmovieSubscriptionsList from "./movieSubscriptionsList";
import Button from "../../UI/button/button";
import { useNavigate } from "react-router-dom";

const MovieListItem = ({ movie }) => {
	const navigate = useNavigate();

	const deleteMovieHandler = (movie) => {
		console.log(movie);
		
	};

	const editMovieHandler = (movie) => {
		localStorage.setItem("movieId", movie._id);
		navigate("/layout/editMovie");
	};

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
					<span>Subscriptions Watched:</span>
					<MmovieSubscriptionsList movie={movie} />
				</div>
			</div>

			<div className={styles.all_movies_list_item_actions}>
				<Button
					className={styles.all_movies_list_item_actions_edit}
					text="Edit"
					type="button"
					onClick={editMovieHandler.bind(null, movie)}
				/>
				<Button
					className={styles.all_movies_list_item_actions_delete}
					text="Delete"
					type="button"
					onClick={deleteMovieHandler.bind(null, movie)}
				/>
			</div>
		</li>
	);
};

export default MovieListItem;
