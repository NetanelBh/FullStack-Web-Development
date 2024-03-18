import { useEffect, useState } from 'react';
import styles from './App.module.css';

import Movie from './components/Movie';
import PacmanLoading from './components/UI/PacmanLoading';

import axios from 'axios';

const URL = "https://api.tvmaze.com/shows";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const getData = async () => {
      const firstMovies = [];

      try {
        const resp = await axios.get(URL);
        for(let i = 0; i < 10; i++) {
          const obj = {name: resp.data[i].name, image: resp.data[i].image.medium};
          firstMovies.push(obj);
        }
      } catch (error) {
        throw new Error(error.message);
      }

      setMovies(firstMovies);
    };

    getData();
    setIsLoading(false);
  }, []);

  return (
    <div className={styles.container}>
      <h1>Movies</h1>
      {isLoading && <PacmanLoading color='blue'/>}
      {!isLoading && <Movie movies={movies}/>}
    </div>
  )
}

export default App
