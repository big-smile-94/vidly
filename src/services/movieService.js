import http from './httpService';
import { vidlyApiUrl } from '../config.json';

const apiEndpoint = vidlyApiUrl + '/movies';

export async function getMovie(id) {
  const { data: movie } = await http.get(apiEndpoint + '/' + id);
  return movie;
}

export async function getMovies() {
  const { data: movies } = await http.get(apiEndpoint);
  return movies;
}

export async function saveMovie(movie) {
  if (movie._id) {
    const body = { ...movie };
    delete body._id;
    const { data } = await http.put(apiEndpoint + '/' + movie._id, body);
    return data;
  }

  const { data } = await http.post(apiEndpoint, movie);
  return data;
}

export async function deleteMovie(id) {
  const { data: movie } = await http.delete(apiEndpoint + '/' + id);

  return movie;
}
