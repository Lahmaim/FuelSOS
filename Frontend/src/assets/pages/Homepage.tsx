// import React from "react";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
// import { MapPin, Fuel, Truck, Clock, ShieldCheck, Zap,CreditCard } from "lucide-react";
// // import bg from "/public/bg.png"
// import nn from "../../../public/nn.png"

// // import { MapPin, Truck, CreditCard, Fuel, Banknote } from "lucide-react";
// const HomePage: React.FC = () => {
//   return (
//     <div className="min-h-screen bg-black text-neutral-100 p-6">
//       {/* Header */}
//       <header className="flex justify-between items-center mb-12">
//         <h1 className="text-2xl font-bold text-red-500">FuelSOS</h1>
//         <nav className="space-x-6 text-sm">
//           <a href="/" className="hover:text-red-400">Home</a>
//           <a href="#" className="hover:text-red-400">How it Works</a>
//           <a href="#" className="hover:text-red-400">Request Fuel</a>
//           <a href="#" className="hover:text-red-400">Contact</a>
//           <a href="/login" className="hover:text-red-400">Log in</a>
//         </nav>
//       </header>

//       {/* Hero Section */}
//       <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 items-center">
//         <div>
//           <h2 className="text-4xl font-bold mb-4">Stuck Without Fuel? We've Got You.</h2>
//           <p className="text-lg text-neutral-300 mb-6">
//             Request emergency fuel delivery in minutes anytime anywhere.
//           </p>
//           <Button className="bg-red-600 hover:bg-red-500 text-white text-lg px-6 py-2 rounded-xl">
//             Request Fuel Now
//           </Button>
//         </div>
//         <div style={{backgroundImage:`url(${nn})`}} className="bg-center bg-cover bg-neutral-900 w-xl  h-100 rounded-xll flex items-center justify-center">
//           {/* <MapPin className="text-red-500" size={80} /> */}
//         </div>
//       </section>

//      {/* How It Works */}
// <section className="mb-16">
//   {/* <h3 className=" text-2xl  font-semibold mb-6">How It Works</h3> */}
//   <h3 className="text-2xl font-semibold mb-6 text-center">How It Works</h3>

//   <div className="text-red-500 grid grid-cols-1 md:grid-cols-4 gap-6">
//     {/* Locate Yourself */}
//     <Card className="bg-neutral-900">
//       <CardContent className="p-6 text-center">
//         <MapPin className="text-red-500 mx-auto mb-4" size={40} />
//         <h4 className="text-red-500 font-semibold text-lg mb-2">Locate Yourself</h4>
//         <p className="text-sm text-neutral-400">
//           We use your GPS location or you can manually enter your location.
//         </p>
//       </CardContent>
//     </Card>

//     {/* Choose Fuel */}
//     <Card className="bg-neutral-900">
//       <CardContent className="p-6 text-center">
//         <Fuel className="text-red-500 mx-auto mb-4" size={40} />
//         <h4 className="text-red-500 font-semibold text-lg mb-2">Choose Fuel</h4>
//         <p className="text-sm text-neutral-400">
//           Select the type of fuel you need for your vehicle.
//         </p>
//       </CardContent>
//     </Card>

//     {/* Get Delivered */}
//     <Card className="bg-neutral-900">
//       <CardContent className="p-6 text-center">
//         <Truck className="text-red-500 mx-auto mb-4" size={40} />
//         <h4 className="text-red-500 font-semibold text-lg mb-2">Get Delivered</h4>
//         <p className="text-sm text-neutral-400">
//           Our delivery team will bring fuel directly to your location.
//         </p>
//       </CardContent>
//     </Card>

//     {/* Payment Mode */}
//     <Card className="bg-neutral-900">
//       <CardContent className="p-6 text-center">
//         <CreditCard className="text-red-500 mx-auto mb-4" size={40} />
//         <h4 className="text-red-500 font-semibold text-lg mb-2">Choose Payment</h4>
//         <p className="text-sm text-neutral-400">
//           Pay online or with cash upon delivery  whatever suits you best.
//         </p>
//       </CardContent>
//     </Card>
//   </div>
// </section>

//       {/* Features Section */}
//       <section className="mb-16">
//         <h3 className=" text-2xl font-semibold mb-6 text-center">Features</h3>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           <Card className="bg-neutral-900">
//             <CardContent className="p-6 text-center">
//               <Zap className="text-red-500 mx-auto mb-4" size={40} />
//               <h4 className=" text-red-500 font-semibold text-lg mb-2">Fast Delivery</h4>
//               <p className="text-sm text-neutral-400">
//                 Quick response time to get you back on your route.
//               </p>
//             </CardContent>
//           </Card>
//           <Card className="bg-neutral-900">
//             <CardContent className="p-6 text-center">
//               <Clock className="text-red-500 mx-auto mb-4" size={40} />
//               <h4 className="text-red-500 font-semibold text-lg mb-2">Real-Time Tracking</h4>
//               <p className="text-sm text-neutral-400">
//                 Track your fuel delivery in real time on your phone.
//               </p>
//             </CardContent>
//           </Card>
//           <Card className="bg-neutral-900">
//             <CardContent className="p-6 text-center">
//               <ShieldCheck className="text-red-500 mx-auto mb-4" size={40} />
//               <h4 className="text-red-500 font-semibold text-lg mb-2">24/7 Support</h4>
//               <p className="text-sm text-neutral-400">
//                 Our team is available to assist you at any time.
//               </p>
//             </CardContent>
//           </Card>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="border-t border-neutral-800 pt-6 text-sm text-neutral-500">
//         <div className="flex justify-between items-center flex-wrap">
//           <div className="mb-2 md:mb-0">&copy; 2025 FuelSOS</div>
//           <div className="space-x-4">
//             <a href="#">Privacy Policy</a>
//             <a href="#">Terms of Service</a>
//             <a href="#">Support</a>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default HomePage;


import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  MapPin,
  Fuel,
  Truck,
  Clock,
  ShieldCheck,
  Zap,
  CreditCard,
} from "lucide-react";
import nn from "../../../public/nn.png";
import { AuthContext } from ".././context/AuthContext"; // ✅ Make sure this is correct

const HomePage: React.FC = () => {
  const { userInfo } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleRequestClick = () => {
    if (!userInfo) {
      navigate("/login");
    } else {
      navigate("/login"); // ✅ Or your actual fuel request page
    }
  };

  return (
    <div className="min-h-screen bg-black text-neutral-100 p-6">
      {/* Header */}
      <header className="flex justify-between items-center mb-12">
        <h1 className="text-2xl font-bold text-red-500">FuelSOS</h1>
        <nav className="space-x-6 text-sm">
          <a href="/" className="hover:text-red-400">Home</a>
          <a href="#how" className="hover:text-red-400">How it Works</a>
          <a href="#features" className="hover:text-red-400">Features</a>
          <a href="#contact" className="hover:text-red-400">Contact</a>
          <a href="/login" className="hover:text-red-400">Log in</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 items-center">
        <div>
          <h2 className="text-4xl font-bold mb-4">Stuck Without Fuel? We've Got You.</h2>
          <p className="text-lg text-neutral-300 mb-6">
            Request emergency fuel delivery in minutes anytime anywhere.
          </p>
          <Button
            className="bg-red-600 hover:bg-red-500 text-white text-lg px-6 py-2 rounded-xl"
            onClick={handleRequestClick}
          >
            Request Fuel Now
          </Button>
        </div>
        <div
          style={{ backgroundImage: `url(${nn})` }}
          className="bg-center bg-cover bg-neutral-900 w-xl h-100 rounded-xl flex items-center justify-center"
        />
      </section>

      {/* How It Works */}
      <section className="mb-16" id="how">
        <h3 className="text-2xl font-semibold mb-6 text-center">How It Works</h3>
        <div className="text-red-500 grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="bg-neutral-900">
            <CardContent className="p-6 text-center">
              <MapPin className="text-red-500 mx-auto mb-4" size={40} />
              <h4 className="text-red-500 font-semibold text-lg mb-2">Locate Yourself</h4>
              <p className="text-sm text-neutral-400">
                We use your GPS location or you can manually enter your location.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-neutral-900">
            <CardContent className="p-6 text-center">
              <Fuel className="text-red-500 mx-auto mb-4" size={40} />
              <h4 className="text-red-500 font-semibold text-lg mb-2">Choose Fuel</h4>
              <p className="text-sm text-neutral-400">
                Select the type of fuel you need for your vehicle.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-neutral-900">
            <CardContent className="p-6 text-center">
              <Truck className="text-red-500 mx-auto mb-4" size={40} />
              <h4 className="text-red-500 font-semibold text-lg mb-2">Get Delivered</h4>
              <p className="text-sm text-neutral-400">
                Our delivery team will bring fuel directly to your location.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-neutral-900">
            <CardContent className="p-6 text-center">
              <CreditCard className="text-red-500 mx-auto mb-4" size={40} />
              <h4 className="text-red-500 font-semibold text-lg mb-2">Choose Payment</h4>
              <p className="text-sm text-neutral-400">
                Pay online or with cash upon delivery—whatever suits you best.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Features Section */}
      <section className="mb-16" id="features">
        <h3 className="text-2xl font-semibold mb-6 text-center">Features</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-neutral-900">
            <CardContent className="p-6 text-center">
              <Zap className="text-red-500 mx-auto mb-4" size={40} />
              <h4 className="text-red-500 font-semibold text-lg mb-2">Fast Delivery</h4>
              <p className="text-sm text-neutral-400">
                Quick response time to get you back on your route.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-neutral-900">
            <CardContent className="p-6 text-center">
              <Clock className="text-red-500 mx-auto mb-4" size={40} />
              <h4 className="text-red-500 font-semibold text-lg mb-2">Real-Time Tracking</h4>
              <p className="text-sm text-neutral-400">
                Track your fuel delivery in real time on your phone.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-neutral-900">
            <CardContent className="p-6 text-center">
              <ShieldCheck className="text-red-500 mx-auto mb-4" size={40} />
              <h4 className="text-red-500 font-semibold text-lg mb-2">24/7 Support</h4>
              <p className="text-sm text-neutral-400">
                Our team is available to assist you at any time.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-800 pt-6 text-sm text-neutral-500">
        <div className="flex justify-between items-center flex-wrap">
          <div className="mb-2 md:mb-0">&copy; 2025 FuelSOS</div>
          <div className="space-x-4">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Support</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
