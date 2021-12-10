import axios from 'axios';

const API = axios.create({ baseURL: 'https://instagram-clone-dibyanshu47.herokuapp.com/' });

export const login = (userDetails) => API.post('/user/login', userDetails);
export const register = (userDetails) => API.post('/user/register', userDetails);