import express from "express";
import { submitAccidentReport } from "../controllers/accidentController.js";
import db from "../config/db.js";

const router = express.Router();

/*
 ✅ POST → Submit new accident claim
 Endpoint: /api/accidents
*/
router.post("/", submitAccidentReport);


/*
 ✅ GET → Fetch all accident claims
 Endpoint: /api/accidents
*/
router.get("/", async (req, res) => {
  try {
    const result = await db.query(
      "SELECT * FROM accident_reports ORDER BY id DESC"
    );

    res.status(200).json(result.rows);
  } catch (error) {
    console.error("GET accidents error:", error);
    res.status(500).json({ message: "Server Error" });
  }
});


/*
 ✅ PUT → Update claim status
 Endpoint: /api/accidents/:id
*/
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const result = await db.query(
      "UPDATE accident_reports SET claim_status = $1 WHERE id = $2 RETURNING *",
      [status, id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ message: "Claim not found" });
    }

    res.status(200).json(result.rows[0]);
  } catch (error) {
    console.error("PUT accident error:", error);
    res.status(500).json({ message: "Server Error" });
  }
});

export default router;
