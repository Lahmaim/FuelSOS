import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { toast } from "sonner"
import { Eye, EyeOff } from "lucide-react"
import axios from "axios"

const SignupPage: React.FC = () => {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    role: "",
  })
  const [error, setError] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const handleSignup = async () => {
    setError("")
    const { name, email, phone, password, confirmPassword, role } = form

    if (!name || !email || !phone || !password || !confirmPassword || !role) {
      setError("Please fill out all fields.")
      return
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match.")
      return
    }

    try {
      const res = await axios.post("http://localhost:5000/api/register", {
        name, email, phone, password, role,
      })
      localStorage.setItem("token", res.data.token)
      localStorage.setItem("userId", res.data.user._id)
      toast.success("Account created successfully!")
      navigate("/login")
      console.log(res);
      
    } catch (err: any) {
      toast.error(err.response?.data?.message || "Signup failed.")
    }
  }

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4">
      <Card className="w-full max-w-md bg-neutral-900 border border-neutral-800">
        <CardContent className="space-y-4 p-6">
          <h2 className="text-xl font-bold mb-2 text-white">Sign Up</h2>
          <Input
            className="text-white"
            placeholder="Full Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          <Input type="email"
            className="text-white"
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          <Input
            className="text-white"
            placeholder="Phone"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
          />
          <Select onValueChange={(value) => setForm({ ...form, role: value })}>
            <SelectTrigger>
              <SelectValue placeholder="Select Role" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="client">Client</SelectItem>
              <SelectItem value="provider">Provider</SelectItem>
            </SelectContent>
          </Select>
          <div className="relative">
            <Input
              className="text-white"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
            />
            <button
              type="button"
              className="absolute right-3 top-2.5 text-neutral-500"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
          <div className="relative">
            <Input
              className="text-white"
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm Password"
              value={form.confirmPassword}
              onChange={(e) => setForm({ ...form, confirmPassword: e.target.value })}
            />
            <button
              type="button"
              className="absolute right-3 top-2.5 text-neutral-500"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <Button onClick={handleSignup} className="w-full bg-red-600 hover:bg-red-500">
            Create Account
          </Button>
          <p className="text-sm text-gray-400 text-center">
            Already have an account? <a href="/login" className="underline text-white">Log in</a>
          </p>
        </CardContent>
      </Card>
    </div>
  )
}

export default SignupPage
