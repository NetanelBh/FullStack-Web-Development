import styles from "./allMovies.module.css";

import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

import AllMoviesList from "./allMoviesList";
import PacmanLoading from "../../UI/loading/pacmanLoading";
import { moviesActions } from "../../store/slices/moviesSlice";
import { membersActions } from "../../store/slices/membersSlice";
import { subscriptionsActions } from "../../store/slices/subscriptionsSlice";

const AllMovies = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [searchCharacters, setSearchCharacters] = useState("");
	const dispatch = useDispatch();

	const movies = useSelector((state) => state.movies.movies);
	const members = useSelector((state) => state.members.members);
	const subscriptions = useSelector((state) => state.subscriptions.subscriptions);

	const fetchData = useCallback(async () => {
		try {
			setIsLoading(true);

			const moviesUrl = "http://localhost:3000/subscriptions/movies";
			const moviesResp = (await axios.get(moviesUrl)).data;

			if(moviesResp.status) {
				dispatch(moviesActions.load(moviesResp.data));
			}

			const membersUrl = "http://localhost:3000/subscriptions/members";
			const membersResp = (await axios.get(membersUrl)).data;

			if(membersResp.status) {
			    dispatch(membersActions.load(membersResp.data));
			}

			const subscriptionsUrl = "http://localhost:3000/subscriptions/subscriptions";
			const subscriptionsResp = (await axios.get(subscriptionsUrl)).data;

			if(subscriptionsResp.status) {
				dispatch(subscriptionsActions.load(subscriptionsResp.data));
			}

			setIsLoading(false);
		} catch (error) {
			console.log(error.message);
		}
	}, []);

	// Fetch the data only once
	useEffect(() => {
		// Should use condition because when using navigate, react will run the effect again regardless the dependencies
		if (movies.length === 0 && members.length === 0 && subscriptions.length === 0) {
			fetchData();
		}
	}, [fetchData]);

	const findMovieHandler = (event) => {
		setSearchCharacters(event.target.value);
	};

	// Filter the movies list according to the user search
	let filteredMovies = [...movies];
	if (searchCharacters !== '') {
		filteredMovies = movies.filter((movie) => {
			return movie.name.toLocaleLowerCase().startsWith(searchCharacters.toLocaleLowerCase());
		});
	}

	return (
		<>
			{!isLoading && (
				<div className={styles.all_movies_search}>
					<label htmlFor="search">Find Movie:</label>
					<input id="search" type="text" onChange={findMovieHandler} value={searchCharacters} />
				</div>
			)}

			<div id="list_container">
				{isLoading && <PacmanLoading color="#87a2ff" />}
				{!isLoading && <AllMoviesList movies={filteredMovies}/>}
				{!isLoading && filteredMovies.length === 0 && <p className={styles.all_movies_no_movies}>No movies to Show</p>}
			</div>
		</>
	);
};

export default AllMovies;
