# FuelSOS
1. Nom du projet : FuelSOS
📅 3-Week Agile Backlog (Web App Version)
✅ Week 1: Auth, Setup, and Base Infrastructure
Backend
 Setup Express project and MongoDB connection

 Create User model (with role: "user" or "provider")

 JWT Authentication: register & login APIs

 Auth middleware for protected routes

 Setup .env and CORS

Frontend
 Create React app with Vite + Tailwind CSS

 Setup React Router DOM

 Pages: Login, Register

 Axios service and auth API integration

 Auth Context for login persistence

✅ Week 2: Fuel Request & Provider Management
Backend
 Create FuelRequest model

 API:

POST /fuel/request – user creates a request

GET /fuel/nearby – provider sees nearby requests

POST /fuel/accept/:id – provider accepts request

GET /fuel/status/:id – check status

 Add location to requests (GeoJSON)

Frontend
 User dashboard: map + form to request fuel

 Use browser Geolocation API

 Provider dashboard: see nearby requests

 Accept and track request status

 Display request history for user and provider

✅ Week 3: Polish, Payment, and Admin
Backend
 Add Stripe/Razorpay integration (optional)

 History routes for users/providers

 Admin route: list all requests, users

 Improve error handling & validation

Frontend
 Payment screen (mock or real)

 Add admin dashboard (if role = admin)

 Style enhancements & mobile responsive design

 Testing: unit/API testing with Jest/Postman

 Prepare for deployment (Vercel + Render)

🧠 Optional Tools
| Tool               | Use             |
| ------------------ | --------------- |
| MongoDB Atlas      | Cloud DB        |
| Google Maps JS API | Map & distance  |
| Stripe/Razorpay    | Payment         |
| Postman            | API testing     |
| Vercel/Netlify     | Deploy frontend |
| Render/Fly.io      | Deploy backend  |

