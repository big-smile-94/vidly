import http from './httpService';
import { vidlyApiUrl } from '../config.json';

const apiEndpoint = vidlyApiUrl + '/movies/';

export async function getMovies() {
  const { data: movies } = await http.get(apiEndpoint);
  return movies;
}

export async function deleteMovie(movieId) {
  const { data: movie } = await http.delete(apiEndpoint + movieId);

  return movie;
}
