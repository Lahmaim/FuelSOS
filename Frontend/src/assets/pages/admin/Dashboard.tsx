// import {  useEffect, useState } from "react";
// import { getAllUsers } from "../../services/userService";
// import { Pencil, Trash2 } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { toast } from "sonner";


// interface User {
//   _id: string;
//   name: string;
//   email: string;
//   role: string;
// }

// export default function DashboardAdmin() {
//   const [users, setUsers] = useState<User[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [search, setSearch] = useState("");
 

//   useEffect(() => {
//     getAllUsers()
//       .then((res) => setUsers(res.data))
//       .catch((err) => {
//         console.error("Failed to load users", err);
//         toast.error("Error loading users");
//       })
//       .finally(() => setLoading(false));
//   }, []);

//   const filteredUsers = users.filter((user) =>
//     user.name.toLowerCase().includes(search.toLowerCase()) ||
//     user.email.toLowerCase().includes(search.toLowerCase())
//   );

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
//       <h2 className="text-3xl font-bold mb-6">All Clients :</h2>

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
// import { addUser, getAllUsers } from "../../services/userService";
import { Pencil, Trash2, Plus,  } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import axios from "axios";

// import Taibelreuist from "../../components/Taibelreuist"


interface User {
  _id: string;
  name: string;
  email: string;
  role: string;
}

export default function DashboardAdmin() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [showAddForm, setShowAddForm] = useState(false);

  const [newClient, setNewClient] = useState({
    name: "",
    email: "",
    role: "user",
    password:'',
    phone:''
  });

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = () => {
    const token = localStorage.getItem("token");
    setLoading(true);
    // getAllUsers()
    axios.get('http://localhost:5000/api/users',{
      headers:{
        Authorization: `Bearer ${token}`
      }
    })
      .then((res) => setUsers(res.data))
      .catch((err) => {
        console.error("Failed to load users", err);
        toast.error("Error loading users");
      })
      .finally(() => setLoading(false));
  };
  const handleAddClient = async () => {
    try {
      const token = localStorage.getItem('token')
      const res = await axios.post(
        "http://localhost:5000/api/users",
        {
          ...newClient,
          role: "client",
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      toast.success("Client added successfully");
     
      // setNewProvider({ name: "", email: "", password: "" ,phone :""});
        setNewClient({ name:newClient.name, email: newClient.email, role: "client", password:newClient.password , phone:newClient.phone});
        setNewClient({ name: "",
    email: "",
    role: "",
    password:'',
    phone:''});
      
      
     fetchUsers(); // refresh the list

    } catch (err: any) {
      toast.error(err.response?.data?.message || "Failed to add client");
    }
  };
  // const handleAddClient = () => {
  //   if (!newClient.name || !newClient.email) {
  //     toast.error("Please fill in all fields");
  //     return;
  //   }

  //   addUser(newClient)
  //     .then(() => {
  //       toast.success("Client added!");
  //       fetchUsers();
  //       setShowAddForm(false);
  //       setNewClient({ name:newClient.name, email: newClient.email, role: "client", password:newClient.password , phone:newClient.phone});

  //     })
  //     .catch(() => toast.error("Failed to add client"));
  // };
console.log(users);

  // const filteredUsers = users.filter((user) =>
  //   user.name.toLowerCase().includes(search.toLowerCase()) ||
  //   user.email.toLowerCase().includes(search.toLowerCase())
  // );
  const filteredUsers = Array.isArray(users) ? users.filter(user => user.role === 'client') : [];


  const handleDelete = (id: string) => {
    toast("Delete clicked for user: " + id);
    // TODO: call delete API here
  };

  const handleEdit = (id: string) => {
    toast("Edit clicked for user: " + id);
    // TODO: open edit modal
  };

  return (
    <div className="p-6 text-black">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-bold">All Clients</h2>
        <Button onClick={() => setShowAddForm(true)} className="flex items-center gap-2">
          <Plus size={16} /> Add Client
        </Button>
      </div>

      <div className="mb-4">
        <Input
          placeholder="Search users..."
          className="max-w-sm"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Add Client Form */}
      {showAddForm && (
        <Card className="mb-6">
          <CardContent className="p-4 space-y-2">
            <h3 className="font-semibold text-lg">New Client Info</h3>
            <Input
              placeholder="Full Name"
              value={newClient.name}
              onChange={(e) => setNewClient({ ...newClient, name: e.target.value })}
            />
            <Input
              placeholder="Email"
              type="email"
              value={newClient.email}
              onChange={(e) => setNewClient({ ...newClient, email: e.target.value })}
            />
            <Input
              placeholder="Phone"
              type="text"
              value={newClient.phone}
              onChange={(e) => setNewClient({ ...newClient, phone: e.target.value })}
            />
            <Input
              placeholder="Password"
              type="password"
              value={newClient.password}
              onChange={(e) => setNewClient({ ...newClient, password: e.target.value })}
            />
            <div className="flex gap-2">
              <Button onClick={handleAddClient}>Add</Button>
              <Button variant="ghost" onClick={() => setShowAddForm(false)}>Cancel</Button>
            </div>
          </CardContent>
          {/* <Taibelreuist/> */}
        </Card>
      )}

      {loading ? (
        <p>Loading users...</p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredUsers.map((user) => (
            <Card key={user._id} className="relative group hover:shadow-md transition">
              <CardContent className="p-4 space-y-1">
                <div className="text-lg font-semibold">{user.name}</div>
                <div className="text-sm text-gray-500">{user.email}</div>
                <div className="text-sm text-red-900 font-medium">Role: {user.role}</div>
                <div className="flex gap-2 mt-4">
                  <Button
                    variant="outline"
                    className="flex items-center gap-1"
                    onClick={() => handleEdit(user._id)}
                  >
                    <Pencil size={16} />
                    Edit
                  </Button>
                  <Button
                    variant="destructive"
                    className="flex items-center gap-1"
                    onClick={() => handleDelete(user._id)}
                  >
                    <Trash2 size={16} />
                    Delete
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

