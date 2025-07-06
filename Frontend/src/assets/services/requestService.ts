import axios from "axios";

interface Location {
  lat: number;
  lng: number;
}

interface FuelRequestPayload {
  fuelType: string;
  amount: number;
  location: Location;
}

export async function createFuelRequest(data: FuelRequestPayload) {
  // Replace URL with your real backend endpoint
  const response = await axios.post("/api/fuel-requests", data, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`, // Adjust if you need auth
      "Content-Type": "application/json",
    },
  });
  return response.data;
}
