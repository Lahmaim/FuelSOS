import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";
import { Eye, EyeOff } from "lucide-react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { useAuth } from "../context/AuthContext"; // your custom hook

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const { setUser, user } = useAuth(); // ✅ Use your custom hook inside component

  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async () => {
    setError("");
    if (!form.email || !form.password) {
      setError("Please enter email and password.");
      return;
    }

    try {
      const res = await axios.post("http://localhost:5000/api/login", form);
      const token = res.data.token;
      localStorage.setItem("token", token);

      const decoded = jwtDecode(token);
      const user = {
        id: decoded.id,
        // name: decoded.name,
        // email: decoded.email,
        role: decoded.role,
      };

      setUser(user); // ✅ Update user in context

      toast.success("Logged in successfully!");

      // Redirect by role
      if (user.role === "admin") {
        navigate("/admin");
      } else if (user.role === "provider") {
        navigate("/provider");
      } else if (user.role === "client") {
        navigate("/client");
      } else {
        navigate("/");
      }
    } catch (err: any) {
      toast.error(err.response?.data?.message || "Login failed.");
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4">
      <Card className="w-full max-w-md bg-neutral-900 border border-neutral-800">
        <CardContent className="space-y-4 p-6">
          <h2 className="text-xl font-bold mb-2 text-white">Login</h2>
          <Input
            className="text-white"
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
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
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <Button onClick={handleLogin} className="w-full bg-red-600 hover:bg-red-500">
            Log In
          </Button>
          <p className="text-sm text-gray-400 text-center">
            Don’t have an account?{" "}
            <a href="/signup" className="underline text-white">
              Sign up
            </a>
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginPage;
