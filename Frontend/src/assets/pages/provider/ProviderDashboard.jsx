import { useEffect, useState } from "react";
import axios from "axios";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function ProviderDashboard() {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    axios
      .get("/api/requests", { headers: authHeader() })
      .then((res) => setRequests(res.data))
      .catch((err) => console.error("Fetch error:", err));
  }, []);

  const handleAction = async (id, action) => {
    try {
      if (action === "accept") {
        await axios.put(`/api/requests/${id}/accept`, {}, { headers: authHeader() });
      } else if (action === "complete") {
        await axios.put(`/api/requests/${id}/status`, { status: "Completed" }, { headers: authHeader() });
      }
      const updated = await axios.get("/api/requests", { headers: authHeader() });
      setRequests(updated.data);
    } catch (err) {
      console.error("Action error:", err);
    }
  };

  const authHeader = () => {
    const token = localStorage.getItem("token");
    return { Authorization: `Bearer ${token}` };
  };

  return (
    <div className="min-h-screen p-8 bg-background text-white">
      <h1 className="text-2xl font-bold text-accent mb-6">Provider Dashboard</h1>

      <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
        {requests.map((req) => (
          <Card key={req._id} className="bg-surface">
            <CardContent className="p-4">
              <h3 className="text-lg font-semibold text-white">{req.client?.name || "Unknown Client"}</h3>
              <p className="text-muted-foreground">Lat: {req.location?.latitude}, Lng: {req.location?.longitude}</p>
              <Badge className="my-2" variant="secondary">{req.status}</Badge>
              <div className="mt-3 flex gap-2">
                {req.status === "Pending" && (
                  <Button onClick={() => handleAction(req._id, "accept")} className="bg-green-600">Accept</Button>
                )}
                {req.status === "Accepted" && (
                  <Button onClick={() => handleAction(req._id, "complete")} className="bg-accent">Mark Completed</Button>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
