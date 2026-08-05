import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true
});

export const getTrips = () => api.get('/trips');
export const submitContact = (payload) => api.post('/contact', payload);

export default api;
