// import  { useState,type ChangeEvent } from "react";
// import axios from "axios";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
// // import { Separator } from "@/components/ui/separator";
// import { toast } from "react-toastify"; // if using a toast library

// export default function ProfilePage() {
//   // Profile data state
//   const [profile, setProfile] = useState({
//     name: "John Doe",
//     email: "john.doe@example.com",
//     phone: "+1 123 456 7890",
//     avatar: "", // This will store a base64 image string after upload
//   });

//   // For toggling edit mode
//   const [editing, setEditing] = useState(false);

//   // For previewing image file upload
//   const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0];
//     if (!file) return;

//     // Create a FileReader to convert the file into base64 format
//     const reader = new FileReader();
//     reader.onloadend = () => {
//       setProfile((prev) => ({
//         ...prev,
//         avatar: reader.result as string,
//       }));
//     };
//     reader.readAsDataURL(file);
//   };

//   // Update field values for text-based inputs
//   const handleInputChange = (field: string, value: string) => {
//     setProfile((prev) => ({
//       ...prev,
//       [field]: value,
//     }));
//   };

//   // Save changes to backend using Axios
//   const saveProfile = async () => {
//     try {
//       // Replace with your API endpoint and payload
//       await axios.put("/api/user/profile", profile);
//       toast.success("Profile updated successfully!");
//     } catch (error) {
//       toast.error("Error updating profile");
//     }
//   };

//   // Toggle edit mode and save if leaving editing mode
//   const handleEditToggle = async () => {
//     // If we're saving the edit, call saveProfile
//     if (editing) {
//       await saveProfile();
//     }
//     setEditing(!editing);
//   };

//   return (
//     <div className="flex min-h-screen bg-gray-50">
//       {/* Sidebar */}
//       <aside className="w-64 bg-white border-r p-6">
//         <h2 className="text-2xl font-bold mb-10">🚨 FuelSOS</h2>
//         <nav className="space-y-2">
//           <button className="flex items-center w-full text-left text-gray-600 hover:text-black">
//             🏠 Dashboard
//           </button>
//           <button className="flex items-center w-full text-left text-black font-medium bg-gray-100 rounded px-2 py-1">
//             👤 Profile
//           </button>
//           <button className="flex items-center w-full text-left text-gray-600 hover:text-black">
//             ⚙️ Settings
//           </button>
//         </nav>
//       </aside>

//       {/* Main Content */}
//       <main className="flex-1 p-10">
//         <h1 className="text-3xl font-bold mb-8">Profile</h1>
//         <div className="flex flex-col items-center gap-4">
//           {/* Avatar section */}
//           <div className="w-28 h-28 rounded-full bg-gray-200 overflow-hidden">
//             {profile.avatar ? (
//               <img
//                 src={profile.avatar}
//                 alt="Avatar"
//                 className="w-full h-full object-cover"
//               />
//             ) : (
//               <div className="w-full h-full flex items-center justify-center text-4xl text-white">
//                 👤
//               </div>
//             )}
//           </div>

//           {/* Image Upload Input */}
//           {editing && (
//             <input
//               type="file"
//               accept="image/*"
//               onChange={handleImageUpload}
//               className="mb-4"
//             />
//           )}

//           <h2 className="text-xl font-semibold">{profile.name}</h2>
//         </div>

//         <Card className="max-w-xl mt-10 mx-auto">
//           <CardContent className="p-6 space-y-6">
//             <div>
//               <label className="text-sm font-medium block mb-1">Full Name</label>
//               <Input
//                 value={profile.name}
//                 onChange={(e) => handleInputChange("name", e.target.value)}
//                 readOnly={!editing}
//               />
//             </div>

//             <div>
//               <label className="text-sm font-medium block mb-1">Email Address</label>
//               <Input
//                 value={profile.email}
//                 onChange={(e) => handleInputChange("email", e.target.value)}
//                 readOnly={!editing}
//               />
//             </div>

//             <div>
//               <label className="text-sm font-medium block mb-1">Phone Number</label>
//               <Input
//                 value={profile.phone}
//                 onChange={(e) => handleInputChange("phone", e.target.value)}
//                 readOnly={!editing}
//               />
//             </div>

//             <div className="flex justify-end">
//               <Button variant="outline" onClick={handleEditToggle}>
//                 {editing ? "Save" : "Edit Profile"}
//               </Button>
//             </div>
//           </CardContent>
//         </Card>
//       </main>
//     </div>
//   );
// }


import { useContext, useEffect, useState, type ChangeEvent } from "react";
import axios from "axios";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "react-toastify";
import { AuthContext } from "../context/AuthContext";



export default function ProfilePage() {
  const {userInfo, setUserInfo,userToken}=useContext(AuthContext)
   console.log(userInfo);
  const [profile, setProfile] = useState({
    name: userInfo.name,
    email: userInfo.email,
    phone: userInfo.phone,
    avatar: "",
  });

  useEffect(() => {
  if (userInfo) {
    setProfile({
      name: userInfo.name,
      email: userInfo.email,
      phone: userInfo.phone,
      avatar: userInfo.avatar || "",
    });
  }
}, [userInfo]);

  const [editing, setEditing] = useState(false);

  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setProfile((prev) => ({
        ...prev,
        avatar: reader.result as string,
      }));
    };
    reader.readAsDataURL(file);
  };

  const handleInputChange = (field: string, value: string) => {
    setProfile((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  // const saveProfile = async () => {
  //   try {
  //     await axios.put(`http://localhost:5000/api/users/${userInfo._id}/profile`, profile);
  //     toast.success("Profile updated successfully!");
  //   } catch {
  //     toast.error("Error updating profile");
  //   }
  // };

const saveProfile = async () => {
  console.log(userToken);
  
  try {
    const { data } = await axios.put(
      `http://localhost:5000/api/users/${userInfo._id}/profile`,
      profile,{
                        headers: { Authorization: `Bearer ${userToken}` },
                    }
    );
    toast.success("Profile updated successfully!");
    // Update context with new user info:
    setUserInfo(data);
  } catch {
    toast.error("Error updating profile");
  }
};

  const handleEditToggle = async () => {
    if (editing) {
      await saveProfile();
    }
    setEditing(!editing);
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-start px-4 bg-gray-50 py-10">
      <h1 className="text-3xl font-bold mb-6">Profile</h1>

      {/* Avatar + Upload */}
      <div className="flex flex-col items-center gap-4 mb-6">
        <div className="w-28 h-28 rounded-full bg-gray-200 overflow-hidden">
          {profile.avatar ? (
            <img src={profile.avatar} alt="Avatar" className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-4xl text-white">
              👤
            </div>
          )}
        </div>
        {editing && (
          
          // <input
          // type="file"
          // accept="image/*"
          // onChange={handleImageUpload}
          // className="text-sm text-gray-600"
          // />
<div className="space-y-2">
  <label htmlFor="file-upload" className="block text-sm font-medium text-gray-700">
    
  </label>

  <div className="flex items-center gap-4">
    <label
      htmlFor="file-upload"
      className="cursor-pointer inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md shadow hover:bg-blue-700 transition"
    >
       Choose File
    </label>

    <span className="text-sm text-gray-600" id="file-name">
      {/* You can show selected file name here */}
    </span>
  </div>

  <input
    id="file-upload"
    type="file"
    accept="image/*"
    onChange={handleImageUpload}
    className="hidden"
  />
</div>

          
        )}
        <h2 className="text-xl font-semibold">{profile.name}</h2>
      </div>

      {/* Form Card */}
      <Card className="w-full max-w-xl">
        <CardContent className="p-6 space-y-6">
          <div>
            <label className="text-sm font-medium block mb-1">Full Name</label>
            <Input
              value={profile.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
              readOnly={!editing}
            />
          </div>

          <div>
            <label className="text-sm font-medium block mb-1">Email Address</label>
            <Input
              value={profile.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              readOnly={!editing}
            />
          </div>

          <div>
            <label className="text-sm font-medium block mb-1">Phone Number</label>
            <Input
              value={profile.phone}
              onChange={(e) => handleInputChange("phone", e.target.value)}
              readOnly={!editing}
            />
          </div>

          <div className="flex justify-end">
            <Button variant="outline" onClick={handleEditToggle}>
              {editing ? "Save" : "Edit Profile"}
            </Button>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
