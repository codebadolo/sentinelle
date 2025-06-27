// src/api/axiosConfig.js
import axios from 'axios';

// Création d'une instance Axios avec configuration de base
const api = axios.create({
  baseURL: 'http://localhost:8000', // URL de ton backend Django local
  headers: {
    'Content-Type': 'application/json',
  },
});

// Intercepteur pour ajouter automatiquement le token dans chaque requête
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token'); // ou depuis contexte Auth si tu préfères
    if (token) {
      config.headers.Authorization = `Token ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;
