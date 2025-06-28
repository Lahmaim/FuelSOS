import React, { useContext } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import FuelRequest from "./FuelRequest"; // Ensure path is correct!

const requests = [
  { id: "R001", provider: "Robert White", status: "Pending", date: "04/12-02D" },
  { id: "R002", provider: "Sarah Lee", status: "In Progress", date: "04/11-02D" },
  { id: "R003", provider: "Emily Davis", status: "Completed", date: "04/10-02D" },
  { id: "R004", provider: "Michael Brown", status: "Pending", date: "04/09-02D" },
  { id: "R005", provider: "John Doe", status: "Completed", date: "04/09-02D" },
];

const getStatusStyle = (status: string) => {
  switch (status) {
    case "Pending":
      return "bg-gray-200 text-gray-700";
    case "In Progress":
      return "bg-yellow-100 text-yellow-800";
    case "Completed":
      return "bg-green-100 text-green-800";
    default:
      return "";
  }
};

export default function ClientDashboard() {
  const navigate = useNavigate();
  const { user, setUser } = useContext(AuthContext);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUser(null);
    navigate("/login");
  };

  if (!user) {
    return (
      <div className="flex min-h-screen items-center justify-center text-xl font-semibold">
        Unauthorized. Please log in.
      </div>
    );
  }

  if (user.role !== "client") {
    return (
      <div className="flex min-h-screen items-center justify-center text-xl font-semibold">
        You are a {user.role}. This dashboard is for clients only.
      </div>
    );
  }

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r p-4 flex flex-col justify-between">
        <div>
          <h2 className="text-xl font-bold mb-6">FuelSOS</h2>
          <ul className="space-y-4">
            <li className="font-semibold text-black">🏠 Dashboard</li>
            <button onClick={() => navigate("/profile")} className="text-gray-600">
              👤 Profile
            </button>
            <button onClick={() => navigate("/settings")} className="text-gray-600">
              ⚙️ Settings
            </button>
          </ul>
        </div>

        <div>
          <Button
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold mb-4"
            onClick={() => navigate("/request-fuel")}
          >
            Request Fuel
          </Button>
          <Button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 text-white font-bold"
          >
            Logout
          </Button>
        </div>
      </aside>

      {/* Main Dashboard */}
      <main className="flex-1 p-8 bg-gray-50 overflow-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <div className="flex items-center space-x-2">
            <span className="font-semibold">{user.name ?? "User"}</span>
            <div className="w-8 h-8 rounded-full bg-gray-300" />
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-4 gap-4 mb-6">
          <Card>
            <CardContent className="p-4">
              <p className="text-sm text-gray-500">Active Requests</p>
              <p className="text-xl font-bold">3</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <p className="text-sm text-gray-500">Pending Requests</p>
              <p className="text-xl font-bold">1</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <p className="text-sm text-gray-500">Completed Deliveries</p>
              <p className="text-xl font-bold">12</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <p className="text-sm text-gray-500">Total Spent</p>
              <p className="text-xl font-bold">$750</p>
            </CardContent>
          </Card>
        </div>

        {/* Fuel Request Component inserted here */}
        <FuelRequest />

        {/* Requests Table */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden mt-6">
          <table className="min-w-full text-sm">
            <thead className="bg-gray-100 text-gray-600 uppercase text-xs">
              <tr>
                <th className="text-left px-6 py-3">Request ID</th>
                <th className="text-left px-6 py-3">Provider Name</th>
                <th className="text-left px-6 py-3">Status</th>
                <th className="text-left px-6 py-3">Date</th>
              </tr>
            </thead>
            <tbody>
              {requests.map((req, i) => (
                <tr key={i} className="border-t">
                  <td className="px-6 py-4">{req.id}</td>
                  <td className="px-6 py-4">{req.provider}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-semibold ${getStatusStyle(
                        req.status
                      )}`}
                    >
                      {req.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">{req.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
