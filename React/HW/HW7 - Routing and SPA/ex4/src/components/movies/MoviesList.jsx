import styles from "./MoviesList.module.css";

import MoviesListItem from "./MoviesListItem";

const moviesList = ({ movies, onMouseHover }) => {
  return (
    <ul>
      {movies.map((movie) => {
        return (
          <MoviesListItem
            key={movie.id}
            movie={movie}
            onMouseHover={(id) => onMouseHover(id)}
          />
        );
      })}
    </ul>
  );
};

export default moviesList;
