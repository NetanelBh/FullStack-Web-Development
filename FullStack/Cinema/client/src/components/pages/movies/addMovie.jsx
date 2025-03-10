import styles from "./addMovie.module.css";

import axios from "axios";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { moviesActions } from "../../store/slices/moviesSlice";

import { isShowPermission } from "../../utils/moviesPermissions";

import Input from "../../genericComp/input";
import Button from "../../UI/button/button";
import CustomDialog from "../../genericComp/dialog";

const AddMovie = () => {
	const movieNameRef = useRef();
	const genresRef = useRef();
	const imageRef = useRef();
	const premieredRef = useRef();
	const [showDialog, setShowDialog] = useState(false);
	const dispatch = useDispatch();

	const employees = useSelector((state) => state.employees.employees);

	const navigate = useNavigate();

	const saveMovieHandler = async (event) => {
		event.preventDefault();

		const movie = {
			name: movieNameRef.current.value,
			// Make the genres as a list
			genre: genresRef.current.value.split(","),
			image: imageRef.current.value,
			premiered: premieredRef.current.value,
		};
		
		// Save the movie in DB
		try {
			const resp = (await axios.post("http://localhost:3000/subscriptions/movie/add", movie)).data.data;

			if (resp.status) {
				setShowDialog(true);
				// Store the movie also in redux to prevent redundant re-read from DB(keep the redux up to date as the DB)
				dispatch(moviesActions.add(resp.data));
			}
		} catch (error) {
			console.log(error);
		}
	};

	const ConfirmHandler = () => {
		setShowDialog(false);
		navigate("/layout/WebContentLayout/movies/all");
	};

	const cancelHandler = () => {
		navigate("/layout/WebContentLayout/movies/all");
	};

	// Get the id of the loged in user from the local storage
	const employeeId = sessionStorage.getItem("id");
	const addPermission = "Create Movies";
	const isAddPermissions = isShowPermission(employees, employeeId, addPermission);

	return (
		<>
			{isAddPermissions && (
				<form onSubmit={saveMovieHandler} className={styles.add_movie_form_container}>
					<Input title="Name" type="text" className="" value="The Monkey" ref={movieNameRef} />
					<Input title="Genres" type="text" className="" value="Comedy, Horror" ref={genresRef} />
					<Input title="Image URL" type="text" className="" value="https://upload.wikimedia.org/wikipedia/en/9/9d/The_Monkey_film_poster.jpg" ref={imageRef} />
					<Input title="Premiered" type="date" className="" value="" ref={premieredRef} />

					<div className={styles.add_movie_actions}>
						<Button className={styles.add_movie_button} text="Save" type="submit" />
						<Button
							className={styles.add_movie_button}
							text="Cancle"
							type="button"
							onClick={cancelHandler}
						/>
					</div>
				</form>
			)}

			{!isAddPermissions && (
				<div id="list_container">
					<p className={styles.add_movie_no_permission}>No permission to add movies</p>
				</div>
			)}

			<CustomDialog
				title="Add Movie"
				text="Movie Added Successfully"
				buttonsArray={[{ text: "OK", onClick: ConfirmHandler }]}
				open={showDialog}
			/>
		</>
	);
};

export default AddMovie;
