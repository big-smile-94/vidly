import http from './httpService';
import { vidlyApiUrl } from '../config.json';

export async function getGenres() {
  const { data: genres } = await http.get(`${vidlyApiUrl}/genres`);
  return genres;
}
