import styles from "./addMovie.module.css";

import axios from "axios";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { moviesActions } from "../../store/slices/moviesSlice";

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

	return (
		<>
			<form onSubmit={saveMovieHandler} className={styles.add_movie_form_container}>
				<Input title="Name" type="text" className="" value="" ref={movieNameRef} />
				<Input title="Genres" type="text" className="" value="" ref={genresRef} />
				<Input
					title="Image URL"
					type="text"
					className=""
					value=""
					ref={imageRef}
				/>
				<Input title="Premiered" type="text" className="" value="" ref={premieredRef} />

				<div className={styles.add_movie_actions}>
					<Button className={styles.add_movie_button} text="Save" type="submit" />
					<Button className={styles.add_movie_button} text="Cancle" type="button" onClick={cancelHandler} />
				</div>
			</form>

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
