// import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
// import { Button } from "@/components/ui/button";
// import { useMapEvents, MapContainer, TileLayer, Marker } from "react-leaflet";
// import { useState } from "react";
// import L from "leaflet";

// export default function RequestFuelModal({ open, onClose }: { open: boolean; onClose: () => void }) {
//   const [position, setPosition] = useState<[number, number] | null>(null);

//   const submitRequest = async () => {
//     if (!position) return alert("Pick a location on the map");
//     await fetch("/api/requests", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ latitude: position[0], longitude: position[1] }),
//     });
//     onClose();
//   };

//   const LocationPicker = () => {
//     useMapEvents({
//       click(e) {
//         setPosition([e.latlng.lat, e.latlng.lng]);
//       },
//     });
//     return position ? <Marker position={position} /> : null;
//   };

//   return (
//     <Dialog open={open} onOpenChange={onClose}>
//       <DialogContent className="p-0 overflow-hidden bg-[#1a201a] text-white">
//         <DialogHeader className="p-4">
//           <DialogTitle>Request Fuel</DialogTitle>
//         </DialogHeader>
//         <div className="h-[300px] w-full">
//           <MapContainer
//             center={[33.5, -7.5]} // Default to Casablanca
//             zoom={8}
//             style={{ height: "100%", width: "100%" }}
//           >
//             <TileLayer
//               url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//             />
//             <LocationPicker />
//           </MapContainer>
//         </div>
//         <div className="p-4 flex justify-end">
//           <Button onClick={submitRequest}>Submit Request</Button>
//         </div>
//       </DialogContent>
//     </Dialog>
//   );
// }




// import { useState, useEffect } from "react";
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// import "leaflet/dist/leaflet.css";
// import { createFuelRequest } from "../services/requestService";
// import { toast } from "sonner"

// export default function RequestFuelModal() {
//   const [fuelType, setFuelType] = useState("");
//   const [amount, setAmount] = useState("");
//   const [location, setLocation] = useState<{ lat: number; lng: number } | null>(null);
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   useEffect(() => {
//     navigator.geolocation.getCurrentPosition(
//       (pos) => setLocation({ lat: pos.coords.latitude, lng: pos.coords.longitude }),
//       () =>
//         toast({
//           title: "Location Error",
//           description: "Could not get your location",
//           variant: "destructive",
//         })
//     );
//   }, []);

//   const isFormValid = fuelType !== "" && Number(amount) > 0 && location !== null;

//   const handleSubmit = async () => {
//     if (!isFormValid) {
//       toast({
//         title: "Missing or invalid fields",
//         description: "Please select a fuel type and enter a valid amount",
//         variant: "destructive",
//       });
//       return;
//     }

//     setIsSubmitting(true);
//     try {
//       await createFuelRequest({ fuelType, amount: Number(amount), location: location! });
//       toast({
//         title: "Fuel Request Sent",
//         description: "Your request was successfully submitted",
//       });
//       setFuelType("");
//       setAmount("");
//     } catch (error) {
//       toast({
//         title: "Submission Failed",
//         description: "Please try again later",
//         variant: "destructive",
//       });
//       console.error(error);
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <Dialog>
//       <DialogTrigger asChild>
//         <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold w-full">
//           Request Fuel
//         </Button>
//       </DialogTrigger>
//       <DialogContent className="bg-gray-900 text-white max-w-xl">
//         <DialogHeader>
//           <DialogTitle>Request Fuel</DialogTitle>
//         </DialogHeader>

//         <div className="space-y-4">
//           <div>
//             <label htmlFor="fuel-type" className="text-sm">
//               Fuel Type
//             </label>
//             <Select id="fuel-type" onValueChange={setFuelType} value={fuelType}>
//               <SelectTrigger className="bg-gray-800 text-white">
//                 <SelectValue placeholder="Select fuel type" />
//               </SelectTrigger>
//               <SelectContent>
//                 <SelectItem value="gasoline">Gasoline</SelectItem>
//                 <SelectItem value="diesel">Diesel</SelectItem>
//                 <SelectItem value="electric">Electric</SelectItem>
//               </SelectContent>
//             </Select>
//           </div>

//           <div>
//             <label htmlFor="amount" className="text-sm">
//               Amount (Liters)
//             </label>
//             <Input
//               id="amount"
//               type="number"
//               min={1}
//               value={amount}
//               onChange={(e) => setAmount(e.target.value)}
//               placeholder="e.g. 10"
//               className="bg-gray-800 text-white"
//               disabled={isSubmitting}
//             />
//           </div>

//           {location ? (
//             <MapContainer
//               center={[location.lat, location.lng]}
//               zoom={13}
//               style={{ height: "200px", borderRadius: "12px" }}
//             >
//               <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
//               <Marker position={[location.lat, location.lng]}>
//                 <Popup>Your location</Popup>
//               </Marker>
//             </MapContainer>
//           ) : (
//             <p>Loading location...</p>
//           )}

//           <Button
//             onClick={handleSubmit}
//             className="w-full bg-green-600 hover:bg-green-700 text-white"
//             disabled={!isFormValid || isSubmitting}
//           >
//             {isSubmitting ? "Submitting..." : "Submit Request"}
//           </Button>
//         </div>
//       </DialogContent>
//     </Dialog>
//   );
// }





import { useState } from "react";
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import axios from "axios";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";

function LocationPicker({ setLatLng }: { setLatLng: (pos: { lat: number; lng: number }) => void }) {
  useMapEvents({
    click(e) {
      setLatLng({ lat: e.latlng.lat, lng: e.latlng.lng });
    },
  });
  return null;
}

export default function RequestFuelModal() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    imatricule: "",
    fuelType: "Diesel",
    quantity: 10,
    note: "",
    time: new Date().toISOString(),
  });
  const [location, setLocation] = useState({ lat: 33.5899, lng: -7.6039 }); // Default Casablanca

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      await axios.post("http://localhost:5000/api/request", { ...form, location });
      toast.success("Fuel request sent!");
    } catch (err) {
      console.error(err);
      toast.error("Failed to send request.");
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Request Fuel</Button>
      </DialogTrigger>
      <DialogContent className="max-w-xl">
        <h2 className="text-xl font-bold mb-4">Fuel Request</h2>
        <Input name="name" placeholder="Full Name" onChange={handleChange} />
        <Input name="phone" placeholder="Phone Number" onChange={handleChange} />
        <Input name="imatricule" placeholder="Vehicle Plate" onChange={handleChange} />
        <Input name="fuelType" placeholder="Fuel Type (Electric/Diesel/Petrol)" onChange={handleChange} />
        <Input name="quantity" type="number" placeholder="Quantity (liters)" onChange={handleChange} />
        <Textarea name="note" placeholder="Additional Note" onChange={handleChange} />
        <MapContainer center={location} zoom={13} style={{ height: "200px" }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={location} />
          <LocationPicker setLatLng={setLocation} />
        </MapContainer>
        <Button onClick={handleSubmit} className="mt-4 w-full">
          Submit Request
        </Button>
      </DialogContent>
    </Dialog>
  );
}
