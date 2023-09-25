// apiConfig.js
import axios from "axios";

export const backendUrl = "https://api-casino.onrender.com"; // Reemplaza con la URL de tu backend

const instance = axios.create({
  baseURL: backendUrl,
});

export default instance;
