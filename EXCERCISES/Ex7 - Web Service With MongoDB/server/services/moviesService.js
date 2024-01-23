import * as moviesRepo from '../repositories/moviesRepo.js';

// GET
export const getAllMovies = () => {
  return moviesRepo.getAllMovies();
};

// POST
export const addMovie = (movie) => {
  return moviesRepo.addMovie(movie);
};

// PUT
export const replaceMovie = (movieName, updatedMovie) => {
  return moviesRepo.replaceMovie(movieName, updatedMovie);
};

// PATCH
export const updateMovieProp = (movieName, properties) => {
  return moviesRepo.updateMovieProp(movieName, properties);
};

// DELETE
export const deleteMovie = (id) => {
  return moviesRepo.deleteMovie(id);
};