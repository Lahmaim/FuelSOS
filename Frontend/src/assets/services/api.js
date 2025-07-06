// import axios from "axios";

// export const api = axios.create({
//   baseURL: import.meta.env.API_URL,
//   headers: {
//     "Content-Type": "application/json",
//   },
// });


import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.API_URL,
  headers: { "Content-Type": "application/json" },
});

API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export const getProfile = () => API.get("/users/me/profile");
export const updateProfile = (data: any) => API.put("/users/me/profile", data);
