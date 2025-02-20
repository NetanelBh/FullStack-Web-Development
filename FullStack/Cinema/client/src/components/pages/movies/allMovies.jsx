import styles from "./allMovies.module.css";

import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import AllMoviesList from "./allMoviesList";
import PacmanLoading from '../../UI/loading/pacmanLoading';

const AllMovies = () => {
  const [isLoading, setIsLoading] = useState(false);
	const [searchCharacters, setSearchCharacters] = useState("");

  // Fetch the movies data only once
  useEffect(() => {
    setIsLoading(true);
    const url = ""
    // TODO: GET THE MOVIES FROM THE DB AND CREATE THE MOVIES ROUTER AND SERVICES IN SERVER
    setIsLoading(false);
  }, []);

	const searchChangeCharacterHandler = (event) => {
		setSearchCharacters(event.target.value);
	};

	return (
		<>
			<div className={styles.all_movies_search}>
				<label htmlFor="search">Find Movie:</label>
				<input id="search" type="text" onChange={searchChangeCharacterHandler} value={searchCharacters}/>
			</div>

			<div id="list_container">
        {isLoading && <PacmanLoading color="#87a2ff"/>}
				{!isLoading && <AllMoviesList />}
			</div>
		</>
	);
};

export default AllMovies;
