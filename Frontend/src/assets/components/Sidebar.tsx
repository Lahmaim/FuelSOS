import {
  LayoutDashboard,
  Users,
  Truck,
  ClipboardList,
} from "lucide-react"

export function Sidebar() {
  return (
    <aside className="w-64 bg-white border-r p-4 space-y-4">
      <h1 className="text-xl font-bold flex items-center gap-2">
        <span>⛽</span> FuelSOS
      </h1>
      <nav className="space-y-2">
        <NavItem icon={<LayoutDashboard />} label="Dashboard" active />
        <NavItem icon={<Users />} label="Users" />
        <NavItem icon={<Truck />} label="Providers" />
        <NavItem icon={<ClipboardList />} label="Requests" />
      </nav>
    </aside>
  )
}

function NavItem({ icon, label, active }: { icon: React.ReactNode; label: string; active?: boolean }) {
  return (
    <div className={`flex items-center gap-2 px-3 py-2 rounded-md cursor-pointer ${active ? 'bg-gray-100 font-medium' : 'hover:bg-gray-100'}`}>
      {icon}
      <span>{label}</span>
    </div>
  )
}
