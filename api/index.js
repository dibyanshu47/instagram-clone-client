import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000/' });

export const login = (userDetails) => API.post('/user/login', userDetails);
export const register = (userDetails) => API.post('/user/register', userDetails);