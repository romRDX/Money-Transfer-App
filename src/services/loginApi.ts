import axios from 'axios';

// ONLY SIMULATING AN API
const loginApi = axios.create({
  baseURL: 'https://login-server',
});

export default loginApi;
