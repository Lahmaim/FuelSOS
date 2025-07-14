// import { Routes, Route } from 'react-router-dom';
// import HomePage from './assets/pages/Homepage.tsx';
// import SignupForm from './assets/pages/Signup.tsx';
// import Login from './assets/pages/Login.tsx';
// import Admin from './assets/pages/Dashboardadmin.tsx';

// import Client from './assets/pages/client/ClientDashboard.tsx';
// import DistanceCalculator from './assets/components/DistanceCalculator.tsx';

// import ProfilePage from "./assets/pages/ProfilePage.tsx"
// import SettingsPage from "./assets/pages/SettingsPage.tsx"

// import  Providerdach from "./assets/pages/provider/ProviderDashboard.tsx";

// import { Toaster } from "sonner"

// function App() {
//   return (
//     <Routes>
//       <Route path="/" element={<HomePage />} />
//       <Route path="/signup" element={<SignupForm />} />
//       <Route path="/login" element={<Login />} />
//       <Route path="/admin/*" element={<Admin />} />
//       <Route path="/provider" element={<Providerdach/>} />
//       <Route path="/client" element={<Client />} />
//       <Route path="/distance" element={<DistanceCalculator />} />
//      <Route path="/profile" element={<ProfilePage />} />
//      <Route path="/provider/*" element={<Providerdach />} />
//       <Route path="/settings" element={<SettingsPage />} />
//       <Toaster position="top-right" theme="dark" />
//         {pages.map(({ path, component }) => (
//     <Route key={path} path={path} element={React.createElement(component)} />
//   ))}
     
//     </Routes>
//   );*
// }

// export default App;


// import {  Routes, Route } from 'react-router-dom';
// import HomePage from './assets/pages/Homepage.tsx';
// import SignupForm from './assets/pages/Signup.tsx';
// import Login from './assets/pages/Login.tsx';
// import Admin from './assets/pages/admin/Dashboardadmin.tsx';
// import Client from './assets/pages/client/ClientDashboard.tsx';
// // import DistanceCalculator from './assets/components/DistanceCalculator.tsx';
// import SettingsPage from "./assets/pages/SettingsPage.tsx";
// import { Toaster } from "sonner";
// import FuelRequest from './assets/pages/client/FuelRequest.tsx';
// import ProfilePage from './assets/pages/ProfilePage.tsx';

// import ProviderDashboard from ".././src/assets/pages/provider/Dashboard.tsx";
// import Deliveries from './assets/pages/provider/Deliveries.tsx';
// import NearbyRequests from './assets/pages/provider/NearbyRequests.tsx';
// import MyDeliveries from './assets/pages/provider/MyDeliveries.tsx';
// function App() {
//   return (
//     <>

//         <Routes>
//           <Route path="/" element={<HomePage />} />
//           <Route path="/signup" element={<SignupForm />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/admin/*" element={<Admin />} />
//           <Route path="/provider/*" element={<ProviderDashboard />} />
//           <Route path="/client/*" element={<Client />} >
//          <Route path="request" element={<FuelRequest />} />
//         <Route path="profile" element={<ProfilePage />} />
//         <Route path="deliveries" element={<Deliveries />} />
//         <Route path="nearby" element={<NearbyRequests />} />
//         <Route path="history" element={<MyDeliveries />} />
       
//          </Route>
//           {/* <Route path="/distance" element={<DistanceCalculator />} /> */}
         
//           <Route path="/settings" element={<SettingsPage />} />
//         </Routes>

//       <Toaster position="top-right" theme="dark" />
//     </>
//   );
// }

// export default App;




import { Routes, Route } from "react-router-dom";
import HomePage from "./assets/pages/Homepage.tsx";
import SignupForm from "./assets/pages/Signup.tsx";
import Login from "./assets/pages/Login.tsx";
import Admin from "./assets/pages/admin/Dashboardadmin.tsx";
import Client from "./assets/pages/client/ClientDashboard.tsx";
// import FuelRequest from "./assets/pages/client/FuelRequest.tsx";
import ProfilePage from "./assets/pages/ProfilePage.tsx";
import SettingsPage from "./assets/pages/SettingsPage.tsx";
import ProviderDashboard from "./assets/pages/provider/Dashboard.tsx";
import Deliveries from "./assets/pages/provider/Deliveries.tsx";
import NearbyRequests from "./assets/pages/provider/NearbyRequests.tsx";
// import MyDeliveries from "./assets/pages/provider/MyDeliveries.tsx";
// import ProfileEditor from "./assets/components/ProfileEditor.tsx"; // Add this
import History from "./assets/pages/provider/History.tsx"; // Create this
import { Toaster } from "sonner";

import RequestFuelModal from "./assets/components/RequestFuelModal.tsx";
import RequestTable from "./assets/components/Taibelreuist.tsx";

function App() {
  return (
    <>
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/login" element={<Login />} />

        {/* Admin */}
        <Route path="/admin/*" element={<Admin />} />

        {/* Provider layout with nested routes */}
        <Route path="/provider/*" element={<ProviderDashboard />}>
          {/* <Route index element={<Deliveries />} />  */}
          <Route index element={<RequestTable />} /> {/* Default */}
          {/* <Route path="deliveries" element={<Deliveries />} /> */}
          <Route path="deliveries" element={<Deliveries />} />
          {/* <Route path="history" element={<MyDeliveries />} /> */}

          <Route path="nearby" element={<NearbyRequests />} />
         <Route path="profile" element={<ProfilePage />} />

          <Route path="history" element={<History />} />
          {/* <Route path="profile" element={<ProfileEditor />} /> */}
        </Route>

        {/* Client layout with nested routes */}
        <Route path="/client/*" element={<Client />}>
          {/* <Route path="request" element={<FuelRequest />} /> */}
          <Route path="profile" element={<ProfilePage />} />
          <Route path="nearby" element={<NearbyRequests />} />
           <Route path="settings" element={<SettingsPage />} />
          <Route path="request" element={<RequestFuelModal />} />

        </Route>

        {/* Settings */}
        <Route path="/settings" element={<SettingsPage />} />
      </Routes>

      <Toaster position="top-right" theme="dark" />
    </>
  );
}

export default App;
