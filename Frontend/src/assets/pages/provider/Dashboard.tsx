// import { useState } from "react";
// import NearbyRequests from "./NearbyRequests";
// import MyDeliveries from "./MyDeliveries";
// import Profile from "./Profile";
// import { Sidebar } from "../../components/ProviderSidebar";
// import { Button } from "@/components/ui/button";

// type Tab = "requests" | "deliveries" | "profile";

// export default function ProviderDashboard() {
//   const [activeTab, setActiveTab] = useState<Tab>("requests");

//   return (
//     <div className="flex h-screen text-white bg-[#121212]">
//       <Sidebar
//         items={[
//           { label: "Nearby Requests", key: "requests" },
//           { label: "My Deliveries", key: "deliveries" },
//           { label: "Profile", key: "profile" },
//         ]}
//         activeTab={activeTab}
//         onTabChange={(key: Tab) => setActiveTab(key)}
//       />

//       <main className="flex-1 p-6 overflow-y-auto">
//         {activeTab === "requests" && <NearbyRequests />}
//         {activeTab === "deliveries" && <MyDeliveries />}
//         {activeTab === "profile" && <Profile />}
//       </main>
//     </div>
//   );
// }



// import { useContext, useState } from "react";
// import NearbyRequests from "./NearbyRequests";
// import MyDeliveries from "./MyDeliveries";
// import Profile from "./Profile";
// import { Sidebar } from "../../components/ProviderSidebar";
// import { Button } from "@/components/ui/button";
// import UserHeader from "../../components/UserHeader"; // 👈 Import
// import { AuthContext } from "@/assets/context/AuthContext";




// type Tab = "requests" | "deliveries" | "profile";

// export default function ProviderDashboard() {
//   const [activeTab, setActiveTab] = useState<Tab>("requests");
//   const { userInfo } = useContext(AuthContext);

//   // Dummy user info (you can replace this with real backend data later)
//   const user = {
//     name: userInfo.name,
//     image: "https://i.pravatar.cc/150?img=32", // Replace with real avatar later
//   };
// console.log(userInfo);

//   return (
//     <div className="flex h-screen text-white bg-[#121212]">
//       <Sidebar
//         items={[
//           { label: "Nearby Requests", key: "requests" },
//           { label: "My Deliveries", key: "deliveries" },
//           { label: "Profile", key: "profile" },
//         ]}
//         activeTab={activeTab}
//         onTabChange={(key: Tab) => setActiveTab(key)}
//       />

//       <main className="flex-1 p-6 overflow-y-auto">
//         {/* 👤 Add the provider header here */}
//         <UserHeader name={userInfo.name} role={userInfo.role} image={user.image} />

//         {/* Page content based on tab */}
//         {activeTab === "requests" && <NearbyRequests />}
//         {activeTab === "deliveries" && <MyDeliveries />}
//         {activeTab === "profile" && <Profile />}
//       </main>
//     </div>
//   );
// }







// import {
//   MapPin,
//   PackageCheck,
//   // UserCircle,
//   Power,
//   Home,
//   Settings,
//   History,
// } from "lucide-react";

// import { Card, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Avatar, AvatarFallback } from "@/components/ui/avatar";
// import { useState } from "react";

// const navItems = [
//   { key: "dashboard", label: "Dashboard", icon: Home },
//   { key: "nearby", label: "Nearby Requests", icon: MapPin },
//   { key: "deliveries", label: "My Deliveries", icon: PackageCheck },
//   { key: "settings", label: "Settings", icon: Settings },
//   { key: "history", label: "History", icon: History },
// ];

// const requests = [
//   {
//     id: "R101",
//     client: "John Smith",
//     status: "Available",
//     distance: "1.2 km",
//     date: "04/01/24",
//   },
//   {
//     id: "R102",
//     client: "Ahmed Benali",
//     status: "Accepted",
//     distance: "2.3 km",
//     date: "04/01/24",
//   },
//   {
//     id: "R103",
//     client: "Maria Gonzales",
//     status: "Completed",
//     distance: "0.8 km",
//     date: "04/10/24",
//   },
//   {
//     id: "R104",
//     client: "Yousset Amrani",
//     status: "Available",
//     distance: "3.1 km",
//     date: "04/11/24",
//   },
// ];

// const getStatusStyle = (status: string) => {
//   switch (status) {
//     case "Available":
//       return "bg-gray-200 text-gray-800";
//     case "Accepted":
//       return "bg-yellow-200 text-yellow-800";
//     case "Completed":
//       return "bg-green-200 text-green-800";
//     default:
//       return "";
//   }
// };

// export default function ProviderDashboard() {
//   const [activeTab, setActiveTab] = useState("dashboard");

//   return (
//     <div className="flex min-h-screen bg-gray-50">
//       {/* Sidebar */}
//       <aside className="w-64 bg-[#f1f1f1] p-6 flex flex-col justify-between">
//         <div>
//           <h1 className="text-3xl font-extrabold text-black mb-8 tracking-wide">
//             FuelSOS
//           </h1>
//           <nav className="flex flex-col gap-2">
//             {navItems.map(({ key, label, icon: Icon }) => (
//               <button
//                 key={key}
//                 onClick={() => setActiveTab(key)}
//                 className={`flex items-center gap-3 px-5 py-3 rounded-md text-sm font-medium transition-colors duration-200
//                   ${
//                     activeTab === key
//                       ? "bg-gray-50 text-black shadow-lg"
//                       : "text-black hover:bg-white/70 hover:text-black-400"
//                   }`}
//               >
//                 <Icon className="w-6 h-6" />
//                 {label}
//               </button>
//             ))}
//           </nav>
//         </div>

//         {/* Footer Buttons */}
//         <div className="space-y-3">
//           {/* <Button
//             className="w-full bg-yellow-400 text-black hover:bg-yellow-500 font-semibold shadow-md"
//             onClick={() => alert("Accept New Request clicked!")}
//           >
//             Accept New Request
//           </Button> */}
//           <Button
//             variant="ghost"
//             className="w-full text-red-600 flex items-center justify-center gap-2 hover:bg-red-600 hover:text-white"
//             onClick={() => alert("Logout clicked!")}
//           >
//             <Power className="w-5 h-5" />
//             Logout
//           </Button>
//         </div>
//       </aside>

//       {/* Main Content */}
//       <main className="flex-1 p-8 bg-white">
//         <div className="flex justify-between items-center mb-6">
//           <h2 className="text-3xl font-bold">Dashboard</h2>
//           <div className="flex items-center gap-3 text-gray-700">
//             <span>Sarah Provider</span>
//             <Avatar>
//               <AvatarFallback>AL</AvatarFallback>
//             </Avatar>
//           </div>
//         </div>

//         {/* Stats */}
//         <div className="grid grid-cols-3 gap-4 mb-6">
//           <Card>
//             <CardContent className="p-4">
//               <p className="text-sm text-gray-600">Available Requests</p>
//               <p className="text-xl font-bold">5</p>
//             </CardContent>
//           </Card>
//           <Card>
//             <CardContent className="p-4">
//               <p className="text-sm text-gray-600">Accepted Requests</p>
//               <p className="text-xl font-bold">2</p>
//             </CardContent>
//           </Card>
//           <Card>
//             <CardContent className="p-4">
//               <p className="text-sm text-gray-600">Completed Deliveries</p>
//               <p className="text-xl font-bold">8</p>
//             </CardContent>
//           </Card>
//         </div>

//         {/* Nearby Requests Table */}
//         <Card>
//           <CardContent className="p-6">
//             <h3 className="text-lg font-semibold mb-4">Nearby Requests</h3>
//             <div className="overflow-auto">
//               <table className="w-full text-sm text-left">
//                 <thead>
//                   <tr className="text-gray-500 border-b">
//                     <th className="py-2">Request ID</th>
//                     <th>Client Name</th>
//                     <th>Status</th>
//                     <th>Distance</th>
//                     <th>Date</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {requests.map((req) => (
//                     <tr
//                       key={req.id}
//                       className="border-b hover:bg-gray-50 transition-colors duration-150"
//                     >
//                       <td className="py-2">{req.id}</td>
//                       <td>{req.client}</td>
//                       <td>
//                         <span
//                           className={`px-2 py-1 rounded text-xs font-medium ${getStatusStyle(
//                             req.status
//                           )}`}
//                         >
//                           {req.status}
//                         </span>
//                       </td>
//                       <td>{req.distance}</td>
//                       <td>{req.date}</td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </CardContent>
//         </Card>
//       </main>
//     </div>
//   );
// }

// import { useNavigate } from "react-router-dom"
// import { useAuth } from "../../context/AuthContext"
// import { Button } from "@/components/ui/button"
// import {
//   Home,
//   MapPin,
//   Clock,
//   History,
//   User,
//   LogOut,
// } from "lucide-react"

// export default function ProviderDashboard() {

  
//   const navigate = useNavigate()
//   const { setUser, userInfo } = useAuth()

//   const handleLogout = () => {
//     localStorage.removeItem("token")
//     setUser(null)
//     navigate("/login")
//   }

//   return (
//     <div className="flex min-h-screen bg-white text-black dark:bg-[#111827] dark:text-white">
//       {/* Sidebar */}
//       <aside className="w-64 p-6 bg-gray-100 dark:bg-[#1f2937] flex flex-col justify-between">
//         <div>
//           {/* Logo */}
//           <h2 className="text-2xl font-bold mb-6 text-red-600">FuelSOS</h2>

//           {/* Navigation */}
//           <nav className="space-y-3">
//             <button
//               onClick={() => navigate("/provider")}
//               className="flex items-center gap-2 px-3 py-2 w-full hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md"
//             >
//               <Home size={18} />
//               Dashboard
//             </button>
//             <button
//               onClick={() => navigate("/provider/nearby")}
//               className="flex items-center gap-2 px-3 py-2 w-full hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md"
//             >
//               <MapPin size={18} />
//               Nearby Requests
//             </button>
//             <button
//               onClick={() => navigate("/provider/deliveries")}
//               className="flex items-center gap-2 px-3 py-2 w-full hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md"
//             >
//               <Clock size={18} />
//               My Deliveries
//             </button>
//             <button
//               onClick={() => navigate("/provider/history")}
//               className="flex items-center gap-2 px-3 py-2 w-full hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md"
//             >
//               <History size={18} />
//               History
//             </button>
//             <button
//               onClick={() => navigate("/provider/profile")}
//               className="flex items-center gap-2 px-3 py-2 w-full hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md"
//             >
//               <User size={18} />
//               Profile
//             </button>
//           </nav>
//         </div>

//         {/* Logout Button */}
//         <div className="mt-8">
//           <Button
//             variant="destructive"
//             className="w-full flex gap-2 items-center justify-center"
//             onClick={handleLogout}
//           >
//             <LogOut size={16} />
//             Logout
//           </Button>
//         </div>
//       </aside>

//       {/* Main Content */}
//       <main className="flex-1 p-6 relative">
//         {/* Profile on top-right */}
//         <div className="absolute top-6 right-6 flex items-center gap-4">
//           {userInfo?.avatar ? (
//             <img
//               src={userInfo.avatar}
//               alt="Avatar"
//               className="w-10 h-10 rounded-full object-cover"
//             />
//           ) : (
//             <div className="w-10 h-10 rounded-full bg-gray-400 flex items-center justify-center text-white font-bold">
//               {userInfo?.name?.[0] ?? "P"}
//             </div>
//           )}
//           <div className="text-right">
//             <p className="font-semibold">{userInfo?.name ?? "Provider"}</p>
//             <p className="text-xs text-gray-500 dark:text-gray-400">Provider</p>
//           </div>
//         </div>

//         <h1 className="text-3xl font-bold justify-items-start mb-4 mt-16">Welcome, {userInfo?.name ?? "Provider"}</h1>
//         {/* Add dashboard content here */}
//       </main>
//     </div>
//   )
// }


import { useNavigate } from "react-router-dom"
import { useAuth } from "../../context/AuthContext"
import { Button } from "@/components/ui/button"
import Taibelreuist from "../../components/Taibelreuist"
import {
  Home,
  MapPin,
  // Clock,
  History,
  User,
  LogOut,
} from "lucide-react"
import { Outlet } from "react-router-dom"

export default function ProviderDashboard() {
  const navigate = useNavigate()
  const { setUser, userInfo } = useAuth()

  const handleLogout = () => {
    localStorage.removeItem("token")
    setUser(null)
    navigate("/login")
  }

  return (
    <div className="flex min-h-screen bg-white text-black dark:bg-[#111827] dark:text-white">
      {/* Sidebar */}
      <aside className="w-64 p-6 bg-gray-100 dark:bg-[#1f2937] flex flex-col justify-between">
        <div>
          {/* Logo */}
          <h2 className="text-2xl font-bold mb-6 text-black-600">FuelSOS</h2>

          {/* Navigation */}
          <nav className="space-y-3">
            <button
              onClick={() => navigate("/provider")}
              className="flex items-center gap-2 px-3 py-2 w-full hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md"
            >
              <Home size={18} />
              Dashboard
            </button>
            <button
              onClick={() => navigate("/provider/nearby")}
              className="flex items-center gap-2 px-3 py-2 w-full hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md"
            >
              <MapPin size={18} />
              Nearby Requests
            </button>
            {/* <button
              onClick={() => navigate("/provider/deliveries")}
              className="flex items-center gap-2 px-3 py-2 w-full hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md"
            >
              <Clock size={18} />
              My Deliveries
            </button> */}
            <button
              onClick={() => navigate("/provider/history")}
              className="flex items-center gap-2 px-3 py-2 w-full hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md"
            >
              <History size={18} />
              History
            </button>
            <button
              onClick={() => navigate("/provider/profile")}
              className="flex items-center gap-2 px-3 py-2 w-full hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md"
            >
              <User size={18} />
              Profile
            </button>
          </nav>
        </div>

        {/* Logout Button */}
        <div className="mt-8">
          <Button
            variant="destructive"
            className="w-full flex gap-2 items-center justify-center"
            onClick={handleLogout}
          >
            <LogOut size={16} />
            Logout
          </Button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 relative">
        {/* Profile Info in Top-Right */}
        <div className="absolute top-6 right-6 flex items-center gap-3">
          <div className="text-right">
            <p className="font-semibold">{userInfo?.name ?? "Provider"}</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">Provider</p>
          </div>
          {userInfo?.avatar ? (
            <img
              src={userInfo.avatar}
              alt="Avatar"
              className="w-10 h-10 rounded-full object-cover"
            />
          ) : (
            <div className="w-10 h-10 rounded-full bg-gray-400 flex items-center justify-center text-white font-bold">
              {userInfo?.name?.[0] ?? "P"}
            </div>
          )}
        </div>

        {/* Nested Route Content (like Deliveries.tsx) */}
        <div className="mt-16">
          <Outlet />
          {/* <Taibelreuist/> */}
        </div>
      </main>
    </div>
  )
}
