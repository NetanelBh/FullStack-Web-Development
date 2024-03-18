import styles from './Movie.module.css';

const Movie = ({movies}) => {
  return <ul>
    {movies.map((movie, i) => {
      return <li key={i}>
        <div className={styles.item}>
          <h3>Name: {movie.name}</h3>
          <img src={movie.image} alt='image'/>
        </div>
      </li>
    })}
  </ul>
};

export default Movie;