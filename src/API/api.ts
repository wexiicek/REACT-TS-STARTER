import axios from 'axios';

const config = {
  baseURL: process.env.REACT_APP_BACKEND_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
};

const instance = axios.create(config);

export default instance;
