import http from './httpService';
import { vidlyApiUrl } from '../config.json';

const apiEndpoint = vidlyApiUrl + '/auth';

export function login(email, password) {
  return http.post(apiEndpoint, { email, password });
}
