import MovieCollection from '../models/moviesModel.js';

// GET
export const getAllMovies = () => {
  return MovieCollection.find();
};

// POST
export const addMovie = (movie) => {
  const newMovie = new MovieCollection(movie);
  return newMovie.save();
};

// PUT
export const replaceMovie = (movieName, updatedMovie) => {
  return MovieCollection.findOneAndReplace({name: movieName}, updatedMovie);
};

// PATCH
export const updateMovieProp = (movieName, properties) => {
  return MovieCollection.findOneAndUpdate({name: movieName}, properties);
};

// DELETE
export const deleteMovie = (movieName) => {
  return MovieCollection.findOneAndDelete({name: movieName});
};