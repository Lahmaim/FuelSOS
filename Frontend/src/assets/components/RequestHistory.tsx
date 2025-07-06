import  { useEffect, useState } from "react";
import axios from "axios";
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select";

interface Request {
  id: string;
  fuelType: string;
  status: string;
  location: string;
  date: string;
  total: string;
}

const statusColor = {
  Delivered: "text-green-600",
  Pending: "text-orange-500",
  Cancelled: "text-red-600",
};

export default function RequestHistory() {
  const [requests, setRequests] = useState<Request[]>([]);
  const [statusFilter, setStatusFilter] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("/api/requests"); // ✅ Adjust endpoint
        setRequests(res.data);
      } catch (err) {
        console.error("Failed to fetch request history", err);
      }
    };

    fetchData();
  }, []);

//   const filteredRequests = statusFilter
//     ? requests.filter((r) => r.status === statusFilter)
//     : requests;
const filteredRequests = Array.isArray(requests)
  ? statusFilter === "all"
    ? requests
    : requests.filter((r) => r.status === statusFilter)
  : [];
  return (
    <div className="max-w-5xl mx-auto mt-10 rounded-xl border border-gray-200 shadow-sm overflow-hidden">
      <div className="bg-white px-6 py-4 border-b flex justify-between items-center">
        <h2 className="text-xl font-semibold">Request History</h2>
        <Select onValueChange={setStatusFilter}>
          <SelectTrigger className="w-[150px]">
            <SelectValue placeholder="Filter Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All</SelectItem>
            <SelectItem value="Delivered">Delivered</SelectItem>
            <SelectItem value="Pending">Pending</SelectItem>
            <SelectItem value="Cancelled">Cancelled</SelectItem>
          </SelectContent>
        </Select>
        

      </div>

      <table className="min-w-full divide-y divide-gray-200 text-sm text-left bg-white">
        <thead className="bg-gray-50 text-gray-600 font-medium">
          <tr>
            <th className="px-6 py-3">Request ID</th>
            <th className="px-6 py-3">Fuel Type</th>
            <th className="px-6 py-3">Status</th>
            <th className="px-6 py-3">Location</th>
            <th className="px-6 py-3">Date</th>
            <th className="px-6 py-3">Total</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {filteredRequests.map((req, index) => (
            <tr key={index}>
              <td className="px-6 py-3">{req.id}</td>
              <td className="px-6 py-3">{req.fuelType}</td>
              <td className="px-6 py-3">
                <span className={statusColor[req.status as keyof typeof statusColor]}>
                  {req.status || "-"}
                </span>
              </td>
              <td className="px-6 py-3">{req.location}</td>
              <td className="px-6 py-3">{req.date}</td>
              <td className="px-6 py-3">{req.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
