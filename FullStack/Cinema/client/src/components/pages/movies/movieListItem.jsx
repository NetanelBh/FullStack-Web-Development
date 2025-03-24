import styles from "./movieListItem.module.css";
import axios from "axios";

import MovieSubscriptionsList from "./movieSubscriptionsList";
import Button from "../../UI/button/button";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { moviesActions } from "../../store/slices/moviesSlice";
import { subscriptionsActions } from "../../store/slices/subscriptionsSlice";
import { isShowPermission } from "../../utils/moviesPermissions";

const MovieListItem = ({ movie }) => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const employees = useSelector((state) => state.employees.employees);
	const subscriptions = useSelector((state) => state.subscriptions.subscriptions);

	const deleteMovieHandler = async (movie) => {
		// When delete the movie, will delete also the subscriptions that watched the movie
		const deleteUrl = `http://localhost:3000/subscriptions/movie/delete/${movie._id}`;
		const updateUrl = `http://localhost:3000/subscriptions/subscription/update`;

		// Filter only the subscriptions that watched the selected movie
		const watchedMovieSubscriptions = subscriptions
			.filter((subscription) => {
				return subscription.movies.find((m) => m.movieId === movie._id);
				// After we got only the subscriptions that watched the movie, will remove the movie from their movies list
			})
			.map((s) => {
				const filteredMovies = s.movies.filter((m) => m.movieId !== movie._id);
				return { ...s, movies: filteredMovies };
			});

		try {
			// Delete the movie from the database
			const deleteResp = (await axios.delete(deleteUrl)).data;
			// If the movie deleted successfully from the database, will delete it also from redux.
			if (deleteResp.status) {
				dispatch(moviesActions.delete(movie._id));

				// Only if successfully deleted from the database, remove the movie from the subscription list in DB
				const subscriptionsResp = (
					await axios.post(updateUrl, { movieId: movie._id, subscriptions: watchedMovieSubscriptions })
				).data;

				if (subscriptionsResp.status) {
					// Update the redux with the new retured list
					dispatch(subscriptionsActions.update(watchedMovieSubscriptions));
				}
			}
			navigate("/layout/WebContentLayout/movies/all");
		} catch (error) {
			console.log(error.message);
		}
	};

	const editMovieHandler = (movie) => {
		localStorage.setItem("movieId", movie._id);
		navigate("/layout/editMovie");
	};

	const employeeId = sessionStorage.getItem("id");
	const editPermission = "Update Movie";
	const deletePermission = "Delete Movies";

	// Determine whether the employee has the permissin to edit or remove movies
	const isEditPermission = isShowPermission(employees, employeeId, editPermission);
	const isDeletePermission = isShowPermission(employees, employeeId, deletePermission);

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
					<MovieSubscriptionsList movie={movie} />
				</div>
			</div>

			<div className={styles.all_movies_list_item_actions}>
				<Button
					className={isEditPermission ? styles.all_movies_list_item_actions_edit : styles.no_permission}
					text="Edit"
					type="button"
					onClick={editMovieHandler.bind(null, movie)}
				/>
				<Button
					className={isDeletePermission ? styles.all_movies_list_item_actions_delete : styles.no_permission}
					text="Delete"
					type="button"
					onClick={deleteMovieHandler.bind(null, movie)}
				/>
			</div>
		</li>
	);
};

export default MovieListItem;
