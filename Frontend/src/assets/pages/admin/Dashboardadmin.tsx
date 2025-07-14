import { Sidebar } from "../../components/Sidebar.tsx"
// import { StatCard } from "../../components/StatCard.tsx"
import { RequestTable } from "../../components/RequestTable.tsx"
// import { Bell } from "lucide-react"
import { Route, Routes } from "react-router-dom"
import Users from './Dashboard.tsx';
import AllProviders from "./AllProvides.tsx"
import { useContext } from "react"
import { AuthContext } from "../../context/AuthContext.tsx"
import ProfileHeader from "@/assets/components/ProfileHeader.tsx"
 
import Taibelreuist from "../../components/Taibelreuist.tsx"

export default function Dashboard() {

   const { userInfo } = useContext(AuthContext);
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />

      <main className="flex-1 p-6 space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-semibold">Dashboard</h2>
          <div className="flex items-center gap-2 font-medium">
          {/* {userInfo?.name} */}
          <ProfileHeader/>
          </div>
        </div>

<Routes>
  <Route path="dashboard" element={<RequestTable  />}/>
  <Route path="users" element={<Users />}/>
  <Route path="providers" element={<AllProviders />}/>
</Routes>
          <Taibelreuist/>
        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <StatCard label="Total Requests" value="237" />
          <StatCard label="Active Users" value="124" />
          <StatCard label="Completed Deliveries" value="189" />
        </div> */}

        
      </main>
    </div>
  )
}
