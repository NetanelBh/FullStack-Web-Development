import Card from "../UI/card";
import styles from './movieListItem.module.css';

const MovieListItem = ({ movies }) => {
  let content = null;
  if (movies.length > 0) {
    content = movies.map((movie) => (
      <li key={movie.name}>
        <Card>
          <h1>{movie.name}</h1>
          <h2>{movie.director}</h2>
          <h3>{movie.premieredYear}</h3>
        </Card>
      </li>
    ));
  }

  return <div className={styles.content}>{content}</div>;
};

export default MovieListItem;
