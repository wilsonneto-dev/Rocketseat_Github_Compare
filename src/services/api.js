/* eslint-disable comma-dangle */
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.github.com/'
});

export default api;
