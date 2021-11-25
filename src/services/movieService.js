import http from './httpService';
import { vidlyApiUrl } from '../config.json';

const apiEndpoint = vidlyApiUrl + '/movies';

function movieUrl(id) {
  return `${apiEndpoint}/${id}`;
}

export async function getMovie(id) {
  const { data: movie } = await http.get(movieUrl(id));
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
    const { data } = await http.put(movieUrl(movie._id), body);
    return data;
  }

  const { data } = await http.post(apiEndpoint, movie);
  return data;
}

export async function deleteMovie(id) {
  const { data: movie } = await http.delete(movieUrl(id));

  return movie;
}
