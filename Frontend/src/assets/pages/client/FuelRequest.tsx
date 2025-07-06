// import React, { useState } from "react";
// import { Card, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

// type Request = {
//   id: string;
//   fuelType: string;
//   quantity: number;
//   address: string;
//   deliveryTime: string;
//   status: "Pending" | "In Progress" | "Completed";
//   notes?: string;
// };

// const initialRequests: Request[] = [
//   {
//     id: "R001",
//     fuelType: "Petrol",
//     quantity: 20,
//     address: "123 Main St, City",
//     deliveryTime: "ASAP",
//     status: "Pending",
//   },
//   {
//     id: "R002",
//     fuelType: "Diesel",
//     quantity: 50,
//     address: "456 Oak Rd, City",
//     deliveryTime: "2025-07-01 14:00",
//     status: "Completed",
//   },
// ];

// export default function FuelRequest() {
//   const [requests, setRequests] = useState<Request[]>(initialRequests);
//   const [modalOpen, setModalOpen] = useState(false);

//   // Form state
//   const [fuelType, setFuelType] = useState("Petrol");
//   const [quantity, setQuantity] = useState(0);
//   const [address, setAddress] = useState("");
//   const [deliveryTime, setDeliveryTime] = useState("ASAP");
//   const [notes, setNotes] = useState("");

//   const resetForm = () => {
//     setFuelType("Petrol");
//     setQuantity(0);
//     setAddress("");
//     setDeliveryTime("ASAP");
//     setNotes("");
//   };

//   const handleSubmit = () => {
//     if (!quantity || !address) {
//       alert("Please enter quantity and address");
//       return;
//     }

//     const newRequest: Request = {
//       id: `R${(requests.length + 1).toString().padStart(3, "0")}`,
//       fuelType,
//       quantity,
//       address,
//       deliveryTime,
//       status: "Pending",
//       notes,
//     };

//     setRequests([newRequest, ...requests]);
//     resetForm();
//     setModalOpen(false);
//   };

//   const getStatusStyle = (status: string) => {
//     switch (status) {
//       case "Pending":
//         return "bg-yellow-100 text-yellow-800";
//       case "In Progress":
//         return "bg-blue-100 text-blue-800";
//       case "Completed":
//         return "bg-green-100 text-green-800";
//       default:
//         return "";
//     }
//   };

//   return (
//     <>
//     <div>
//       {/* Button to open modal */}
//       <Button onClick={() => setModalOpen(true)} className="mb-6 bg-yellow-400 hover:bg-yellow-500 text-black font-bold">
//         Request Fuel
//       </Button>

//       {/* Modal */}
//       {modalOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-white rounded-lg w-full max-w-md p-6">
//             <h2 className="text-xl font-bold mb-4">Request Fuel</h2>

//             <label className="block mb-2 font-semibold">Fuel Type</label>
//             <Select value={fuelType} onValueChange={setFuelType}>
//               <SelectTrigger>
//                 <SelectValue placeholder="Select fuel type" />
//               </SelectTrigger>
//               <SelectContent>
//                 <SelectItem value="Petrol">Petrol</SelectItem>
//                 <SelectItem value="Diesel">Diesel</SelectItem>
//                 <SelectItem value="Gasoline">Gasoline</SelectItem>
//               </SelectContent>
//             </Select>

//             <label className="block mt-4 mb-2 font-semibold">Quantity (liters)</label>
//             <Input
//               type="number"
//               min={1}
//               value={quantity}
//               onChange={(e) => setQuantity(Number(e.target.value))}
//               placeholder="Enter quantity"
//             />

//             <label className="block mt-4 mb-2 font-semibold">Delivery Address</label>
//             <Input
//               type="text"
//               value={address}
//               onChange={(e) => setAddress(e.target.value)}
//               placeholder="Enter delivery address"
//             />

//             <label className="block mt-4 mb-2 font-semibold">Delivery Time</label>
//             <Select value={deliveryTime} onValueChange={setDeliveryTime}>
//               <SelectTrigger>
//                 <SelectValue placeholder="Select delivery time" />
//               </SelectTrigger>
//               <SelectContent>
//                 <SelectItem value="ASAP">ASAP</SelectItem>
//                 <SelectItem value="Schedule">Schedule a time</SelectItem>
//               </SelectContent>
//             </Select>

//             {deliveryTime === "Schedule" && (
//               <Input
//                 type="datetime-local"
//                 className="mt-2"
//                 onChange={(e) => setDeliveryTime(e.target.value)}
//               />
//             )}

//             <label className="block mt-4 mb-2 font-semibold">Special Notes (optional)</label>
//             <textarea
//               rows={3}
//               value={notes}
//               onChange={(e) => setNotes(e.target.value)}
//               className="w-full p-2 border border-gray-300 rounded"
//               placeholder="Leave notes for the delivery"
//             ></textarea>

//             <div className="flex justify-end mt-6 space-x-3">
//               <Button variant="outline" onClick={() => setModalOpen(false)}>
//                 Cancel
//               </Button>
//               <Button onClick={handleSubmit}>Send Request</Button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Requests List */}
//       <div className="overflow-x-auto">
//         <table className="min-w-full bg-white rounded-lg shadow-sm">
//           <thead className="bg-gray-100 text-gray-600 uppercase text-xs">
//             <tr>
//               <th className="px-6 py-3 text-left">Request ID</th>
//               <th className="px-6 py-3 text-left">Fuel Type</th>
//               <th className="px-6 py-3 text-left">Quantity (L)</th>
//               <th className="px-6 py-3 text-left">Address</th>
//               <th className="px-6 py-3 text-left">Delivery Time</th>
//               <th className="px-6 py-3 text-left">Status</th>
//             </tr>
//           </thead>
//           <tbody>
//             {requests.map((req) => (
//               <tr key={req.id} className="border-t hover:bg-gray-50">
//                 <td className="px-6 py-4">{req.id}</td>
//                 <td className="px-6 py-4">{req.fuelType}</td>
//                 <td className="px-6 py-4">{req.quantity}</td>
//                 <td className="px-6 py-4">{req.address}</td>
//                 <td className="px-6 py-4">{req.deliveryTime}</td>
//                 <td className={`px-6 py-2 rounded-full text-xs font-semibold ${getStatusStyle(req.status)}`}>
//                   {req.status}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//     </>
    
//   );
// }














// import { Input } from "@/components/ui/input"
// import { Textarea } from "@/components/ui/textarea"
// import { Button } from "@/components/ui/button"
// import { Label } from "@/components/ui/label"
// import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select"
// import MapSelector from "./MapSelector"
// import { useState } from "react"
// export default function RequestFuelForm() {

//   const [selectedLocation, setSelectedLocation] = useState<[number, number] | null>(null);
//   return (
//     <div className="max-w-md mx-auto bg-white rounded-2xl shadow-lg p-6 space-y-4">
//       <h2 className="text-2xl font-bold">Request Fuel</h2>

//        <div className="space-y-4">
//       <h3 className="text-lg font-semibold">Select Your Location</h3>

//       <MapSelector onLocationSelect={setSelectedLocation} />

//       {selectedLocation && (
//         <p className="text-sm text-gray-600">
//           GPS Coordinates: {selectedLocation[0].toFixed(5)}, {selectedLocation[1].toFixed(5)}
//         </p>
//       )}
//     </div>

//       <div className="space-y-2">
//         <Label htmlFor="name">Name</Label>
//         <Input id="name" placeholder="Full Name" />
//       </div>

//       <div className="grid grid-cols-2 gap-4">
//         <div className="space-y-2">
//           <Label htmlFor="phone">Phone Number</Label>
//           <Input id="phone" placeholder="+212 6 00 00 00 00" />
//         </div>
//         <div className="space-y-2">
//           <Label htmlFor="matricule">Car Matricule</Label>
//           <Input id="matricule" placeholder="1234-ABC" />
//         </div>
//       </div>

//       <div className="grid grid-cols-2 gap-4">
//         <div className="space-y-2">
//           <Label htmlFor="fuelType">Fuel Type</Label>
//           <Select>
//             <SelectTrigger>
//               <SelectValue placeholder="Select fuel type" />
//             </SelectTrigger>
//             <SelectContent>
//               <SelectItem value="diesel">Diesel</SelectItem>
//               <SelectItem value="petrol">Petrol</SelectItem>
//               <SelectItem value="electric">Electric</SelectItem>
//             </SelectContent>
//           </Select>
//         </div>
//         <div className="space-y-2">
//           <Label htmlFor="amount">Amount</Label>
//           <Input id="amount" placeholder="e.g. 20L" />
//         </div>
//       </div>

//       <div className="space-y-2">
//         <Label htmlFor="time">Time</Label>
//         <Input id="time" type="time" />
//       </div>

//       <div className="space-y-2">
//         <Label htmlFor="notes">Help / Notes</Label>
//         <Textarea id="notes" placeholder="What you need or additional instructions" />
//       </div>

//       <Button className="w-full">Request</Button>
//     </div>
//   )
// }













import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import MapSelector from "./MapSelector";
import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";

export default function FuelRequest() {
  const [selectedLocation, setSelectedLocation] = useState<[number, number] | null>(null);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    matricule: "",
    fuelType: "",
    amount: "",
    time: "",
    notes: "",
  });

  const handleSubmit = async () => {
    if (!selectedLocation) {
      toast.error("Please select your location on the map.");
      return;
    }

    const payload = {
      ...form,
      latitude: selectedLocation[0],
      longitude: selectedLocation[1],
    };

    try {
      const token = localStorage.getItem("token");
      await axios.post("http://localhost:5000/api/requests", payload, {
        headers: { Authorization: `Bearer ${token}` },
      });
      toast.success("Fuel request submitted!");
      setForm({
        name: "",
        phone: "",
        matricule: "",
        fuelType: "",
        amount: "",
        time: "",
        notes: "",
      });
      setSelectedLocation(null);
    } catch (err: any) {
      toast.error(err.response?.data?.message || "Request failed.");
    }
  };

  return (
    <div className="max-w-xll  mx-auto bg-white rounded-2xl shadow-lg p-6 space-y-4">
      <h2 className="text-2xl font-bold">Request Fuel</h2>

      {/* Map */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Select Your Location</h3>
        <MapSelector onLocationSelect={setSelectedLocation} />
        {selectedLocation && (
          <p className="text-sm text-gray-600">
            GPS Coordinates: {selectedLocation[0].toFixed(5)}, {selectedLocation[1].toFixed(5)}
          </p>
        )}
      </div>

      {/* Name */}
      <div className="space-y-2">
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          placeholder="Full Name"
        />
      </div>

      {/* Phone + Matricule */}
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number</Label>
          <Input
            id="phone"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            placeholder="+212 6 00 00 00 00"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="matricule">Car Matricule</Label>
          <Input
            id="matricule"
            value={form.matricule}
            onChange={(e) => setForm({ ...form, matricule: e.target.value })}
            placeholder="1234-ABC"
          />
        </div>
      </div>

      {/* Fuel Type + Amount */}
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="fuelType">Fuel Type</Label>
          <Select onValueChange={(value) => setForm({ ...form, fuelType: value })}>
            <SelectTrigger>
              <SelectValue placeholder={form.fuelType || "Select fuel type"} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="diesel">Diesel</SelectItem>
              <SelectItem value="petrol">Petrol</SelectItem>
              <SelectItem value="electric">Electric</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="amount">Amount</Label>
          <Input
            id="amount"
            value={form.amount}
            onChange={(e) => setForm({ ...form, amount: e.target.value })}
            placeholder="e.g. 20L"
          />
        </div>
      </div>

      {/* Time */}
      <div className="space-y-2">
        <Label htmlFor="time">Time</Label>
        <Input
          id="time"
          type="time"
          value={form.time}
          onChange={(e) => setForm({ ...form, time: e.target.value })}
        />
      </div>

      {/* Notes */}
      <div className="space-y-2">
        <Label htmlFor="notes">Help / Notes</Label>
        <Textarea
          id="notes"
          value={form.notes}
          onChange={(e) => setForm({ ...form, notes: e.target.value })}
          placeholder="What you need or additional instructions"
        />
      </div>

      {/* Submit */}
      <Button className="w-full" onClick={handleSubmit}>
        Request
      </Button>
    </div>
  );
}
