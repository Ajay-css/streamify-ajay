import express from "express";
import "dotenv/config";
import cookieParser from "cookie-parser";
import cors from "cors";
import { connectDB } from "./config/db.js";

import authRoutes from "./routes/auth.route.js";
import userRoutes from "./routes/user.route.js";
import chatRoutes from "./routes/chat.route.js";

const app = express();

app.use(
    cors({
        origin: "http://localhost:5173",
        credentials: true, // allow frontend to send cookies
    })
);
app.use(express.json());
app.use(cookieParser());

await connectDB();

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/chat", chatRoutes);

app.get('/', (req, res) => res.send('<h1>Server is Working Fine!</h1>'))

const port = process.env.PORT || 5001

app.listen(port, () => console.log(`Server is Running on http://localhost:${port}`));