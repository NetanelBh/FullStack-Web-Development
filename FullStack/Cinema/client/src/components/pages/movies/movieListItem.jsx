import styles from "./movieListItem.module.css";
import axios from "axios";

import MovieSubscriptionsList from "./movieSubscriptionsList";
import Button from "../../UI/button/button";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { moviesActions } from "../../store/slices/moviesSlice";
import { isShowPermission } from "../../utils/moviesPermissions";

const MovieListItem = ({ movie }) => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const employees = useSelector((state) => state.employees.employees);

	const deleteMovieHandler = async (movie) => {
		const url = `http://localhost:3000/subscriptions/movie/delete/${movie._id}`;
		try {
			const resp = (await axios.delete(url)).data;
			if (resp.status) {
				dispatch(moviesActions.delete(movie._id));
				navigate("/layout/WebContentLayout/movies/all");
			}
		} catch (error) {
			console.log(error.message);
		}
	};

	const editMovieHandler = (movie) => {
		localStorage.setItem("movieId", movie._id);
		navigate("/layout/editMovie");
	};

	const employeeId = sessionStorage.getItem("id");
	const editPermission = "Update Movie"
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
