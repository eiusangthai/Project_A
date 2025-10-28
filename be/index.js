import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);

const PORT = process.env.PORT;

app.listen(PORT, () =>
  console.log(`✅ Server chạy tại http://localhost:${PORT}`)
);
