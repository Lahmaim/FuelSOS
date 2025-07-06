// // src/components/UserHeader.tsx
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

// interface UserHeaderProps {
//   name: string
//   image?: string
// }

// export default function UserHeader({ name, image }: UserHeaderProps) {
//   return (
//     <div className="flex items-center gap-4 mb-6">
//       <Avatar>
//         {image ? (
//           <AvatarImage src={image} alt={name} />
//         ) : (
//           <AvatarFallback>{name.charAt(0)}</AvatarFallback>
//         )}
//       </Avatar>
//       <div>
//         <div className="text-lg font-medium text-white">{name}</div>
//         <div className="text-sm text-gray-400">FuelSOS Provider</div>
//       </div>
//     </div>
//   )
// }


// src/components/UserHeader.tsx
import { useEffect, useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function UserHeader({name,role}) {
  // const [name, setName] = useState('')
  // const [role, setRole] = useState('')
  const [image, setImage] = useState<string | undefined>()

  useEffect(() => {
    // const storedName = localStorage.getItem("name")
    // const storedRole = localStorage.getItem("role")
    const storedImage = localStorage.getItem("profileImage")

    // if (storedName) setName(storedName)
    // if (storedRole) setRole(storedRole)
    if (storedImage) setImage(storedImage)
  }, [])

  return (
    <div className="flex items-center gap-4 mb-6">
      <Avatar className="w-12 h-12">
        <AvatarImage src={image} alt={name} />
        <AvatarFallback>{name?.charAt(0)}</AvatarFallback>
      </Avatar>
      <div>
        <div className="text-lg font-semibold">{name}</div>
        <div className="text-sm text-gray-400">{role}</div>
      </div>
    </div>
  )
}
