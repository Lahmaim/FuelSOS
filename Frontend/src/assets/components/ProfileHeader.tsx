import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

// type ProfileHeaderProps = {
//   name: string;
//   role?: string;
//   imageUrl?: string;
// };

export default function ProfileHeader() {
  const {userInfo}=useContext(AuthContext)
  console.log(userInfo.name);
  
  return (
    <div className="flex items-center justify-end gap-2 ">
      <div>
        <h2 className="text-xl font-bold">{userInfo.name}</h2>
        <p className="text-gray-500 text-sm capitalize">{userInfo.role}</p>
      </div>

      <Avatar className="h-15 w-15">
        {/* /<AvatarImage src={imageUrl} alt={name} /> */}
        <AvatarFallback>{name.charAt(0).toUpperCase()}</AvatarFallback>
      </Avatar>
    </div>
  );
}
