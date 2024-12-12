import axios from 'axios';
import {Platform} from 'react-native';

const axiosInstance = axios.create({
  baseURL:
    Platform.OS === 'android'
      ? 'http://172.16.10.59:8585'
      : 'http://localhost:3030',
  withCredentials: true,
});

export default axiosInstance;
