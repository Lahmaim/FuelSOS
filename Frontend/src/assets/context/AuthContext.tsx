// import { createContext, useContext, useState } from "react";

// export const AuthContext = createContext(null);

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState({ name: "John Doe" });

//   return (
//     <AuthContext.Provider value={{ user, setUser }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);


// src/context/AuthContext.tsx
// src/context/AuthContext.tsx






// import  { createContext, useState, useContext, ReactNode, useEffect } from "react";
// import {jwtDecode} from "jwt-decode";

// export const AuthContext = createContext(null);  // <-- This must be exported

// export const AuthProvider = ({ children }: { children: ReactNode }) => {
//   const [user, setUser] = useState(null);


//   useEffect(() => {
// //     const token = localStorage.getItem("token");




//     if (token) {
//       try {
//         const decoded: any = jwtDecode(token);
//         // Optionally verify token expiry here
//         setUser({
//           id: decoded.id,
//           name: decoded.name,
//           email: decoded.email,
//           role: decoded.role,
//         });
//       } catch (error) {
//         // Invalid token, remove it
//         localStorage.removeItem("token");
//         setUser(null);
//       }
//     }
//   }, []);
//   return (
//     <AuthContext.Provider value={{ user, setUser }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => {
//   const context = useContext(AuthContext);
//   if (!context) throw new Error("useAuth must be used within AuthProvider");
//   return context;
// };




import { createContext, useState, useContext,type ReactNode, useEffect } from "react";
import {jwtDecode} from "jwt-decode";
import axios from "axios";

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
}

interface AuthContextType {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
}

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [userInfo, setUserInfo]=useState({})
  const [userToken, setUserToken]=useState('')

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decoded: any = jwtDecode(token);
        // Optionally verify token expiry here
        setUser({
          id: decoded.id,
          name: decoded.name,
          email: decoded.email,
          role: decoded.role,
        });
        setUserToken(token)

  axios.get(`http://localhost:5000/api/users/${decoded.id}/profile`, {
                        headers: { Authorization: `Bearer ${token}` },
                    })
                    .then((res) => setUserInfo(res.data))
                    .catch((error) => error);


      } catch (error) {
        // Invalid token, remove it
        localStorage.removeItem("token");
        setUser(null);
      }
    }
  }, []);
console.log(userInfo);

  return (
    <AuthContext.Provider value={{ user, setUser,userInfo,setUserInfo,userToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
};











































































// import { createContext, useEffect, useState } from "react";
// import { jwtDecode } from "jwt-decode";
// import axios from "axios";

// export const AutContext = createContext();

// export default function AuthContext({ children }) {
//     const [role, setRole] = useState("");
//     const [userId, setUserId] = useState("");
//     const [tokenUser, setTokenUser] = useState(
//         localStorage.getItem("token") || ""
//     );

//     const [user, setuser] = useState(null);

//     //user login info
//     useEffect(() => {
//         const token = localStorage.getItem("token");
//         if (token) {
//             try {
//                 const decoded = jwtDecode(token);

//                 setRole(decoded.role);

//                 setUserId(decoded.id);

//                 setTokenUser(token);

//                 axios
//                     .get(`http://localhost:5000/api/users/${decoded.id}`, {
//                         headers: { Authorization: `Bearer ${token}` },
//                     })
//                     .then((res) => setuser(res.data))
//                     .catch((error) => error);
//             } catch (error) {
//                 console.error("Invalid token");
//             }
//         }
//     }, [tokenUser]);

//     return (
//         <>
//             <AutContext.Provider
//                 value={{ role, userId, setTokenUser, tokenUser, user }}
//             >
//                 {children}
//             </AutContext.Provider>
//         </>
//     );
// }