import axios from 'axios';

const BASE_URL: string = 'https://api.punkapi.com/v2/';

const instance = axios.create({
  baseURL: BASE_URL,
});

export default instance;
