// // pages/client/Dashboard.tsx
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
// import { Link } from "react-router-dom";

// export default function ClientDashboard() {
//   return (
//     <div className="grid gap-6 p-4">
//       <h2 className="text-2xl font-bold text-white">Welcome, Client!</h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//         <Card>
//           <CardContent>
//             <h3 className="text-xl font-semibold mb-2">Request Fuel</h3>
//             <p>You currently have no active fuel request.</p>
//             <Link to="/request-fuel">
//               <Button className="mt-4">Request Fuel</Button>
//             </Link>
//           </CardContent>
//         </Card>

//         <Card>
//           <CardContent>
//             <h3 className="text-xl font-semibold mb-2">Your Latest Request</h3>
//             <p>Status: Pending</p>
//             <p>Type: Diesel</p>
//             <p>Location: Map coming soon</p>
//           </CardContent>
//         </Card>
//       </div>
//     </div>
//   );
// }
