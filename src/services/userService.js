import http from './httpService';
import { vidlyApiUrl } from '../config.json';

const apiEndpoint = vidlyApiUrl + '/users';

export async function register(user) {
  return http.post(apiEndpoint, {
    email: user.username,
    password: user.password,
    name: user.name,
  });
}
