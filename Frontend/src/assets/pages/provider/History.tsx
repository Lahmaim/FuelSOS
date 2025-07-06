// src/pages/History.tsx
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const historyData = [
  {
    id: "R101",
    client: "Salma Raji",
    location: "Rabat",
    date: "2025-07-03 14:32",
    status: "Delivered",
  },
  {
    id: "R102",
    client: "Youssef Karim",
    location: "Agadir",
    date: "2025-06-29 11:10",
    status: "Delivered",
  },
  {
    id: "R103",
    client: "Fatima Zahra",
    location: "Casablanca",
    date: "2025-06-20 09:05",
    status: "Delivered",
  },
]

export default function History() {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold mb-4">Delivery History</h2>

      {historyData.map((item) => (
        <Card key={item.id} className="shadow-sm rounded-xl">
          <CardContent className="p-4 flex justify-between items-center">
            <div>
              <p className="font-medium text-lg">#{item.id} - {item.client}</p>
              <p className="text-sm text-muted-foreground">
                {item.location} • {new Date(item.date).toLocaleString()}
              </p>
            </div>
            <Badge variant="default">Delivered</Badge>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
