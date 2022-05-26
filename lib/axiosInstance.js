import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  // timeout: Number(process.env.NEXT_PUBLIC_API_TIMEOUT),
  timeoutErrorMessage: 'Timeout.Please try after sometime',
});

export default axiosInstance;
