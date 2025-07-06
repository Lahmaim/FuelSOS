// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.tsx'

// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )




import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom' // ✅ Import du router
import "./index.css"
// import { toast } from "sonner"
import App from './App.tsx'
import { AuthProvider } from "../src/assets/context/AuthContext.tsx"
import 'react-toastify/dist/ReactToastify.css';
// import { ToastContainer } from 'react-toastify';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        
        <App />
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
)
