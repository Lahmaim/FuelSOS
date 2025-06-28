import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useMapEvents, MapContainer, TileLayer, Marker } from "react-leaflet";
import { useState } from "react";
import L from "leaflet";

export default function RequestFuelModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [position, setPosition] = useState<[number, number] | null>(null);

  const submitRequest = async () => {
    if (!position) return alert("Pick a location on the map");
    await fetch("/api/requests", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ latitude: position[0], longitude: position[1] }),
    });
    onClose();
  };

  const LocationPicker = () => {
    useMapEvents({
      click(e) {
        setPosition([e.latlng.lat, e.latlng.lng]);
      },
    });
    return position ? <Marker position={position} /> : null;
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="p-0 overflow-hidden bg-[#1a201a] text-white">
        <DialogHeader className="p-4">
          <DialogTitle>Request Fuel</DialogTitle>
        </DialogHeader>
        <div className="h-[300px] w-full">
          <MapContainer
            center={[33.5, -7.5]} // Default to Casablanca
            zoom={8}
            style={{ height: "100%", width: "100%" }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <LocationPicker />
          </MapContainer>
        </div>
        <div className="p-4 flex justify-end">
          <Button onClick={submitRequest}>Submit Request</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
