// import {
//   LayoutDashboard,
//   Users,
//   Truck,
//   ClipboardList,LogOut,
// } from "lucide-react"
// import { Link } from "react-router-dom";

// export function Sidebar() {
//   return (
//   const handleLogout = () => {
//     const confirmed = window.confirm("Are you sure you want to log out?")
//     if (confirmed) {
//       localStorage.removeItem("token")
//       navigate("/")
//     }
//   }


//     <aside className="w-64 bg-white border-r p-4 space-y-4">
//       <h1 className="text-xl font-bold flex items-center gap-2">
//         <span>⛽</span> FuelSOS
//       </h1>
//       <nav className="space-y-2">
//         <NavItem icon={<LayoutDashboard />} label="Dashboard" active path="/admin/dashboard" />
//         <NavItem icon={<Users />} label="Users"  path="/admin/users" />
//         <NavItem icon={<Truck />} label="Providers"  path="/admin/providers" />
//         <NavItem icon={<ClipboardList />} label="Requests"  path="/admin/requests" />
//       </nav>



//           <button
//         onClick={handleLogout}
//         className="flex items-center gap-2 px-3 py-2 rounded-md text-red-600 hover:bg-red-100 dark:hover:bg-red-900">
//         <LogOut className="w-5 h-5" />
//         <span>Logout</span>
//       </button>


//     </aside>
//   )
// }

// function NavItem({ icon, label, active,path }: { icon: React.ReactNode; label: string; active?: boolean; path:string }) {
//   return (
//     <Link to={path}>
//     <div className={`flex items-center gap-2 px-3 py-2 rounded-md cursor-pointer ${active ? 'bg-gray-100 font-medium' : 'hover:bg-gray-100'}`}>
//       {icon}
//       <span>{label}</span>
//     </div></Link>
//   )
// }







// import {
//   LayoutDashboard,
//   Users,
//   Truck,
//   ClipboardList,
//   LogOut,
// } from "lucide-react"
// import { Link, useNavigate } from "react-router-dom"

// export function Sidebar() {
//   const navigate = useNavigate()

//   // ✅ Define the function BEFORE the return
//   const handleLogout = () => {
//     const confirmed = window.confirm("Are you sure you want to log out?")
//     if (confirmed) {
//       localStorage.removeItem("token")
//       navigate("/login") // Redirect to login
//     }
//   }

//   return (
//     <aside className="w-64 bg-white border-r p-4 space-y-4">
//       <h1 className="text-xl font-bold flex items-center gap-2">
//         <span>⛽</span> FuelSOS
//       </h1>
//       <nav className="space-y-2">
//         <NavItem icon={<LayoutDashboard />} label="Dashboard" path="/admin/dashboard" />
//         <NavItem icon={<Users />} label="Users" path="/admin/users" />
//         <NavItem icon={<Truck />} label="Providers" path="/admin/providers" />
//         <NavItem icon={<ClipboardList />} label="Requests" path="/admin/requests" />
//         {/* ✅ Log out button */}
//         <button
//           onClick={handleLogout}
//           className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-red-100 text-red-600 font-medium w-full"
//         >
//           <LogOut className="w-4 h-4" />
//           Logout
//         </button>
//       </nav>
//     </aside>
//   )
// }

// function NavItem({ icon, label, path }: { icon: React.ReactNode; label: string; path: string }) {
//   return (
//     <Link to={path}>
//       <div className="flex items-center gap-2 px-3 py-2 rounded-md cursor-pointer hover:bg-gray-100">
//         {icon}
//         <span>{label}</span>
//       </div>
//     </Link>
//   )
// }





























import {
  LayoutDashboard,
  UserSquare,
  TruckIcon,
  ListChecks,
  LogOut,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

function NavItem({ icon, label, path }: { icon: JSX.Element; label: string; path: string }) {
  return (
    <Link
      to={path}
      className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-100 text-gray-800 font-medium"
    >
      {icon}
      {label}
    </Link>
  );
}

export function Sidebar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    const confirmed = window.confirm("Are you sure you want to log out?");
    if (confirmed) {
      localStorage.removeItem("token");
      navigate("/login");
    }
  };

  return (
    <aside className="w-64 bg-white border-r p-4 space-y-4">
      <h1 className="text-xl font-bold flex items-center gap-2 pl-3.5">
         FuelSOS
      </h1>
      <nav className="space-y-2">
        <NavItem icon={<LayoutDashboard className="w-5 h-5" />} label="Dashboard" path="/admin/dashboard" />
        <NavItem icon={<UserSquare className="w-5 h-5" />} label="Users" path="/admin/users" />
        <NavItem icon={<TruckIcon className="w-5 h-5" />} label="Providers" path="/admin/providers" />
        <NavItem icon={<ListChecks className="w-5 h-5" />} label="Requests" path="/admin/requests" />
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-red-100 text-red-600 font-medium w-full"
        >
          <LogOut className="w-5 h-5" />
          Logout
        </button>
      </nav>
    </aside>
  );
}
