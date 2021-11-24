import http from './httpService';
import config from '../config.json';

export async function getMovies() {
  const { data: movies } = await http.get(`${config.vidlyApiBaseUri}/movies`);
  return movies;
}

export async function deleteMovie(movieId) {
  const { data: movie } = await http.delete(
    `${config.vidlyApiBaseUri}/movies/${movieId}`
  );

  return movie;
}
