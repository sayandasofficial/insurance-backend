import express from "express";
import { submitAccidentReport } from "../controllers/accidentController.js";

const router = express.Router();

router.post("/submit-claim", submitAccidentReport);

export default router;
