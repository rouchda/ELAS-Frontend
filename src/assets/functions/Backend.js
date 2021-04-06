import axios from 'axios';

export default axios.create({
  baseURL: process.env.REACT_APP_ANALYTICS_FRAMEWORK_URL,
  responseType: 'json'
});