import moviesModel from "../models/moviesModel.js";

export const addMovie = (movie) => {
  const newMovie = moviesModel(movie);

  return newMovie.save();
};
