import React, { useState } from "react";
import { useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { Eye, EyeOff } from "lucide-react";

const AuthPage: React.FC = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    role: ""
  });
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: ""
  });
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showLoginPassword, setShowLoginPassword] = useState(false);

  const handleSignup = async () => {
    setError("");
    if (!form.name || !form.email || !form.password || !form.confirmPassword || !form.role) {
      setError("Please fill out all fields.");
      return;
    }
    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    try {
      await new Promise((res) => setTimeout(res, 500)); // simulate network delay
      toast.success("Account created successfully!");
     navigate("/dashboard");
    } catch (err: any) {
      toast.error("Signup failed");
    }
  };

  const handleLogin = async () => {
    setError("");
    if (!loginForm.email || !loginForm.password) {
      setError("Please enter email and password.");
      return;
    }
    try {
      await new Promise((res) => setTimeout(res, 500)); // simulate network delay
      toast.success("Logged in successfully!");
      navigate("/dashboard");
    } catch (err: any) {
      toast.error("Login failed");
    }
  };
const [activeTab, setActiveTab] = useState("login");

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <Tabs onValueChange={setActiveTab} defaultValue="login" className="w-full">
          <TabsList className="grid grid-cols-2 mb-6 bg-neutral-900 ">
            <TabsTrigger className={activeTab === "login" ? "text-black" : "text-gray-400"} value="login">Login</TabsTrigger>
            <TabsTrigger  className={activeTab === "signup" ? "text-black" : "text-gray-400"}
 value="signup">Sign Up</TabsTrigger>
          </TabsList>

          {/* Login */}
          <TabsContent value="login">
            <Card className="bg-neutral-900 border border-neutral-800">
              <CardContent className="space-y-4 p-6">
                <Input className="text-white"
                  placeholder="Email"
                  value={loginForm.email}
                  onChange={(e) => setLoginForm({ ...loginForm, email: e.target.value })}
                />
                <div className="relative">
                  <Input className="text-white"
                    type={showLoginPassword ? "text" : "password"}
                    placeholder="Password"
                    value={loginForm.password}
                    onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-2.5 text-neutral-500"
                    onClick={() => setShowLoginPassword(!showLoginPassword)}
                  >
                    {showLoginPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
                {error && <p className="text-red-500 text-sm">{error}</p>}
                <Button onClick={handleLogin} className="w-full bg-red-600 hover:bg-red-500">
                  Log In
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Sign Up */}
          <TabsContent value="signup" >
            <Card className="bg-neutral-900 border border-neutral-800">
              <CardContent className="space-y-4 p-6">
                <Input className="text-white"
                  placeholder="Full Name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
                <Input className="text-white"
                  placeholder="Email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
                <Input className="text-white"
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
                  <Input className="text-white"
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
                  <Input className="text-white"
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
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AuthPage;
