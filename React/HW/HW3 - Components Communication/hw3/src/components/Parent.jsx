import styles from "./Parent.module.css";

import Child from "./Child";
import { useState } from "react";

const MOVIES = [
  {
    id: 1,
    name: "Under the Dome",
    pic: "https://static.tvmaze.com/uploads/images/medium_portrait/81/202627.jpg",
  },
  {
    id: 2,
    name: "Person of Interest",
    pic: "https://static.tvmaze.com/uploads/images/medium_portrait/163/407679.jpg",
  },
  {
    id: 3,
    name: "Bitten",
    pic: "https://static.tvmaze.com/uploads/images/medium_portrait/0/15.jpg",
  },
];

const Parent = () => {
  const [filtereMovie, setFiltereMovie] = useState();

  const changeMovieHandler = (event) => {
    const movieName = event.target.value;

    if (movieName === 'Select a Movie') {
      setFiltereMovie();
      return;
    }

    const filetereMovie = MOVIES.find(movie => movie.name === movieName);
    setFiltereMovie(filetereMovie);
  };

  return (
    <div className={styles.container}>
      <h1>Pick a Movie</h1>
      <select onChange={changeMovieHandler}>
        <option value='Select a Movie'>Select a Movie</option>
        <option value='Under the Dome'>Under the Dome</option>
        <option value='Person of Interest'>Person of Interest</option>
        <option value='Bitten'>Bitten</option>
      </select>

      {filtereMovie && <Child movie={filtereMovie}/>}
    </div>
  );
};

export default Parent;
