import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import {  useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
// import { MessageCircle } from "lucide-react";

export default function ArtisanDashboard() {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [statusFilter, setStatusFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("desc");
  const [currentPage, setCurrentPage] = useState(1);
  const requestsPerPage = 10;


  useEffect(() => {

    const fetchRequests = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/api/request`
        );
        setRequests(res.data);
        console.log(res.data
        );
        
      } catch (err) {
        console.error("Error fetching requests", err);
      } finally {
        setLoading(false);
      }
    };

    fetchRequests();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(searchTerm);
      setCurrentPage(1);
    }, 300);
    return () => clearTimeout(timer);
  }, [searchTerm]);

  // const handleUpdateStatus = async (id, status) => {
  //   try {
  //     await axios.put(`http://localhost:5000/api/request/${id}`, {
  //       status,
  //     }, {headers: {
  //         Authorization: `Bearer ${localStorage.getItem("token")}`
  //       }});
  //     setRequests((prev) =>
  //       prev.map((r) => (r._id === id ? { ...r, status } : r))
  //     );
  //   } catch (err) {
  //     console.error("Failed to update request status", err);
  //   }
  // };

const handleUpdateStatus = async (id, status) => {
  try {
    await axios.put(
      `http://localhost:5000/api/request/${id}`,
      { status },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );

    setRequests((prev) =>
      prev.map((r) => (r._id === id ? { ...r, status } : r))
    );

    toast.success(`Status updated to ${status}`);
  } catch (err) {
    console.error("Failed to update request status", err);
    toast.error("Failed to update status");
  }
};


  const getStatusColor = (status) => {
    const base = "px-3 py-1 rounded-full text-xs font-semibold";
    switch (status) {
      case "pending":
        return `${base} bg-yellow-100 text-yellow-600`;
      case "approved":
        return `${base} bg-blue-100 text-blue-600`;
      case "completed":
        return `${base} bg-green-100 text-green-600`;
      case "rejected":
        return `${base} bg-red-100 text-red-600`;
      default:
        return `${base} bg-gray-200 text-gray-700`;
    }
  };

  const sortRequests = (arr) =>
    [...arr].sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return sortOrder === "desc" ? dateB - dateA : dateA - dateB;
    });

  const filteredRequests = sortRequests(
    requests
      .filter((r) =>
        statusFilter === "All" ? true : r.status === statusFilter
      )
      .filter((r) =>
        r.client?.name
          ?.toLowerCase()
          .includes(debouncedSearch.toLowerCase())
      )
  );

  // Pagination logic
  const indexOfLast = currentPage * requestsPerPage;
  const indexOfFirst = indexOfLast - requestsPerPage;
  const currentRequests = filteredRequests.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(filteredRequests.length / requestsPerPage);

  const toggleSort = () => {
    setSortOrder((prev) => (prev === "desc" ? "asc" : "desc"));
  };

  return (
    <div className="p-6">
      <h2 className="text-3xl font-semibold mb-6 text-gray-800">
        Incoming Requests
      </h2>

      {/* Filters */}
      <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div className="flex items-center gap-3">
          <select
            className="bg-white border border-gray-300 rounded-md px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option value="All">All</option>
            <option value="pending">Pending</option>
            <option value="approved">Approved</option>
            <option value="completed">Completed</option>
            <option value="rejected">Rejected</option>
          </select>

          <input
            type="text"
            placeholder="Search by client name..."
            className="w-60 border border-gray-300 rounded-md px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Table */}
      {/* {loading ? (
        <p className="text-gray-500">Loading requests...</p>
      ) : currentRequests.length === 0 ? (
        <p className="text-gray-500">No requests found.</p>
      ) : ( */}
        <div className="overflow-x-auto rounded-lg shadow-sm bg-white border">
          <table className="min-w-full divide-y divide-gray-200 text-sm">
            <thead className="bg-gray-50 text-gray-600 uppercase text-xs font-semibold">
              <tr>
                <th className="px-6 py-3 text-left">Client</th>
                <th className="px-6 py-3 text-left">Nameprovidr</th>
                <th className="px-6 py-3 text-left">Status</th>
                <th className="px-6 py-3 text-left">Imatricule</th>
                <th className="px-6 py-3 text-left">Fuel Type</th>
                <th className="px-6 py-3 text-left">phone</th>
                <th className="px-6 py-3 text-left">location</th>

                <th className="px-6 py-3 text-left">Actions</th>
                <th className="px-6 py-3 text-left">Note</th>
                <th
                  onClick={toggleSort}
                  className="px-6 py-3 text-left cursor-pointer hover:underline"
                >
                  Date {sortOrder === "asc" ? "↑" : "↓"}
                </th>
               
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {requests.map((req) => (
                <tr key={req._id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 flex items-center gap-3">
                    {req.client?.avatar ? (
                      <img
                        src={`http://localhost:5000${req.client.avatar}`}
                        alt="avatar"
                        className="w-8 h-8 rounded-full"
                      />
                    ) : (
                      <div className="w-8 h-8 flex items-center justify-center rounded-full bg-muted text-white text-sm font-bold uppercase">
                        {req.client?.name?.charAt(0)}
                      </div>
                    )}
                    <span className="text-gray-800 font-medium">
                      {req.client?.name}
                    </span>
                  </td>
                    {/* <td className="px-6 py-4">
                    <span className={getStatusColor(req.provider)}>
                      {req.provider}
                    </span>
                  </td> */}
                  <td className="px-6 py-4 text-gray-800">{req.provider || "N/A"}</td>

                  <td className="px-6 py-4">
                    <span className={getStatusColor(req.status)}>
                      {req.status}
                    </span>
                  </td>
                  {/* <td className="px-6 py-4">
                    <span className={getStatusColor(req.imatricule)}>
                      {req.imatricule}
                    </span>
                  </td> */}
                  <td className="px-6 py-4 text-gray-800">{req.imatricule || "N/A"}</td>
                  <td className="px-6 py-4">
                    <span className={getStatusColor(req.fuelType)}>
                      {req.fuelType}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    
                      {req.phone}
                 
                  </td>
                   {/* <td className="px-6 py-4">
                      {req.note}
                  </td> */}
                  <td className="px-6 py-4">
  {req.location?.lat && req.location?.lng ? (
    <a
      href={`https://www.google.com/maps?q=${req.location.lat},${req.location.lng}`}
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-600 hover:underline text-sm"
    >
      View Location
    </a>
  ) : (
    <span className="text-gray-500 text-sm">N/A</span>
  )}
</td>

                 {/* <td className="px-6 py-4">
                   {req.status === "Pending" && (
                     <div className="flex gap-2">
                       <button
                         className="px-3 py-1 bg-emerald-500 hover:bg-emerald-600 text-white rounded-md text-xs"
                         onClick={() => handleUpdateStatus(req._id, "approved")}
                       >
                         Accept
                       </button>
                       <button
                         className="px-3 py-1 bg-red-500 hover:bg-red-600 text-white rounded-md text-xs"
                         onClick={() => handleUpdateStatus(req._id, "rejected")}
                       >
                         Reject
                       </button>
                     </div>
                   )}
                   {req.status === "approved" && (
                     <button
                       className="px-3 py-1 bg-blue-500 hover:bg-blue-600 text-white rounded-md text-xs"
                       onClick={() => handleUpdateStatus(req._id, "completed")}
                     >
                       Complete
                     </button>
                   )}
                 </td> */}
                 <td className="px-6 py-4">
  {req.status === "pending" && (
    <div className="flex gap-2">
      <button
        className="px-3 py-1 bg-emerald-500 hover:bg-emerald-600 text-white rounded-md text-xs"
        onClick={() => handleUpdateStatus(req._id, "approved")}
      >
        Accept
      </button>
      <button
        className="px-3 py-1 bg-red-500 hover:bg-red-600 text-white rounded-md text-xs"
        onClick={() => handleUpdateStatus(req._id, "rejected")}
      >
        Reject
      </button>
    </div>
  )}

  {req.status === "approved" && (
    <button
      className="px-3 py-1 bg-blue-500 hover:bg-blue-600 text-white rounded-md text-xs"
      onClick={() => handleUpdateStatus(req._id, "completed")}
    >
      Complete
    </button>
  )}
</td>

                 <td className="px-6 py-4">
                   <Popover>
                     <PopoverTrigger asChild>
                       <button className="text-gray-800 hover:text-orange-800 text-sm underline">
                         View Note
                       </button>
                     </PopoverTrigger>
                     <PopoverContent className="max-w-xs p-4">
                       <p className="text-sm text-gray-700">
                         {req.note || "No note provided."}
                       </p>
                     </PopoverContent>
                   </Popover>
                 </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {/* <div>{new Date(req.date).toLocaleDateString()}</div> */}
                    <div>{new Date(req.time).toLocaleDateString()}</div>
                    <div className="text-xs text-gray-500">{new Date(req.time).toLocaleTimeString()}</div>
                  </td>

                 {/* add boton for see localition  */}

                    {/* <td className="px-6 py-4">
                    <span className={getStatusColor(req.location)}>
                      {req.location}
                      </span>
                  </td> */}
                 
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      {/* )} */}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-6 space-x-2">
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-3 py-1 rounded-md text-sm font-medium ${
                currentPage === i + 1
                  ? "bg-primary text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
