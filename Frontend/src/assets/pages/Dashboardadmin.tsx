import { Sidebar } from ".././components/Sidebar"
import { StatCard } from ".././components/StatCard"
import { RequestTable } from ".././components/RequestTable"
import { Bell } from "lucide-react"
import { Route, Routes } from "react-router-dom"
import Users from '../pages/admin/Dashboard.tsx';
import AllProviders from "./admin/AllProvides.tsx"
export default function Dashboard() {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />

      <main className="flex-1 p-6 space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-semibold">Dashboard</h2>
          <div className="flex items-center gap-2 font-medium">
            Anas Lahmaim
            <Bell className="w-5 h-5" />
          </div>
        </div>

<Routes>
  <Route path="dashboard" element={<RequestTable />}/>
  <Route path="users" element={<Users />}/>
  <Route path="providers" element={<AllProviders />}/>
</Routes>
        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <StatCard label="Total Requests" value="237" />
          <StatCard label="Active Users" value="124" />
          <StatCard label="Completed Deliveries" value="189" />
        </div> */}

        
      </main>
    </div>
  )
}
