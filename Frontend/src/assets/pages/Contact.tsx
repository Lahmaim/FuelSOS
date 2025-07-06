// import { useEffect, useState } from "react";
// import { getAllUsers } from "@/services/userService";

// interface User {
//   _id: string;
//   name: string;
//   email: string;
//   role: string;
// }

// export default function DashboardAdmin() {
//   const [users, setUsers] = useState<User[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     getAllUsers()
//       .then((res) => setUsers(res.data))
//       .catch((err) => console.error("Failed to load users", err))
//       .finally(() => setLoading(false));
//   }, []);

//   return (
//     <div className="p-6 text-white">
//       <h2 className="text-3xl font-bold mb-6">Admin Dashboard</h2>

//       {loading ? (
//         <p>Loading users...</p>
//       ) : (
//         <div className="space-y-4">
//           {users.map((user) => (
//             <div key={user._id} className="p-4 rounded-xl bg-muted/20 shadow">
//               <div className="text-lg font-semibold">{user.name}</div>
//               <div className="text-sm text-muted-foreground">{user.email}</div>
//               <div className="text-sm text-yellow-400">Role: {user.role}</div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }
