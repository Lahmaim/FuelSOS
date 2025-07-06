import  { useState, useEffect } from "react";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "react-toastify";

export default function SettingsPage() {
  const [settings, setSettings] = useState({
    darkMode: false,
    language: "English",
  });

  useEffect(() => {
    if (settings.darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [settings.darkMode]);

  const handleSave = () => {
    toast.success("Settings saved!");
  };

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-black text-black dark:text-white">
      {/* Sidebar */}
      {/* <aside className="w-64 bg-white dark:bg-gray-900 border-r p-6">
        <h2 className="text-2xl font-bold mb-10">🚨 FuelSOS</h2>
        <nav className="space-y-2">
          <a href="/dashboard">🏠 Dashboard</a>
          <a href="/profile">👤 Profile</a>
          <a href="/settings" className="font-bold text-blue-600">⚙️ Settings</a>
        </nav>
      </aside> */}

      {/* Main content */}
      <main className="flex-1 p-10">
        <h1 className="text-3xl font-bold mb-8">Settings</h1>

        {/* 🟦 START: Card */}
        <Card className="max-w-xl">
          {/* ✅ HERE is CardContent */}
          <CardContent className="p-6 space-y-6">
            
            {/* Dark Mode Toggle */}
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Enable Dark Mode</span>
              <Switch
                checked={settings.darkMode}
                onCheckedChange={(val) => setSettings(prev => ({ ...prev, darkMode: val }))}
              />
            </div>

            {/* ✅ INSERT LANGUAGE SELECT HERE */}
            <div>
              <label className="text-sm font-medium block mb-1">Preferred Language</label>
              <Select
                value={settings.language}
                onValueChange={(val) => setSettings({ ...settings, language: val })}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a language" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="English">English</SelectItem>
                  <SelectItem value="French">French</SelectItem>
                  <SelectItem value="Arabic">Arabic</SelectItem>
                  <SelectItem value="Spanish">Spanish</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Save Button */}
            <div className="flex justify-end">
              <Button onClick={handleSave}>Save Settings</Button>
            </div>

          </CardContent>
        </Card>
        {/* 🟥 END: Card */}
      </main>
    </div>
  );
}
