// import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
// import { useEffect, useState } from "react";
// import L from "leaflet";

// function LocationMarker({
//   currentPosition,
//   onSelect,
// }: {
//   currentPosition: [number, number] | null;
//   onSelect: (latlng: [number, number]) => void;
// }) {
//   const [position, setPosition] = useState<[number, number] | null>(currentPosition);

//   useMapEvents({
//     click(e) {
//       const latlng: [number, number] = [e.latlng.lat, e.latlng.lng];
//       setPosition(latlng);
//       onSelect(latlng);
//     },
//   });

//   return position ? (
//     <Marker
//       position={position}
//       icon={L.icon({
//         iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
//         iconSize: [25, 41],
//         iconAnchor: [12, 41],
//       })}
//     />
//   ) : null;
// }

// export default function MapSelector({
//   onLocationSelect,
// }: {
//   onLocationSelect: (latlng: [number, number]) => void;
// }) {
//   const [initialPosition, setInitialPosition] = useState<[number, number] | null>(null);

//   // Auto-detect user location
//   // useEffect(() => {
//   //   if (navigator.geolocation) {
//   //     navigator.geolocation.getCurrentPosition(
//   //       (pos) => {
//   //         const coords: [number, number] = [pos.coords.latitude, pos.coords.longitude];
//   //         setInitialPosition(coords);
//   //         onLocationSelect(coords);
//   //       },
//   //       (err) => {
//   //         console.error("Geolocation error:", err);
//   //         setInitialPosition([33.5899, -7.6039]); // fallback: Casablanca
//   //       }
//   //     );
//   //   } else {
//   //     setInitialPosition([33.5899, -7.6039]); // fallback
//   //   }
//   // }, []);
//   useEffect(() => {
//   if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(
//       (pos) => {
//         const coords: [number, number] = [pos.coords.latitude, pos.coords.longitude];
//         setInitialPosition(coords);
//         onLocationSelect(coords);
//       },
//       (err) => {
//         console.warn("Geolocation error:", err.message);

//         // Check if user denied permission
//         if (err.code === 1) {
//           alert("You denied location access. Please click on the map to select your location manually.");
//         }

//         // Fallback location (e.g., Casablanca)
//         const fallback: [number, number] = [33.5899, -7.6039];
//         setInitialPosition(fallback);
//         onLocationSelect(fallback);
//       }
//     );
//   } else {
//     const fallback: [number, number] = [33.5899, -7.6039];
//     setInitialPosition(fallback);
//     onLocationSelect(fallback);
//   }
// }, []);


//   return initialPosition ? (
//     <MapContainer
//       center={initialPosition}
//       zoom={13}
//       style={{ height: "300px", width: "100%", borderRadius: "1rem" }}
//     >
//       <TileLayer
//         attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
//         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//       />
//       <LocationMarker currentPosition={initialPosition} onSelect={onLocationSelect} />
//     </MapContainer>
//   ) : (
//     <div className="text-center text-sm text-gray-500">Detecting your location...</div>
//   );
// }


import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import { useEffect, useState } from "react";
import L from "leaflet";

// LocationMarker allows user to click and update marker
function LocationMarker({
  currentPosition,
  onSelect,
}: {
  currentPosition: [number, number] | null;
  onSelect: (latlng: [number, number]) => void;
}) {
  const [position, setPosition] = useState<[number, number] | null>(currentPosition);

  useMapEvents({
    click(e) {
      const latlng: [number, number] = [e.latlng.lat, e.latlng.lng];
      setPosition(latlng);
      onSelect(latlng);
    },
  });

  return position ? (
    <Marker
      position={position}
      icon={L.icon({
        iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
        iconSize: [25, 41],
        iconAnchor: [12, 41],
      })}
    />
  ) : null;
}

// Main Component
export default function MapSelector({
  onLocationSelect,
}: {
  onLocationSelect: (latlng: [number, number]) => void;
}) {
  const [initialPosition, setInitialPosition] = useState<[number, number] | null>(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const coords: [number, number] = [pos.coords.latitude, pos.coords.longitude];
          setInitialPosition(coords);
          onLocationSelect(coords);
        },
        (err) => {
          console.warn("Geolocation error:", err.message);

          if (err.code === 1) {
            alert(" Location access denied.");
          }

          const fallback: [number, number] = [33.5899, -7.6039]; // Casablanca
          setInitialPosition(fallback);
          onLocationSelect(fallback);
        }
      );
    } else {
      const fallback: [number, number] = [33.5899, -7.6039]; // Fallback for unsupported browsers
      setInitialPosition(fallback);
      onLocationSelect(fallback);
    }
  }, []);

  return initialPosition ? (
    <MapContainer
      center={initialPosition}
      zoom={13}
      style={{ height: "200px", width: "100%", borderRadius: "1rem" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.google.com/maps/">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <LocationMarker currentPosition={initialPosition} onSelect={onLocationSelect} />
    </MapContainer>
  ) : (
    <div className="text-center text-sm text-gray-500"> Detecting your location...</div>
  );
}
