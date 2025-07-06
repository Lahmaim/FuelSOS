// src/components/ProfileEditor.tsx
import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";

interface Profile {
  name: string;
  email: string;
  phone: string;
  image?: string;
}

export default function ProfileEditor() {
  const [profile, setProfile] = useState<Profile>({
    name: "",
    email: "",
    phone: "",
    image: "",
  });
  const [image, setImage] = useState<File | null>(null);

  useEffect(() => {
    const storedProfile = localStorage.getItem("providerProfile");
    if (storedProfile) {
      setProfile(JSON.parse(storedProfile));
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setImage(e.target.files[0]);
      const imageUrl = URL.createObjectURL(e.target.files[0]);
      setProfile({ ...profile, image: imageUrl });
    }
  };

  const handleSubmit = () => {
    localStorage.setItem("providerProfile", JSON.stringify(profile));
    toast.success("Profile updated");
    console.log(profile);
  };

  return (
    <Card>
      <CardContent className="p-4 space-y-4">
        <h2 className="text-xl font-semibold">Edit Profile</h2>
        <Input name="name" placeholder="Full Name" value={profile.name} onChange={handleChange} />
        <Input name="email" placeholder="Email" value={profile.email} onChange={handleChange} />
        <Input name="phone" placeholder="Phone Number" value={profile.phone} onChange={handleChange} />
        <Input type="file" onChange={handleImageUpload} />
        <Button onClick={handleSubmit}>Save Changes</Button>
      </CardContent>
    </Card>
  );
}
