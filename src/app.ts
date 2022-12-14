import express from "express";
import { connectToDatabase } from "./utils/database";
import shutdownGracefully from "./utils/shutdownGracefully";
import cookieParser from "cookie-parser";
import cors from "cors";
import helmet from "helmet";
import userRoute from "./modules/user/user.route";
import authRoute from "./modules/auth/auth.route";
import deserializeUser from "./middleware/deserializeUser";
import videoRoute from "./modules/videos/video.route";
import dotenv, { config } from "dotenv";

const app = express();

// Load environment variables from .env file
dotenv.config();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN || "http://localhost:3000",
    credentials: true,
  })
);
app.use(cookieParser());
app.use(express.json());
app.use(helmet());
app.use(deserializeUser);

app.get("/", (req, res) => res.send(`Hello World! ${process.env.NODE_ENV}`));
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/videos", videoRoute);
console.log("process.env.NODE_ENV", process.env.NODE_ENV);


const server = app.listen(process.env.PORT, async () => {
  await connectToDatabase();
  console.log(`Server started on port ${process.env.PORT}`);
});

// server shutdown
shutdownGracefully(server, ["SIGINT", "SIGTERM"]);
