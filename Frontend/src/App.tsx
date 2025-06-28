import { Routes, Route } from 'react-router-dom';
import HomePage from './assets/pages/Homepage.tsx';
import SignupForm from './assets/pages/Signup.tsx';
import Login from './assets/pages/Login.tsx';
import Admin from './assets/pages/Dashboardadmin.tsx';

import Client from './assets/pages/client/ClientDashboard.tsx';
import DistanceCalculator from './assets/components/DistanceCalculator.tsx';

import ProfilePage from "./assets/pages/ProfilePage.tsx"
import SettingsPage from "./assets/pages/SettingsPage.tsx"




function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<SignupForm />} />
      <Route path="/login" element={<Login />} />
      <Route path="/admin/*" element={<Admin />} />
      {/* <Route path="/provider" element={<ProviderDashboard/>} /> */}
      <Route path="/client" element={<Client />} />
      <Route path="/distance" element={<DistanceCalculator />} />
     <Route path="/profile" element={<ProfilePage />} />
      <Route path="/settings" element={<SettingsPage />} />
     
    </Routes>
  );
}

export default App;
