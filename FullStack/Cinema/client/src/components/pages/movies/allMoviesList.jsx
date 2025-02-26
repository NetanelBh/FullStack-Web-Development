import styles from "./allMoviesList.module.css";

import { useSelector } from "react-redux";

import Card from "../../UI/card/card";
import MovieListItem from "./movieListItem";

const AllMoviesList = () => {
	const movies = useSelector((state) => state.movies.movies);

	return (
		<ul className={styles.all_movies_list_ul}>
			{movies.map((movie) => {
				return (
					<Card className="generic_card" key={movie._id}>
						<MovieListItem movie={movie} />
					</Card>
				);
			})}
		</ul>
	);
};

export default AllMoviesList;
