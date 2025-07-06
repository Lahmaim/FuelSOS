// src/components/MyDeliveries.tsx
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Delivery {
  id: string;
  client: string;
  status: string;
  address: string;
}

const mockDeliveries: Delivery[] = [
  { id: "D001", client: "Youssef Karim", status: "In Progress", address: "Agadir" },
  { id: "D002", client: "Amina J.", status: "Delivered", address: "Marrakech" },
];

export default function MyDeliveries() {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">My Deliveries</h2>
      {mockDeliveries.map((delivery) => (
        <Card key={delivery.id}>
          <CardContent className="flex justify-between items-center p-4">
            <div>
              <p className="font-medium">{delivery.client}</p>
              <p className="text-sm text-muted-foreground">{delivery.address}</p>
            </div>
            <Badge variant={delivery.status === "Delivered" ? "default" : "secondary"}>
              {delivery.status}
            </Badge>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
