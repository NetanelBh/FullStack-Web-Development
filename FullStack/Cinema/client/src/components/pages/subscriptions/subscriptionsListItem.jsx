import styles from "./subscriptionsListItem.module.css";

import { useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";

import Card from "../../UI/card/card";
import Button from "../../UI/button/button";
import { isShowPermission } from "../../utils/moviesPermissions";

const SubscriptionsListItem = ({ subscription }) => {
	const allEmployees = useSelector((state) => state.employees.employees);
	const allMovies = useSelector((state) => state.movies.movies);
	const navigate = useNavigate();

	const employeeId = localStorage.getItem("id");
	const editPermission = "Update Subscription";
	const deletePermission = "Delete Subscriptions";

	const newMovieSubscriptionHandler = () => {
		// TODO: CREATE A SECTION FOR NEW SUBSCRIPTION MOVIES
	};

	const deleteSubscriptionHandler = async () => {
		// const url = `http://localhost:3000/subscriptions/member/delete/${subscription._id}`;
		const url = `http://localhost:3000/subscriptions/member/delete/680e4fb12ce40a2885cf9451`;
        try {
            const resp = (await axios.delete(url)).data;
            console.log(resp);
            
        } catch (error) {
            console.error("Error deleting subscription:", error);
        }
	};

	const editSubscriptionHandler = () => {
		localStorage.setItem("subscriptionId", subscription._id);
		navigate("/layout/editSubscription");
	};

	// Determine whether the employee has the permissin to edit or remove movies
	const isEditPermission = isShowPermission(allEmployees, employeeId, editPermission);
	const isDeletePermission = isShowPermission(allEmployees, employeeId, deletePermission);

	return (
		<li className={styles.all_subs_list_item}>
			<p className={styles.all_subs_list_item_name}>{subscription.name}</p>
			<p className={styles.all_subs_list_item_details}>{subscription.email}</p>
			<p className={styles.all_subs_list_item_details}>{subscription.city}</p>

			{(isEditPermission || isDeletePermission) && (
				<div className={styles.all_subs_list_item_actions}>
					{isEditPermission && (
						<Button
							className={styles.all_subs_list_item_actions_edit}
							text="Edit"
							type="button"
							onClick={editSubscriptionHandler}
						/>
					)}

					{isDeletePermission && (
						<Button
							className={styles.all_subs_list_item_actions_delete}
							text="Delete"
							type="button"
							onClick={deleteSubscriptionHandler}
						/>
					)}
				</div>
			)}

			<Card className={`generic_card ${styles.all_subs_list_item_movies_card}`}>
				<p className={styles.all_subs_list_item_movies_header}>Watched Movies</p>

				<Button
					className={styles.all_subs_list_item_movie_subscribe_button}
					text="Subscribe To New Movies"
					type="button"
					onClick={newMovieSubscriptionHandler}
				></Button>

				<ul className={styles.all_subs_list_item_movies_list}>
					{subscription.movies.map((movie) => {
						const movieName = allMovies.find((m) => m._id === movie.movieId).name;
						return (
							<li key={movie.movieId}>
								<NavLink to="/layout/WebContentLayout/movies/all" state={{ selectedMovie: movieName }}>
									{movieName}, {movie.date}
								</NavLink>
							</li>
						);
					})}
				</ul>
			</Card>
		</li>
	);
};

export default SubscriptionsListItem;
