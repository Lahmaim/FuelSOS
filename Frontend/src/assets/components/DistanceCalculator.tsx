import React, { useState, useEffect } from 'react';

type Request = {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
  distanceKm?: number;
};

// Haversine formula to get distance in km between two points
function haversineDistance(
  coords1: [number, number],
  coords2: [number, number]
): number {
  const toRad = (deg: number) => (deg * Math.PI) / 180;
  const R = 6371; // Earth radius in km
  const dLat = toRad(coords2[0] - coords1[0]);
  const dLon = toRad(coords2[1] - coords1[1]);
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(coords1[0])) * Math.cos(toRad(coords2[0])) * Math.sin(dLon / 2) ** 2;
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

const requests: Request[] = [
  { id: 1, name: 'Alice', latitude: 34.05, longitude: -118.25 },
  { id: 2, name: 'Bob', latitude: 34.10, longitude: -118.20 },
  { id: 3, name: 'Carol', latitude: 34.00, longitude: -118.30 },
];

const DistanceCalculator: React.FC = () => {
  const [userLocation, setUserLocation] = useState<[number, number] | null>(null);
  const [requestsWithDistance, setRequestsWithDistance] = useState<Request[]>([]);

  useEffect(() => {
    if (!navigator.geolocation) {
      alert('Geolocation not supported');
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const userCoords: [number, number] = [position.coords.latitude, position.coords.longitude];
        setUserLocation(userCoords);

        const updated = requests.map((req) => ({
          ...req,
          distanceKm: haversineDistance(userCoords, [req.latitude, req.longitude]),
        }));
        setRequestsWithDistance(updated);
      },
      () => alert('Could not get your location')
    );
  }, []);

  return (
    <div>
      <h2>Requests with distance</h2>
      {userLocation ? (
        <ul>
          {requestsWithDistance.map((req) => (
            <li key={req.id}>
              {req.name}: {req.distanceKm?.toFixed(2)} km away
            </li>
          ))}
        </ul>
      ) : (
        <p>Getting location...</p>
      )}
    </div>
  );
};

export default DistanceCalculator;
