import http from './httpService';
import { vidlyApiUrl } from '../config.json';

const apiEndpoint = vidlyApiUrl + '/users';

export async function register(user) {
  const { data } = await http.post(apiEndpoint, {
    email: user.username,
    password: user.password,
    name: user.name,
  });
  return data;
}
