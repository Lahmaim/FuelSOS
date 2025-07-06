// import axios from "axios";

// const API = axios.create({
//   baseURL: "http://localhost:5000/api",
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

// // Attach token from localStorage to every request
// API.interceptors.request.use((config) => {
//   const token = localStorage.getItem("token");
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }
//   return config;
// });

// export const getAllUsers = () => API.get("/users/clients");




import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL, // Make sure this is defined in `.env`
  headers: { "Content-Type": "application/json" },
});

API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export const getAllUsers = () => API.get("/users");
export const getProfile = () => API.get("/users/me/profile");
export const updateProfile = (data: any) => API.put("/users/me/profile", data);

// ✅ This must be exported
export const addUser = (user: { name: string; email: string; role: string; password: string }) => {
  return axios.post("http://localhost:5000/api/users", user);
};
