import styles from "./allMovies.module.css";

import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

import AllMoviesList from "./allMoviesList";
import PacmanLoading from "../../UI/loading/pacmanLoading";
import { moviesActions } from "../../store/slices/moviesSlice";

const AllMovies = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [searchCharacters, setSearchCharacters] = useState("");
	const dispatch = useDispatch();
	const movies = useSelector((state) => state.movies.movies);

	const fetchData = useCallback(async () => {
		try {
			setIsLoading(true);
			const url = "http://localhost:3000/subscriptions/movies";
			const resp = (await axios.get(url)).data;
			if(resp.status) {
				dispatch(moviesActions.load(resp.data.data));
			}
			setIsLoading(false);
		} catch (error) {
			console.log(error.message);
		}
	}, []);

	// Fetch the movies data only once
	useEffect(() => {
		// Should use condition because when using navigate, react will run the effect again regardless the dependencies
		if (movies.length === 0) {
			fetchData();
		}
	}, [fetchData]);

	const searchChangeCharacterHandler = (event) => {
		setSearchCharacters(event.target.value);
	};

	return (
		<>
			{!isLoading && <div className={styles.all_movies_search}>
				<label htmlFor="search">Find Movie:</label>
				<input id="search" type="text" onChange={searchChangeCharacterHandler} value={searchCharacters} />
			</div>}

			<div id="list_container">
				{isLoading && <PacmanLoading color="#87a2ff" />}
				{!isLoading && <AllMoviesList />}
				{!isLoading && movies.length === 0 && <p>No movies to Show</p>}
			</div>
		</>
	);
};

export default AllMovies;
