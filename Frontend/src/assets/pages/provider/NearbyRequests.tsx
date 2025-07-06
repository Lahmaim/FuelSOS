// src/components/NearbyRequests.tsx
// import { Card, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";

// interface Request {
//   id: string;
//   clientName: string;
//   location: string;
//   distance: string;
// }

// const mockRequests: Request[] = [
//   { id: "1", clientName: "Anas Lahmaim", location: "Casablanca", distance: "2.3km" },
//   { id: "2", clientName: "Salma Raji", location: "Rabat", distance: "4.1km" },
// ];

// export default function NearbyRequests() {
//   return (
//     <div className="space-y-4">
//       <h2 className="text-xl font-semibold">Nearby Requests</h2>
//       {mockRequests.map((req) => (
//         <Card key={req.id}>
//           <CardContent className="flex justify-between items-center p-4">
//             <div>
//               <p className="font-medium">{req.clientName}</p>
//               <p className="text-sm text-muted-foreground">{req.location} • {req.distance}</p>
//             </div>
//             <div className="flex gap-2">
//               <Button variant="default">Accept</Button>
//               <Button variant="outline">Reject</Button>
//             </div>
//           </CardContent>
//         </Card>
//       ))}
//     </div>
//   );
// }



// import { Card, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { MapPin } from "lucide-react"; // Optional for location icon

// interface Request {
//   id: string;
//   clientName: string;
//   location: string;
//   distance: string;
//   status?: "Available" | "Accepted";
// }

// const mockRequests: Request[] = [
//   { id: "1", clientName: "Anas Lahmaim", location: "Casablanca", distance: "2.3km", status: "Available" },
//   { id: "2", clientName: "Salma Raji", location: "Rabat", distance: "4.1km", status: "Available" },
// ];

// export default function NearbyRequests() {
//   return (
//     <div className="space-y-4">
//       <h2 className="text-xl font-semibold">Nearby Requests</h2>
//       {mockRequests.map((req) => (
//         <Card key={req.id}>
//           <CardContent className="flex justify-between items-center p-4">
//             <div>
//               <p className="font-medium">{req.clientName}</p>
//               <p className="text-sm text-muted-foreground flex items-center gap-1">
//                 <MapPin className="h-4 w-4" /> {req.location} • {req.distance}
//               </p>
//             </div>
//             <div className="flex gap-2">
//               <Button variant="default">Accept</Button>
//               <Button variant="outline">Reject</Button>
//             </div>
//           </CardContent>
//         </Card>
//       ))}
//     </div>
//   );
// }













import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { MapPin } from "lucide-react";

interface Request {
  id: string;
  clientName: string;
  location: string;
  distance: string;
  status?: "Available" | "Accepted";
}

const mockRequests: Request[] = [
  {
    id: "1",
    clientName: "Anas Lahmaim",
    location: "Casablanca",
    distance: "2.3km",
    status: "Available",
  },
  {
    id: "2",
    clientName: "Salma Raji",
    location: "Rabat",
    distance: "4.1km",
    status: "Available",
  },
];

export default function NearbyRequests() {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold mb-2 text-black">Nearby Requests</h2>

      {mockRequests.map((req) => (
        <Card key={req.id} className="rounded-xl shadow-sm">
          <CardContent className="p-4 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <Avatar>
                <AvatarFallback>
                  {req.clientName
                    .split(" ")
                    .map((n) => n[0])
                    .join("")
                    .toUpperCase()}
                </AvatarFallback>
              </Avatar>

              <div>
                <p className="font-medium text-lg text-black">
                  {req.clientName}
                </p>
                <div className="text-sm text-muted-foreground flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  {req.location} • {req.distance}
                </div>
              </div>
            </div>

            <div className="flex gap-2">
              <Button className="bg-yellow-400 text-black hover:bg-yellow-500">
                Accept Request
              </Button>
              <Button variant="outline" className="text-black border-gray-300">
                Reject
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

