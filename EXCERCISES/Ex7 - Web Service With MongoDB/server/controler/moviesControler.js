import express from 'express';

import * as moviesService from '../services/moviesService.js';

// ROUTE TO URL: .../movies

const router = express.Router();

router.get('/', async(req, res) => {
  try {
    const movies = await moviesService.getAllMovies();
    res.send(movies);
  } catch (error) {
    res.send(error.message);
  }
});

router.post('/', async(req, res) => {
  try {
    const newMovie = req.body;
    const movie = await moviesService.addMovie(newMovie);
    res.send(movie);
  } catch (error) {
    res.send(error.message);
  }
});

router.put('/:name', async(req, res) => {
  try {
    const movieName = req.params.name;
    const updatedMovie = req.body;
    const oldMovie = await moviesService.replaceMovie(movieName, updatedMovie);
    res.send(oldMovie);
  } catch (error) {
    res.send(error.message);
  }
});

router.patch('/:name', async(req, res) => {
  try {
    const movieName = req.params.name;
    const properties = req.body;
    const oldMovie = await moviesService.updateMovieProp(movieName, properties);
    res.send(oldMovie);
  } catch (error) {
    res.send(error.message);
  }
});

router.delete('/:id', async(req, res) => {
  try {
    const id = req.params.id;
    const deletedPerson = await moviesService.deleteMovie(id);
    res.send(deletedPerson);
  } catch (error) {
    res.send(error.message);
  }
});

export default router;