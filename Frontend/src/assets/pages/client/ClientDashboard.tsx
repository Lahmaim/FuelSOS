// import { useContext } from "react";
// import { Card, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { useNavigate } from "react-router-dom";
// import { AuthContext } from "../../context/AuthContext";
// import FuelRequest from "./FuelRequest"; // Ensure path is correct!


// const requests = [
//   { id: "R001", provider: "Robert White", status: "Pending", date: "04/12-02D" },
//   { id: "R002", provider: "Sarah Lee", status: "In Progress", date: "04/11-02D" },
//   { id: "R003", provider: "Emily Davis", status: "Completed", date: "04/10-02D" },
//   { id: "R004", provider: "Michael Brown", status: "Pending", date: "04/09-02D" },
//   { id: "R005", provider: "John Doe", status: "Completed", date: "04/09-02D" },
// ];

// const getStatusStyle = (status: string) => {
//   switch (status) {
//     case "Pending":
//       return "bg-gray-200 text-gray-700";
//     case "In Progress":
//       return "bg-yellow-100 text-yellow-800";
//     case "Completed":
//       return "bg-green-100 text-green-800";
//     default:
//       return "";
//   }
// };

// export default function ClientDashboard() {
//   const navigate = useNavigate();
//   const { user, setUser } = useContext(AuthContext);

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     setUser(null);
//     navigate("/login");
//   };

//   if (!user) {
//     return (
//       <div className="flex min-h-screen items-center justify-center text-xl font-semibold">
//         Unauthorized. Please log in.
//       </div>
//     );
//   }

//   if (user.role !== "client") {
//     return (
//       <div className="flex min-h-screen items-center justify-center text-xl font-semibold">
//         You are a {user.role}. This dashboard is for clients only.
//       </div>
//     );
//   }

//   return (
//     <div className="flex min-h-screen">
//       {/* Sidebar */}
//       <aside className="w-64 bg-white border-r p-4 flex flex-col justify-between">
//         <div>
//           <h2 className="text-xl font-bold mb-6">FuelSOS</h2>
//           <ul className="space-y-4">
//             <li className="font-semibold text-black">🏠 Dashboard</li>
//             <button onClick={() => navigate("/profile")} className="text-gray-600">
//               👤 Profile
//             </button>
//             <button onClick={() => navigate("/settings")} className="text-gray-600">
//               ⚙️ Settings
//             </button>
//           </ul>
//         </div>

//         <div>
//           <Button
//             className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold mb-4"
//             onClick={() => navigate("/request-fuel")}
//           >
//             Request Fuel
//           </Button>
//           <Button
//             onClick={handleLogout}
//             className="bg-red-500 hover:bg-red-600 text-white font-bold"
//           >
//             Logout
//           </Button>
//         </div>
//       </aside>

//       {/* Main Dashboard */}
//       <main className="flex-1 p-8 bg-gray-50 overflow-auto">
//         {/* Header */}
//         <div className="flex justify-between items-center mb-6">
//           <h1 className="text-2xl font-bold">Dashboard</h1>
//           <div className="flex items-center space-x-2">
//             <span className="font-semibold">{user.name ?? "User"}</span>
//             <div className="w-8 h-8 rounded-full bg-gray-300" />
//           </div>
//         </div>

//         {/* Stats */}
//         <div className="grid grid-cols-4 gap-4 mb-6">
//           <Card>
//             <CardContent className="p-4">
//               <p className="text-sm text-gray-500">Active Requests</p>
//               <p className="text-xl font-bold">3</p>
//             </CardContent>
//           </Card>
//           <Card>
//             <CardContent className="p-4">
//               <p className="text-sm text-gray-500">Pending Requests</p>
//               <p className="text-xl font-bold">1</p>
//             </CardContent>
//           </Card>
//           <Card>
//             <CardContent className="p-4">
//               <p className="text-sm text-gray-500">Completed Deliveries</p>
//               <p className="text-xl font-bold">12</p>
//             </CardContent>
//           </Card>
//           <Card>
//             <CardContent className="p-4">
//               <p className="text-sm text-gray-500">Total Spent</p>
//               <p className="text-xl font-bold">$750</p>
//             </CardContent>
//           </Card>
//         </div>

//         {/* Fuel Request Component inserted here */}
//         <FuelRequest />

//         {/* Requests Table */}
//         <div className="bg-white rounded-lg shadow-sm overflow-hidden mt-6">
//           <table className="min-w-full text-sm">
//             <thead className="bg-gray-100 text-gray-600 uppercase text-xs">
//               <tr>
//                 <th className="text-left px-6 py-3">Request ID</th>
//                 <th className="text-left px-6 py-3">Provider Name</th>
//                 <th className="text-left px-6 py-3">Status</th>
//                 <th className="text-left px-6 py-3">Date</th>
//               </tr>
//             </thead>
//             <tbody>
//               {requests.map((req, i) => (
//                 <tr key={i} className="border-t">
//                   <td className="px-6 py-4">{req.id}</td>
//                   <td className="px-6 py-4">{req.provider}</td>
//                   <td className="px-6 py-4">
//                     <span
//                       className={`px-2 py-1 rounded-full text-xs font-semibold ${getStatusStyle(
//                         req.status
//                       )}`}
//                     >
//                       {req.status}
//                     </span>
//                   </td>
//                   <td className="px-6 py-4">{req.date}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </main>
//     </div>
//   );
// }





























// import { useContext, useState } from "react";
// import { Card, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { useNavigate } from "react-router-dom";
// import { AuthContext } from "../../context/AuthContext";
// import FuelRequest from "./FuelRequest"; // ✅ Ensure this path is correct

// const requests = [
//   { id: "R001", provider: "Robert White", status: "Pending", date: "04/12-02D" },
//   { id: "R002", provider: "Sarah Lee", status: "In Progress", date: "04/11-02D" },
//   { id: "R003", provider: "Emily Davis", status: "Completed", date: "04/10-02D" },
//   { id: "R004", provider: "Michael Brown", status: "Pending", date: "04/09-02D" },
//   { id: "R005", provider: "John Doe", status: "Completed", date: "04/09-02D" },
// ];

// const getStatusStyle = (status: string) => {
//   switch (status) {
//     case "Pending":
//       return "bg-gray-200 text-gray-700";
//     case "In Progress":
//       return "bg-yellow-100 text-yellow-800";
//     case "Completed":
//       return "bg-green-100 text-green-800";
//     default:
//       return "";
//   }
// };

// export default function ClientDashboard() {
//   const navigate = useNavigate();
//   const { user, setUser,userInfo } = useContext(AuthContext);
//   const [showRequestForm, setShowRequestForm] = useState(false); // ✅ Add toggle state

  

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     setUser(null);
//     navigate("/login");
//   };

//   if (!user) {
//     return (
//       <div className="flex min-h-screen items-center justify-center text-xl font-semibold">
//         Unauthorized. Please log in.
//       </div>
//     );
//   }

//   if (user.role !== "client") {
//     return (
//       <div className="flex min-h-screen items-center justify-center text-xl font-semibold">
//         You are a {user.role}. This dashboard is for clients only.
//       </div>
//     );
//   }

// localStorage.getItem('providerProfile')

//   return (
//     <div className="flex min-h-screen">
//       {/* Sidebar */}
//       <aside className="w-64 bg-white border-r p-4 flex flex-col justify-between">
//         <div>
//           <h2 className="text-xl font-bold mb-6">FuelSOS</h2>
//           <ul className="space-y-4">
//             <li className="font-semibold text-black">🏠 Dashboard</li>
//             <button onClick={() => navigate("/profile")} className="text-gray-600">
//               👤 Profile
//             </button>
//             <button onClick={() => navigate("/settings")} className="text-gray-600">
//               ⚙️ Settings
//             </button>
//           </ul>
//         </div>

//         <div>
//           <Button
//             className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold mb-4 w-full"
//             onClick={() => setShowRequestForm(!showRequestForm)}
//           >
//             {showRequestForm ? "Close Request" : "Request Fuel"}
//           </Button>
//           <Button
//             onClick={handleLogout}
//             className="bg-red-500 hover:bg-red-600 text-white font-bold w-full"
//           >
//             Logout
//           </Button>
//         </div>
//       </aside>

//       {/* Main Dashboard */}
//       <main className="flex-1 p-8 bg-gray-50 overflow-auto">
//         {/* Header */}
//         <div className="flex justify-between items-center mb-6">
//           <h1 className="text-2xl font-bold">Dashboard</h1>
//           <div className="flex items-center space-x-2">
//             <span className="font-semibold">{userInfo.name ?? "User"}</span>
//             <div className="w-8 h-8 rounded-full bg-gray-300" />
//           </div>
//         </div>

//         {/* Stats */}
//         <div className="grid grid-cols-4 gap-4 mb-6">
//           <Card>
//             <CardContent className="p-4">
//               <p className="text-sm text-gray-500">Active Requests</p>
//               <p className="text-xl font-bold">3</p>
//             </CardContent>
//           </Card>
//           <Card>
//             <CardContent className="p-4">
//               <p className="text-sm text-gray-500">Pending Requests</p>
//               <p className="text-xl font-bold">1</p>
//             </CardContent>
//           </Card>
//           <Card>
//             <CardContent className="p-4">
//               <p className="text-sm text-gray-500">Completed Deliveries</p>
//               <p className="text-xl font-bold">12</p>
//             </CardContent>
//           </Card>
//           <Card>
//             <CardContent className="p-4">
//               <p className="text-sm text-gray-500">Total Spent</p>
//               <p className="text-xl font-bold">$750</p>
//             </CardContent>
//           </Card>
//         </div>

//         {/* Conditionally show Fuel Request Form */}
//         {showRequestForm && (
//           <div className="mb-6">
//             <FuelRequest />
//           </div>
//         )}

//         {/* Requests Table */}
//         <div className="bg-white rounded-lg shadow-sm overflow-hidden mt-6">
//           <table className="min-w-full text-sm">
//             <thead className="bg-gray-100 text-gray-600 uppercase text-xs">
//               <tr>
//                 <th className="text-left px-6 py-3">Request ID</th>
//                 <th className="text-left px-6 py-3">Provider Name</th>
//                 <th className="text-left px-6 py-3">Status</th>
//                 <th className="text-left px-6 py-3">Date</th>
//               </tr>
//             </thead>
//             <tbody>
//               {requests.map((req, i) => (
//                 <tr key={i} className="border-t">
//                   <td className="px-6 py-4">{req.id}</td>
//                   <td className="px-6 py-4">{req.provider}</td>
//                   <td className="px-6 py-4">
//                     <span
//                       className={`px-2 py-1 rounded-full text-xs font-semibold ${getStatusStyle(
//                         req.status
//                       )}`}
//                     >
//                       {req.status}
//                     </span>
//                   </td>
//                   <td className="px-6 py-4">{req.date}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </main>
//     </div>
//   );
// }










// import SidebarClient from "../../components/ClientSidebar";
// import { Routes, Route, Outlet } from "react-router-dom";

// // import FuelRequest from "../client/FuelRequest";
// // import DashboardHome from "../client/D"; // optional
// // import ProfilePage from "../ProfilePage";
// import ProfileHeader from "@/assets/components/ProfileHeader";

// export default function ClientDashboard() {
//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     window.location.href = "/login";
//   };

//   return (
//    <div className="flex h-screen overflow-hidden">
//       <SidebarClient onLogout={handleLogout} />
//       <main className="flex-1 p-3 bg-gray-50 overflow-y-auto">
//          <div className="w-full mx-auto bg-gray-50 p-2 rounded-2xl shadow  mb-6">
//       <ProfileHeader name={'jj'} role={'ihio'} imageUrl={'kjj'} />
      
      
//     </div>
//         <Outlet />
//       </main>
//     </div>
//   );
// }





// import SidebarClient from "../../components/ClientSidebar";
// import { Outlet } from "react-router-dom";
// import ProfileHeader from "@/assets/components/ProfileHeader";
// import RequestHistory from "../../components/RequestHistory"; // ✅ import here

// export default function ClientDashboard() {
//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     window.location.href = "/login";
//   };

//   return (
//     <div className="flex h-screen overflow-hidden">
//       <SidebarClient onLogout={handleLogout} />
//       <main className="flex-1 p-3 bg-gray-50 overflow-y-auto">
//         <div className="w-full mx-auto bg-gray-50 p-2 rounded-2xl shadow mb-6">
//           <ProfileHeader name={"jj"} role={"ihio"} imageUrl={"kjj"} />
//         </div>

//         {/* ✅ Add request history below header */}
//         <RequestHistory />

//         {/* Existing nested routes if any */}
//         <Outlet />
//       </main>
//     </div>
//   );
// }


// import SidebarClient from "../../components/ClientSidebar";
// import { Outlet, useLocation } from "react-router-dom";
// import ProfileHeader from "@/assets/components/ProfileHeader";
// import RequestHistory from "../../components/RequestHistory";

// export default function ClientDashboard() {
//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     window.location.href = "/login";
//   };

//   const location = useLocation();
//   const isHistoryPage = location.pathname === "/client/history";

//   return (
//     <div className="flex h-screen overflow-hidden">
//       <SidebarClient onLogout={handleLogout} />
//       <main className="flex-1 p-3 bg-gray-50 overflow-y-auto">
//         <div className="w-full mx-auto bg-gray-50 p-2 rounded-2xl shadow mb-6">
//           <ProfileHeader name={""} role={""} imageUrl={""} />
//         </div>

//         {/* ✅ Show Request History only on /client/history */}
//         {isHistoryPage && <RequestHistory />}

//         <Outlet />
//       </main>
//     </div>
//   );
// }



import SidebarClient from "../../components/ClientSidebar";
import { Outlet, useLocation } from "react-router-dom";
import ProfileHeader from "@/assets/components/ProfileHeader";
import RequestHistory from "../../components/RequestHistory";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";

export default function ClientDashboard() {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  const location = useLocation();
  const isHistoryPage = location.pathname === "/client/history";
  const isHomePage = location.pathname === "/client"; // Adjust as needed

  const user = {
    name: "John",
    avatar: "/avatar.jpg",
    balance: 300.0,
    totalRequests: 6,
    activeRequests: 4,
  };

  const requests = [
    { id: "R201", status: "Accepted", provider: "Provider A", date: "04/23/24", complete: "04/23/24" },
    { id: "R200", status: "Pending", provider: "Provider B", date: "04/21/24", complete: "04/21/24" },
    { id: "R199", status: "Completed", provider: "Provider C", date: "04/10/24", complete: "04/19/24" },
    { id: "R188", status: "Completed", provider: "Provider D", date: "04/16/24", complete: "04/16/24" },
  ];

  const statusColor = {
    Accepted: "bg-yellow-100 text-yellow-800",
    Pending: "bg-gray-200 text-gray-800",
    Completed: "bg-green-100 text-green-800",
  };

  return (
    <div className="flex h-screen overflow-hidden">
      <SidebarClient onLogout={handleLogout} />

      <main className="flex-1 p-3 bg-gray-50 overflow-y-auto">
        <div className="w-full mx-auto bg-gray-50 p-2 rounded-2xl shadow mb-6">
          <ProfileHeader name={user.name} role="Client" imageUrl={user.avatar} />
        </div>

        {isHistoryPage && <RequestHistory />}

        {isHomePage && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <Card>
                <CardContent className="p-4">
                  <p className="text-muted-foreground text-sm mb-1">Total Requests</p>
                  <h2 className="text-2xl font-semibold">${user.balance.toFixed(2)}</h2>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4">
                  <p className="text-muted-foreground text-sm mb-1">Active Requests</p>
                  <h2 className="text-2xl font-semibold">{user.totalRequests}</h2>
                </CardContent>
              </Card>
            </div>

            <Card className="mb-6">
              <CardContent className="p-4">
                <h2 className="text-xl font-semibold mb-4">Requests</h2>
                <div className="grid grid-cols-5 text-sm font-medium text-gray-600 border-b pb-2">
                  <div>Status</div>
                  <div>Provider</div>
                  <div>Date</div>
                  <div>Complete</div>
                  <div>ID</div>
                </div>
                {requests.map((req) => (
                  <div key={req.id} className="grid grid-cols-5 py-2 border-b text-sm items-center">
                    <Badge className={`${statusColor[req.status]} rounded px-2 py-1 w-fit`}>
                      {req.status}
                    </Badge>
                    <div>{req.provider}</div>
                    <div>{req.date}</div>
                    <div>{req.complete}</div>
                    <div>{req.id}</div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Button variant="destructive" className="flex items-center gap-2" onClick={handleLogout}>
              <LogOut className="w-4 h-4" />
              Logout
            </Button>
          </>
        )}

        <Outlet />
      </main>
    </div>
  );
}
