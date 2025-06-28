// import dotenv from "dotenv";
// import connectDB from "./src/config/db.js";
// // import app from "./src/app.js";

// import express from "express";
// import cors from "cors";
// dotenv.config();

// const app = express();
// app.use(express.json());
// app.use(cors());

// app.use("/api/auth", authRoutes);

// const PORT = process.env.PORT 
// connectDB().then(() => {
//   console.log("MongoDB Connected");
//   app.listen(PORT, () => {
//     console.log(`Server running at http://localhost:${PORT}`);
//   });
// });


import express from "express";
import connectDB from "./src/config/db.js";
import dotenv from "dotenv";
import cors from "cors";

import router from "./src/routes/auth.js";
import requestRouter from "./src/routes/requests.js"
import usersRouter from "./src/routes/users.js"
import statsRouter from "./src/routes/statsRoutes.js"


dotenv.config();
const app = express();



app.use(express.json());
app.use(cors());
app.use("/api", router);
app.use ("/api/request",requestRouter)
app.use ("/api/users",usersRouter)
app.use ("/api/stats",statsRouter)

const PORT = process.env.PORT 




// Connect to DB and start server
await connectDB()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    })
    .catch((error) => {
        console.error("Failed to connect to DB", error);
    });

