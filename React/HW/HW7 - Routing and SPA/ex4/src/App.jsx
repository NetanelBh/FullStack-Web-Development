import styles from "./App.module.css";
import { useState, useEffect } from "react";
import axios from "axios";

import MoviesList from "./components/movies/MoviesList";
import PacmanLoading from "./components/UI/PacmanLoading";

const URL = "https://api.tvmaze.com/shows";

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [movieId, setMovieId] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const resp = await axios.get(URL);
        setMovies(resp.data);
      } catch (error) {
        throw new Error(error.message);
      }
      setIsLoading(false);
    };

    fetchData();
  }, []);

  let src;
  if (movieId !== 0) {
    src = movies.filter((m) => m.id === movieId)[0].image.medium;
  }

  return (
    <>
      {isLoading && <PacmanLoading color="red" />}
      {!isLoading && (
        <div className={styles.container}>
          <div className={styles.movies_list}>
            <h1>Movies</h1>
            <MoviesList movies={movies} onMouseHover={(id) => setMovieId(id)} />
          </div>

          <div className={styles.movies_image}>
            {src && <img src={src} alt="medium image" />}
          </div>
        </div>
      )}
    </>
  );
};

export default App;
