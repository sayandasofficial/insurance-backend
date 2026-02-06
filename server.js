import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import accidentRoutes from "./routes/accidentRoutes.js";

dotenv.config();

const app = express();

app.use(cors({
  origin: ["https://dashing-kringle-454fa8.netlify.app"],
  methods: ["GET","POST","PUT","DELETE"],
  credentials: true
}));

app.use(express.json());

// API Route
app.use("/api/accidents", accidentRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
