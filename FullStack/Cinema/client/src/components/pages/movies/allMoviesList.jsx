import styles from "./allMoviesList.module.css";

import { useSelector } from "react-redux";

import Card from "../../UI/card/card";

const AllMoviesList = () => {
	const allMovies = useSelector((state) => state.movies.movies);

	return (
		<ul className={styles.all_movies_list_ul}>
			{allMovies.map((m) => {
				return <Card className="generic_card" key={m.id}>
                    <li>{m.name}</li>
                </Card>;
			})}
		</ul>
	);
};

export default AllMoviesList;
