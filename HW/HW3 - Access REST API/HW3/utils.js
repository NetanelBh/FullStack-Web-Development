import axios from "axios";
import jsonfile from "jsonfile";


const Utils = async () => {
  const url = "http://api.tvmaze.com/shows";
  const jsonPath = "./movies.json";

  // Get the movies details from the given url
  const urlMovies = (await axios.get(url)).data;
  // Get the movies details from the json file
  const jsonMovies = await jsonfile.readFile(jsonPath);

  // Replace the json movies array with the object template returned from map
  jsonMovies.movies = jsonMovies.movies.map((movieName) => {
    const movieData = urlMovies.find((movie) => movieName === movie.name);

    // The new movie template to be writen to json file
    return {name: movieName, premiered: movieData.premiered};
  });

  // Replace the json content with the updated movies objects
  await jsonfile.writeFile(jsonPath, jsonMovies);

  return jsonMovies;
};

export default Utils;
