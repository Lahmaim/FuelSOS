import { useEffect, useState } from "react";
import { getAllUsers } from "../../services/userService";
import { Pencil, Trash2 } from "lucide-react";
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

export default function DashboardAdmin() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    getAllUsers()
      .then((res) => setUsers(res.data))
      .catch((err) => {
        console.error("Failed to load users", err);
        toast.error("Error loading users");
      })
      .finally(() => setLoading(false));
  }, []);

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase()) ||
    user.email.toLowerCase().includes(search.toLowerCase())
  );

  const handleDelete = (id: string) => {
    toast("Delete clicked for user: " + id);
    // You can implement delete logic here.
  };

  const handleEdit = (id: string) => {
    toast("Edit clicked for user: " + id);
    // Navigate to edit page or open modal.
  };

  return (
    <div className="p-6 text-black">
      <h2 className="text-3xl font-bold mb-6">All Clients :</h2>

      <div className="mb-4 flex items-center justify-between">
        <Input
          placeholder="Search users..."
          className="max-w-sm"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

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
