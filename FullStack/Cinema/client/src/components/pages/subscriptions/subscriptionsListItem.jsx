import styles from "./subscriptionsListItem.module.css";

import axios from "axios";

import { useSelector, useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";

import Card from "../../UI/card/card";
import Button from "../../UI/button/button";
import { isShowPermission } from "../../utils/moviesPermissions";

import { membersActions } from "../../store/slices/membersSlice";
import { subscriptionsActions } from "../../store/slices/subscriptionsSlice";
import { useState } from "react";

const SubscriptionsListItem = ({ subscription }) => {
	const allEmployees = useSelector((state) => state.employees.employees);
	const allMovies = useSelector((state) => state.movies.movies);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [isAddSubscription, setIsAddSubscription] = useState(false);

	const employeeId = localStorage.getItem("id");
	const editPermission = "Update Subscription";
	const deletePermission = "Delete Subscriptions";

	const newMovieSubscriptionHandler = () => {
		setIsAddSubscription((prevState) => !prevState);
	};

	const deleteSubscriptionHandler = async () => {
		const deleteMemberUrl = `http://localhost:3000/subscriptions/member/delete/${subscription._id}`;
		const deleteSubscriptionUrl = `http://localhost:3000/subscriptions/subscription/delete/${subscription._id}`;
		const headers = { authorization: `Bearer ${localStorage.getItem("token")}` };

		try {
			const deleteMemberResp = (await axios.delete(deleteMemberUrl, { headers })).data;
			if (deleteMemberResp.status) {
				dispatch(membersActions.remove(subscription._id));
			}

			const deleteSubscriptionResp = (await axios.delete(deleteSubscriptionUrl, { headers })).data;
			if (deleteSubscriptionResp.status) {
				dispatch(subscriptionsActions.remove(subscription._id));
			}
		} catch (error) {
			console.error("Error deleting subscription:", error);
		}
	};

	const editSubscriptionHandler = () => {
		localStorage.setItem("subscriptionId", subscription._id);
		navigate("/layout/editSubscription");
	};

	const addSubscriptionHandler = (event) => {
		event.preventDefault();

        // TODO: Implement the logic to add a new movie subscription
	};

	// Determine whether the employee has the permissin to edit or remove movies
	const isEditPermission = isShowPermission(allEmployees, employeeId, editPermission);
	const isDeletePermission = isShowPermission(allEmployees, employeeId, deletePermission);

	let dateOffer = undefined;
	let filteredMovies = undefined;
	if (isAddSubscription) {
		dateOffer = new Date().toISOString().split("T")[0];
		const watchedMoviesId = subscription.movies.map((movie) => movie.movieId);

		filteredMovies = allMovies.filter((movie) => !watchedMoviesId.includes(movie._id));
	}

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

				{isAddSubscription && (
					<form onSubmit={addSubscriptionHandler}>
						<Card className={`generic_card ${styles.all_subs_list_item_new_subs_card}`}>
							<h2>Add a new movie</h2>
							<div className={styles.all_subs_list_item_movies_subs_data}>
								<select id="select">
									{filteredMovies.map((movie) => {
										return (
											<option key={movie._id} value={movie.name}>
												{movie.name}
											</option>
										);
									})}
								</select>
								<input id="date" type="date" defaultValue={dateOffer} readOnly />
							</div>
							<Button
								className={styles.all_subs_list_item_new_subs_button}
								text="Subscribe"
								type="submit"
							/>
						</Card>
					</form>
				)}

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
