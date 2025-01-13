import getWebMovies from "../repositories/moviesWebRepo.js";
import * as moviesDbRepo from "../repositories/moviesDbRepo.js";

export const getMoviesFromWeb = (url) => { 
    return getWebMovies(url);
};

export const addMovie = (movie) => { 
    return moviesDbRepo.addMovie(movie);
};