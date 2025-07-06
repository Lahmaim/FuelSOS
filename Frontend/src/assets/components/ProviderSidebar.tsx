// import { LogOut } from "lucide-react";

// interface SidebarProps {
//   items: { label: string; key: string }[];
//   activeTab: string;
//   onTabChange: (key: string) => void;
// }

// export function Sidebar({ items, activeTab, onTabChange }: SidebarProps) {
//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     window.location.href = "/login";
//   };

//   return (
//     <aside className="w-64 bg-[#d5d5d5] p-4 space-y-4 border-r border-gray-700">
//       <h1 className="text-xl font-bold text-red-400 flex items-center gap-2">
//          FuelSOS
//       </h1>
//       <nav className="space-y-1">
//         {items.map((item) => (
//           <button
//             key={item.key}
//             onClick={() => onTabChange(item.key)}
//             className={`block w-full text-left px-4 py-2 rounded hover:bg-[#2a2a2a] ${
//               activeTab === item.key ? "bg-[#2a2a2a] text-green-400" : ""
//             }`}
//           >
//             {item.label}
//           </button>
//         ))}
//       </nav>
//       <button
//         onClick={handleLogout}
//         className="flex items-center gap-2 px-4 py-2 mt-4 rounded bg-red-600 text-white hover:bg-red-700"
//       >
//         <LogOut className="w-4 h-4" />
//         Logout
//       </button>
//     </aside>
//   );
// }







// import { Home, MapPin, Package, Settings, History, LogOut } from "lucide-react";
// import { Button } from "@/components/ui/button";
// // import { cn } from "@/lib/utils"; // optional utility for conditional classes
// import { useNavigate } from "react-router-dom";
// import Dashboard from "../pages/provider/Dashboard.tsx";
// import MyDeliveries from "../pages/provider/Deliveries";



// const navItems = [
//   { label: "Dashboard", icon: Dashboard, path: "/provider/Dashboard" },
//   { label: "Nearby Requests", icon: MapPin, path: "/provider/nearby" },
//   { label: "My Deliveries", icon: Package, path: "/provider/Mydeliveries" },
//   { label: "Settings", icon: Settings, path: "/provider/settings" },
//   { label: "History", icon: History, path: "/provider/history" },
// ];

// export default function Sidebar() {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     // handle logout logic
//     localStorage.removeItem("token");
//     navigate("/login");
//   };

//   return (
//     <aside className="w-64 min-h-screen bg-[#F7F7F7] p-6 flex flex-col justify-between">
//       <div>
//         <h1 className="text-2xl font-bold mb-8">FuelSOS</h1>
//         <nav className="space-y-4">
//           {navItems.map(({ label, icon: Icon, path }) => (
//             <button
//               key={label}
//               onClick={() => navigate(path)}
//               className="flex items-center gap-3 w-full text-left px-3 py-2 rounded-md hover:bg-gray-200 transition"
//             >
//               <Icon className="w-5 h-5" />
//               <span className="text-base">{label}</span>
//             </button>
//           ))}
//         </nav>
//       </div>

//       <div className="space-y-4">
//         <Button
//           className="w-full bg-yellow-400 text-black font-semibold hover:bg-yellow-300"
//           onClick={() => navigate("/provider/nearby")}
//         >
//           ACCEPT REQUEST
//         </Button>
//         <Button
//           variant="destructive"
//           className="w-full"
//           onClick={handleLogout}
//         >
//           <LogOut className="mr-2 w-4 h-4" />
//           Logout
//         </Button>
//       </div>
//     </aside>
//   );
// }




// import {
//   Home,
//   MapPin,
//   Package,
//   Settings,
//   History,
//   LogOut,
// } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { useNavigate, useLocation } from "react-router-dom";

// // Define your navigation structure
// const navItems = [
//   { label: "Dashboard", icon: Home, path: "/provider/dashboard" },
//   { label: "Nearby Requests", icon: MapPin, path: "/provider/nearby" },
//   { label: "My Deliveries", icon: Package, path: "/provider/mydeliveries" },
//   { label: "Settings", icon: Settings, path: "/provider/settings" },
//   { label: "History", icon: History, path: "/provider/history" },
// ];

// export default function Sidebar() {
//   const navigate = useNavigate();
//   const location = useLocation(); // Get current path

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     navigate("/login");
//   };

//   return (
//     <aside className="w-64 min-h-screen bg-[#F7F7F7] p-6 flex flex-col justify-between">
//       <div>
//         <h1 className="text-2xl font-bold mb-8">FuelSOS</h1>
//         <nav className="space-y-4">
//           {navItems.map(({ label, icon: Icon, path }) => {
//             const isActive = location.pathname === path;
//             return (
//               <button
//                 key={label}
//                 onClick={() => navigate(path)}
//                 className={`flex items-center gap-3 w-full text-left px-3 py-2 rounded-md transition 
//                   ${
//                     isActive
//                       ? "bg-gray-200 text-black font-semibold"
//                       : "text-gray-700 hover:bg-gray-100"
//                   }`}
//               >
//                 <Icon className="w-5 h-5" />
//                 <span className="text-base">{label}</span>
//               </button>
//             );
//           })}
//         </nav>
//       </div>

//       <div className="space-y-4">
//         {/* <Button
//           className="w-full bg-yellow-400 text-black font-semibold hover:bg-yellow-300"
//           onClick={() => navigate("/provider/nearby")}
//         >
//           ACCEPT REQUEST
//         </Button> */}
//         <Button variant="destructive" className="w-full" onClick={handleLogout}>
//           <LogOut className="mr-2 w-4 h-4" />
//           Logout
//         </Button>
//       </div>
//     </aside>
//   );
// }



// import {
//   Home,
//   MapPin,
//   Package,
//   Settings,
//   History,
//   LogOut,
// } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { useNavigate, useLocation } from "react-router-dom";

// const navItems = [
//   { label: "Dashboard", icon: Home, path: "/provider/dashboard" },
//   { label: "Nearby Requests", icon: MapPin, path: "/provider/nearby" },
//   { label: "My Deliveries", icon: Package, path: "/provider/mydeliveries" },
//   { label: "History", icon: History, path: "/provider/history" },
//   { label: "Settings", icon: Settings, path: "/provider/settings" },
// ];

// export default function Sidebar() {
//   const navigate = useNavigate();
//   const location = useLocation();

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     navigate("/login");
//   };

//   const handleLabelClick = (label: string) => {
//     alert(`Button clicked: ${label}`);
//   };

//   return (
//     <aside className="w-64 min-h-screen bg-[#F7F7F7] p-6 flex flex-col justify-between">
//       <div>
//         <h1 className="text-2xl font-bold mb-8">FuelSOS</h1>
//         <nav className="space-y-4">
//           {navItems.map(({ label, icon: Icon, path }) => {
//             const isActive = location.pathname === path;
//             return (
//               <button
//                 key={label}
//                 onClick={() => navigate(path)}
//                 className={`flex items-center gap-3 w-full text-left px-3 py-2 rounded-md transition ${
//                   isActive
//                     ? "bg-gray-200 text-black font-semibold"
//                     : "text-gray-700 hover:bg-gray-100"
//                 }`}
//               >
//                 <Icon className="w-5 h-5" />
//                 <Button
//                   variant="ghost"
//                   size="sm"
//                   className="text-sm p-0 h-auto"
//                   onClick={(e) => {
//                     e.stopPropagation(); // prevent navigate from parent
//                     handleLabelClick(label);
//                   }}
//                 >
//                   {label}
//                 </Button>
//               </button>
//             );
//           })}
//         </nav>
//       </div>

//       <div className="space-y-4">
//         <Button
//           variant="destructive"
//           className="w-full"
//           onClick={handleLogout}
//         >
//           <LogOut className="mr-2 w-4 h-4" />
//           Logout
//         </Button>
//       </div>
//     </aside>
//   );
// }



// import {
//   LayoutDashboard,
//   MapPinned,
//   Truck,
//   Clock,
//   UserRound,
//   SlidersHorizontal,
//   LogOut,
// } from "lucide-react";

// import { useNavigate, useLocation } from "react-router-dom";
// import { Button } from "@/components/ui/button";

// const navItems = [
//   { label: "Dashboard", icon: LayoutDashboard, path: "/provider/dashboard" },
//   { label: "Nearby Requests", icon: MapPinned, path: "/provider/nearby" },
//   { label: "My Deliveries", icon: Truck, path: "/provider/mydeliveries" },
//   { label: "History", icon: Clock, path: "/provider/history" },
//   { label: "Profile", icon: UserRound, path: "/provider/profile" },
//   { label: "Settings", icon: SlidersHorizontal, path: "/provider/settings" },
// ];

// export default function Sidebar() {
//   const navigate = useNavigate();
//   const location = useLocation();

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     navigate("/login");
//   };

//   return (
//     <aside className="w-64 min-h-screen bg-[#F7F7F7] p-6 flex flex-col justify-between">
//       <div>
//         <h1 className="text-2xl font-bold mb-8 tracking-wide">FuelSOS</h1>
//         <nav className="space-y-4">
//           {navItems.map(({ label, icon: Icon, path }) => {
//             const isActive = location.pathname === path;
//             return (
//               <button
//                 key={label}
//                 onClick={() => navigate(path)}
//                 className={`flex items-center gap-3 w-full text-left px-3 py-2 rounded-md transition ${
//                   isActive
//                     ? "bg-gray-200 text-black font-semibold"
//                     : "text-gray-700 hover:bg-gray-100"
//                 }`}
//               >
//                 <Icon className="w-5 h-5" />
//                 <span>{label}</span>
//               </button>
//             );
//           })}
//         </nav>
//       </div>

//       <div>
//         <Button
//           variant="destructive"
//           className="w-full"
//           onClick={handleLogout}
//         >
//           <LogOut className="mr-2 w-4 h-4" />
//           Logout
//         </Button>
//       </div>
//     </aside>
//   );
// }
