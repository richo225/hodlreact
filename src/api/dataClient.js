import axios from 'axios';

export default axios.create({
  baseURL: process.env.REACT_APP_HODLMOON_API_URL,
  headers:  JSON.parse(localStorage.getItem('auth_headers'))
});
