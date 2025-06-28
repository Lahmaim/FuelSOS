import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

type Request = {
  id: string;
  fuelType: string;
  quantity: number;
  address: string;
  deliveryTime: string;
  status: "Pending" | "In Progress" | "Completed";
  notes?: string;
};

const initialRequests: Request[] = [
  {
    id: "R001",
    fuelType: "Petrol",
    quantity: 20,
    address: "123 Main St, City",
    deliveryTime: "ASAP",
    status: "Pending",
  },
  {
    id: "R002",
    fuelType: "Diesel",
    quantity: 50,
    address: "456 Oak Rd, City",
    deliveryTime: "2025-07-01 14:00",
    status: "Completed",
  },
];

export default function FuelRequest() {
  const [requests, setRequests] = useState<Request[]>(initialRequests);
  const [modalOpen, setModalOpen] = useState(false);

  // Form state
  const [fuelType, setFuelType] = useState("Petrol");
  const [quantity, setQuantity] = useState(0);
  const [address, setAddress] = useState("");
  const [deliveryTime, setDeliveryTime] = useState("ASAP");
  const [notes, setNotes] = useState("");

  const resetForm = () => {
    setFuelType("Petrol");
    setQuantity(0);
    setAddress("");
    setDeliveryTime("ASAP");
    setNotes("");
  };

  const handleSubmit = () => {
    if (!quantity || !address) {
      alert("Please enter quantity and address");
      return;
    }

    const newRequest: Request = {
      id: `R${(requests.length + 1).toString().padStart(3, "0")}`,
      fuelType,
      quantity,
      address,
      deliveryTime,
      status: "Pending",
      notes,
    };

    setRequests([newRequest, ...requests]);
    resetForm();
    setModalOpen(false);
  };

  const getStatusStyle = (status: string) => {
    switch (status) {
      case "Pending":
        return "bg-yellow-100 text-yellow-800";
      case "In Progress":
        return "bg-blue-100 text-blue-800";
      case "Completed":
        return "bg-green-100 text-green-800";
      default:
        return "";
    }
  };

  return (
    <div>
      {/* Button to open modal */}
      <Button onClick={() => setModalOpen(true)} className="mb-6 bg-yellow-400 hover:bg-yellow-500 text-black font-bold">
        Request Fuel
      </Button>

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg w-full max-w-md p-6">
            <h2 className="text-xl font-bold mb-4">Request Fuel</h2>

            <label className="block mb-2 font-semibold">Fuel Type</label>
            <Select value={fuelType} onValueChange={setFuelType}>
              <SelectTrigger>
                <SelectValue placeholder="Select fuel type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Petrol">Petrol</SelectItem>
                <SelectItem value="Diesel">Diesel</SelectItem>
                <SelectItem value="Gasoline">Gasoline</SelectItem>
              </SelectContent>
            </Select>

            <label className="block mt-4 mb-2 font-semibold">Quantity (liters)</label>
            <Input
              type="number"
              min={1}
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              placeholder="Enter quantity"
            />

            <label className="block mt-4 mb-2 font-semibold">Delivery Address</label>
            <Input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Enter delivery address"
            />

            <label className="block mt-4 mb-2 font-semibold">Delivery Time</label>
            <Select value={deliveryTime} onValueChange={setDeliveryTime}>
              <SelectTrigger>
                <SelectValue placeholder="Select delivery time" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ASAP">ASAP</SelectItem>
                <SelectItem value="Schedule">Schedule a time</SelectItem>
              </SelectContent>
            </Select>

            {deliveryTime === "Schedule" && (
              <Input
                type="datetime-local"
                className="mt-2"
                onChange={(e) => setDeliveryTime(e.target.value)}
              />
            )}

            <label className="block mt-4 mb-2 font-semibold">Special Notes (optional)</label>
            <textarea
              rows={3}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Leave notes for the delivery"
            ></textarea>

            <div className="flex justify-end mt-6 space-x-3">
              <Button variant="outline" onClick={() => setModalOpen(false)}>
                Cancel
              </Button>
              <Button onClick={handleSubmit}>Send Request</Button>
            </div>
          </div>
        </div>
      )}

      {/* Requests List */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg shadow-sm">
          <thead className="bg-gray-100 text-gray-600 uppercase text-xs">
            <tr>
              <th className="px-6 py-3 text-left">Request ID</th>
              <th className="px-6 py-3 text-left">Fuel Type</th>
              <th className="px-6 py-3 text-left">Quantity (L)</th>
              <th className="px-6 py-3 text-left">Address</th>
              <th className="px-6 py-3 text-left">Delivery Time</th>
              <th className="px-6 py-3 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {requests.map((req) => (
              <tr key={req.id} className="border-t hover:bg-gray-50">
                <td className="px-6 py-4">{req.id}</td>
                <td className="px-6 py-4">{req.fuelType}</td>
                <td className="px-6 py-4">{req.quantity}</td>
                <td className="px-6 py-4">{req.address}</td>
                <td className="px-6 py-4">{req.deliveryTime}</td>
                <td className={`px-6 py-2 rounded-full text-xs font-semibold ${getStatusStyle(req.status)}`}>
                  {req.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
