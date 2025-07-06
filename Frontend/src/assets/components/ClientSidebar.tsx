


// import {
//   LayoutDashboard,
//   Fuel,
//   ScrollText,
//   User,
//   Settings,
//   LogOut,
// } from "lucide-react";
// import { useNavigate } from "react-router-dom";
// import { Button } from "@/components/ui/button";
// import { Link } from "react-router-dom";

// export default function SidebarClient({ onLogout }: { onLogout: () => void }) {
//   const navigate = useNavigate();

//   return (
//     <aside className="w-64 h-screen  bg-white border-r flex flex-col justify-between p-4">
//       <div className="space-y-6">
//         <h2 className="text-xl font-bold text-black">FuelSOS</h2>

//         <div className="flex flex-col gap-3">
//           <Link to={'/client'}
//             className="flex items-center gap-2 text-gray-700 hover:text-black"
//           >
//             <LayoutDashboard size={20} />
//             Dashboard
//           </Link>

//           <Link to={'/client/request'}
//             className="flex items-center gap-2 text-gray-700 hover:text-black"
//           >
//             <Fuel size={20} />
//             Request Fuel
//           </Link>

//           <button
//             onClick={() => navigate("/client/history")}
//             className="flex items-center gap-2 text-gray-700 hover:text-black"
//           >
//             <ScrollText size={20} />
//             History
//           </button>

//           <Link to={'/client/profile'}
//             className="flex items-center gap-2 text-gray-700 hover:text-black"
//           >
//             <User size={20} />
//             Profile
//           </Link>

//           <button
//             onClick={() => navigate("/client/settings")}
//             className="flex items-center gap-2 text-gray-700 hover:text-black"
//           >
//             <Settings size={20} />
//             Settings
//           </button>
//         </div>
//       </div>

//       <Button
//         variant="ghost"
//         onClick={onLogout}
//         className="flex items-center gap-2 text-red-600"
//       >
//         <LogOut size={20} />
//         Logout
//       </Button>
//     </aside>
//   );
// }



import {
  LayoutDashboard,
  Fuel,
  ScrollText,
  User,
  Settings,
  LogOut,
} from "lucide-react";
import {  Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function SidebarClient({ onLogout }: { onLogout: () => void }) {
  return (
    <aside className="w-64 h-screen bg-white border-r flex flex-col justify-between p-4">
      <div className="space-y-6">
        <h2 className="text-xl font-bold text-black">FuelSOS</h2>

        <div className="flex flex-col gap-3">
          <Link
            to="/client"
            className="flex items-center gap-2 text-gray-700 hover:text-black"
          >
            <LayoutDashboard size={20} />
            Dashboard
          </Link>

          <Link
            to="/client/request"
            className="flex items-center gap-2 text-gray-700 hover:text-black"
          >
            <Fuel size={20} />
            Request Fuel
          </Link>

          <Link
            to="/client/history"
            className="flex items-center gap-2 text-gray-700 hover:text-black"
          >
            <ScrollText size={20} />
            History
          </Link>

          <Link
            to="/client/profile"
            className="flex items-center gap-2 text-gray-700 hover:text-black"
          >
            <User size={20} />
            Profile
          </Link>

          <Link
            to="/client/settings"
            className="flex items-center gap-2 text-gray-700 hover:text-black"
          >
            <Settings size={20} />
            Settings
          </Link>
        </div>
      </div>

      <Button
        variant="ghost"
        onClick={onLogout}
        className="flex items-center gap-2 text-red-600"
      >
        <LogOut size={20} />
        Logout
      </Button>
    </aside>
  );
}
