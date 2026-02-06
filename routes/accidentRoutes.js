import express from "express";
import { submitAccidentReport } from "../controllers/accidentController.js";

const router = express.Router();

router.post("/", submitAccidentReport);

export default router;
