import Axios from 'axios';

Axios.defaults.baseURL = process.env.REACT_APP_API_URL;

if (localStorage.getItem('token')) {
  Axios.defaults.headers.common['Authorization'] = localStorage.getItem('token');
}
