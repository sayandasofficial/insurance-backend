import express from "express";
import {
  submitAccidentReport,
  getMarinePolicies,
  getClaimByNumber,
  updateClaim
} from "../controllers/accidentController.js";

const router = express.Router();

router.post("/accidents", submitAccidentReport);
router.get("/marine-policies", getMarinePolicies);

router.get("/claim/:claimNumber", getClaimByNumber);
router.put("/claim/:claimNumber", updateClaim);

export default router;
