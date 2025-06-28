import axios from "axios"

const API = axios.create({
  baseURL: "http://localhost:5000/api", // adjust for your backend
  headers: {
    "Content-Type": "application/json",
  },
})

export default API
