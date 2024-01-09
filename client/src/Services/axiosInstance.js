import axios from 'axios';
import Cookies from 'js-cookie';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:5001',
  headers: {
    'Content-Type': 'application/json',
     Authorization : `Bearer ${Cookies.get('auction-jwt-token')}`
  },
});

export default axiosInstance;