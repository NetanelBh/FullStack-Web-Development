import styles from "./allMoviesList.module.css";

import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import Card from "../../UI/card/card";

const AllMoviesList = () => {
	const movies = useSelector((state) => state.movies.movies);
	const members = useSelector((state) => state.members.members);
	const subscriptions = useSelector((state) => state.subscriptions.subscriptions);

	console.log(members);
	console.log(subscriptions);
	

	return (
		<ul className={styles.all_movies_list_ul}>
			{movies.map((movie) => {
				return (
					<Card className="generic_card" key={movie._id}>
						<li className={styles.all_movies_list_li}>
							<span className={styles.all_movies_list_movie_name}>
								{movie.name} - {movie.premiered.slice(0, 4)}
							</span>
							{/* Get the genres array into one string and add comma between them */}
							<span className={styles.all_movies_list_genre}>
								Genres: {movie.genre.map((genre) => genre).join(", ")}
							</span>
							<div className={styles.all_movies_list_image_subscription_container}>
								<img src={movie.image} alt="Movie Image" className={styles.all_movies_list_image} />
								<div className={styles.all_movies_list_subscriptions_container}>
									<span>Subscription Watched:</span>
									{/* CREATE MAP OF THE SUBSCRIPTIONS THAT WATCHED THE MOVIE. EACH ONE IS NAVLINK */}
								</div>
							</div>
						</li>
					</Card>
				);
			})}
		</ul>
	);
};

export default AllMoviesList;
