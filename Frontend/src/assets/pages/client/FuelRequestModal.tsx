import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import axios from "@/services/axios";
import { useState } from "react";

type Props = {
  open: boolean;
  onClose: () => void;
  onSuccess: () => void;
};

export default function FuelRequestModal({ open, onClose, onSuccess }: Props) {
  const [form, setForm] = useState({
    latitude: "",
    longitude: "",
  });

  const handleSubmit = async () => {
    await axios.post("/api/requests", {
      location: {
        latitude: parseFloat(form.latitude),
        longitude: parseFloat(form.longitude),
      },
    });
    onSuccess();
    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>Request Fuel</DialogHeader>
        <div className="space-y-2">
          <Input
            placeholder="Latitude"
            value={form.latitude}
            onChange={(e) => setForm({ ...form, latitude: e.target.value })}
          />
          <Input
            placeholder="Longitude"
            value={form.longitude}
            onChange={(e) => setForm({ ...form, longitude: e.target.value })}
          />
          <Button onClick={handleSubmit}>Send Request</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
