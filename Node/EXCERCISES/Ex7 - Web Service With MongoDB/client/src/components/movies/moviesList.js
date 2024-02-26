import styles from "./moviesList.module.css";

import MovieListItem from "./movieListItem";

const MoviesList = ({ isLoading, movies }) => {
  let content = null;
  if (isLoading) {
    content = <p className={styles.loading}>Loading...</p>;
  }

  return (
    <div className={styles.content}>
      {content}
      <ul>
        <MovieListItem movies={movies} />
      </ul>
    </div>
  );
};

export default MoviesList;
