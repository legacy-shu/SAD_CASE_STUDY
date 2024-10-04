import express from "express";
import sessionRouter from "./router/sessions.js";
import attendanceRouter from "./router/attendance.js";
import authRouter from "./router/auth.js";
import mongoose from "mongoose";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const MONGO_URI =
  "mongodb+srv://lundaljung:dOSzMl88gH7e0ep5@cluster0.ooy7u.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/UoPS";

const server = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("DB Connected");

    app.use(express.static(path.join(__dirname, "../frontend/build")));
    app.get("*", (req, res) => {
      res.sendFile(path.join(__dirname, "../frontend/build/index.html"));
    });

    app.use(express.json());
    app.use(
      cors({
        origin: "*", // 프론트엔드 주소
        credentials: true, // 쿠키 및 인증 정보 허용
        allowedHeaders: ["Authorization", "Content-Type"], // 허용할 헤더 지정
      })
    );
    app.use("/attendance", attendanceRouter);
    app.use("/sessions", sessionRouter);
    app.use("/auth", authRouter);

    app.use((req, res, next) => {
      res.sendStatus(404);
    });
    app.use((error, req, res, next) => {
      console.error(error);
      res.sendStatus(500);
    });

    app.listen(8080, () => {
      console.log("Server listning on port 8080");
    });
  } catch (error) {
    console.error(error);
  }
};

server();
