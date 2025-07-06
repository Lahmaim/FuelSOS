// import { useEffect, useState } from "react";
// import { getAllUsers } from "../../services/userService";
// import { Pencil, Trash2 } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { toast } from "sonner";
// import axios from "axios";

// interface User {
//   _id: string;
//   name: string;
//   email: string;
//   role: string;
// }

// export default function AllProviders() {
//   const [users, setUsers] = useState<User[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [search, setSearch] = useState("");

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     axios.get("http://localhost:5000/api/users/providers",{
//       headers:{
//         Authorization: `Bearer ${token}`
//       }
//     })
//       .then((res) => setUsers(res.data))
//       .catch((err) => {
//         console.error("Failed to load users", err);
//         toast.error("Error loading users");
//       })
//       .finally(() => setLoading(false));
//   }, []);

//   // const filteredUsers = users.filter((user) =>
//   //   user.name.toLowerCase().includes(search.toLowerCase()) ||
//   //   user.email.toLowerCase().includes(search.toLowerCase())
//   // );
//   const filteredUsers = Array.isArray(users) ? users.filter(user => user.role === 'provider') : [];
//   const handleDelete = (id: string) => {
//     toast("Delete clicked for user: " + id);
//     // You can implement delete logic here.
//   };

//   const handleEdit = (id: string) => {
//     toast("Edit clicked for user: " + id);
//     // Navigate to edit page or open modal.
//   };

//   return (
//     <div className="p-6 text-black">
//       <h2 className="text-3xl font-bold mb-6">All Providers :</h2>

//       <div className="mb-4 flex items-center justify-between">
//         <Input
//           placeholder="Search users..."
//           className="max-w-sm"
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//         />
//       </div>

//       {loading ? (
//         <p>Loading users...</p>
//       ) : (
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
//           {filteredUsers.map((user) => (
//             <Card key={user._id} className="relative group hover:shadow-md transition">
//               <CardContent className="p-4 space-y-1">
//                 <div className="text-lg font-semibold">{user.name}</div>
//                 <div className="text-sm text-gray-500">{user.email}</div>
//                 <div className="text-sm text-red-900 font-medium">Role: {user.role}</div>
//                 <div className="flex gap-2 mt-4">
//                   <Button
//                     variant="outline"
//                     className="flex items-center gap-1"
//                     onClick={() => handleEdit(user._id)}
//                   >
//                     <Pencil size={16} />
//                     Edit
//                   </Button>
//                   <Button
//                     variant="destructive"
//                     className="flex items-center gap-1"
//                     onClick={() => handleDelete(user._id)}
//                   >
//                     <Trash2 size={16} />
//                     Delete
//                   </Button>
//                 </div>
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }



import { useEffect, useState } from "react";
import axios from "axios";
import { Pencil, Trash2, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

interface User {
  _id: string;
  name: string;
  email: string;
  role: string;
}

export default function AllProviders() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  // New state for the form
  const [newProvider, setNewProvider] = useState({
    name: "",
    email: "",
    password: "",
    phone:""
  });

  const token = localStorage.getItem("token");

  const fetchProviders = () => {
    axios
      .get("http://localhost:5000/api/users/providers", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setUsers(res.data))
      .catch((err) => {
        console.error("Failed to load users", err);
        toast.error("Error loading users");
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchProviders();
  }, []);

  // const filteredUsers = Array.isArray(users)
  //   ? users.filter((user) =>
  //       user.name.toLowerCase().includes(search.toLowerCase()) ||
  //       user.email.toLowerCase().includes(search.toLowerCase())
  //     )
  //   : [];

  const filteredUsers = Array.isArray(users)
  ? users.filter(user =>
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase())
    )
  : [];

  const handleAddProvider = async () => {
    try {
      const res = await axios.post(
        "http://localhost:5000/api/users",
        {
          ...newProvider,
          role: "provider",
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      toast.success("Provider added successfully");
     
      // setNewProvider({ name: "", email: "", password: "" ,phone :""});
       setNewProvider({ name:newProvider.name, email:newProvider.email, password:newProvider.password , phone:newProvider.phone});
      
      fetchProviders(); // refresh the list

    } catch (err: any) {
      toast.error(err.response?.data?.message || "Failed to add provider");
    }
  };

  return (
    <div className="p-6 text-black">
      <h2 className="text-3xl font-bold mb-6">All Providers :</h2>

      {/* ✅ Add Provider Form */}
      <div className="mb-6 bg-gray-100 p-4 rounded-md space-y-3">
        <h3 className="text-xl font-semibold">Add New Provider</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <Input
            placeholder="Full Name"
            value={newProvider.name}
            onChange={(e) =>
              setNewProvider({ ...newProvider, name: e.target.value })
            }
          />
          <Input
            placeholder="Email"
            value={newProvider.email}
            onChange={(e) =>
              setNewProvider({ ...newProvider, email: e.target.value })
            }
          />
            <Input
            placeholder="Phone"
            value={newProvider.phone}
            onChange={(e) =>
              setNewProvider({ ...newProvider, phone: e.target.value })
            }
          />
          <Input
            placeholder="Password"
            type="password"
            value={newProvider.password}
            onChange={(e) =>
              setNewProvider({ ...newProvider, password: e.target.value })
            }
          />
        </div>
        <Button onClick={handleAddProvider} className="mt-2">
          <Plus className="w-4 h-4 mr-2" /> Add Provider
        </Button>
      </div>

      {/* ✅ Search */}
      <div className="mb-4">
        <Input
          placeholder="Search providers..."
          className="max-w-sm"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* ✅ Provider Cards */}
      {loading ? (
        <p>Loading providers...</p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredUsers.map((user) => (
            <Card key={user._id} className="group hover:shadow-md transition">
              <CardContent className="p-4 space-y-1">
                <div className="text-lg font-semibold">{user.name}</div>
                <div className="text-sm text-gray-500">{user.email}</div>
                <div className="text-sm text-red-900 font-medium">
                  Role: {user.role}
                </div>
                <div className="flex gap-2 mt-4">
                  <Button variant="outline" onClick={() => toast("Edit clicked")}>
                    <Pencil size={16} /> Edit
                  </Button>
                  <Button variant="destructive" onClick={() => toast("Delete clicked")}>
                    <Trash2 size={16} /> Delete
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
