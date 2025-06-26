import { useEffect, useState } from "react";
import axios from "../../services/api";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import FuelRequestModal from "./FuelRequestModal";

type Request = {
  _id: string;
  location: {
    latitude: number;
    longitude: number;
  };
  status: string;
};

export default function ClientDashboard() {
  const [requests, setRequests] = useState<Request[]>([]);
  const [open, setOpen] = useState(false);

  const fetchRequests = async () => {
    const res = await axios.get<Request[]>("/api/requests/mine");
    setRequests(res.data);
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  return (
    <div className="p-6 space-y-4 text-white">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">My Fuel Requests</h1>
        <Button onClick={() => setOpen(true)}>Request Fuel</Button>
      </div>

      <FuelRequestModal
        open={open}
        onClose={() => setOpen(false)}
        onSuccess={fetchRequests}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {requests.map((req) => (
          <Card key={req._id}>
            <CardContent className="space-y-2">
              <div>
                <span className="font-semibold">Location:</span>
                <div>
                  {req.location.latitude}, {req.location.longitude}
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span>Status:</span>
                <Badge variant="outline">{req.status}</Badge>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
