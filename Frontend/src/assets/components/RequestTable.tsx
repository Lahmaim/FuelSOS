import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"

type Request = {
  _id: string
  client: {
    name: string
    email: string
  }
  provider: {
    name: string
    email: string
  }
  status: string
  createdAt: string
}

const statusColor = {
  Pending: "bg-gray-200 text-gray-800",
  Accepted: "bg-blue-200 text-blue-800",
  Completed: "bg-green-200 text-green-800",
}

export function RequestTable() {
  const [requests, setRequests] = useState<Request[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch("http://localhost:5000/api/request", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`, // Adjust to your auth setup
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setRequests(data)
        setLoading(false)
      })
      .catch((err) => {
        console.error("Failed to load requests:", err)
        setLoading(false)
      })
  }, [])

  if (loading) return <p className="text-sm text-muted">Loading requests...</p>

  return (
    <Card>
      <CardContent className="p-4 overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-gray-500">
              <th className="py-2">Client</th>
              <th>Provider</th>
              <th>Status</th>
              <th>Created</th>
            </tr>
          </thead>
          <tbody>
            {requests.map((req) => (
              <tr key={req._id} className="border-t">
                <td className="py-2">{req.client?.name || "—"}</td>
                <td>{req.provider?.name || "Unassigned"}</td>
                <td>
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${statusColor[req.status] || "bg-gray-100 text-gray-600"}`}
                  >
                    {req.status}
                  </span>
                </td>
                <td>{new Date(req.createdAt).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </CardContent>
    </Card>
  )
}
