import express from "express";
import {
  submitAccidentReport,
  getMarinePolicies
} from "../controllers/accidentController.js";

const router = express.Router();

// submit claim
router.post("/accidents", submitAccidentReport);

// dropdown marine policies
router.get("/marine-policies", getMarinePolicies);

export default router;
