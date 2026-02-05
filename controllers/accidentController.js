import db from "../config/db.js";
import { v4 as uuidv4 } from "uuid";

export const submitAccidentReport = async (req, res) => {
  try {
    const {
      policy_number,
      insurance_company,
      incident_type,
      incident_datetime,
      damage_details,
      remarks
    } = req.body;

    const claimNumber = "CLM-" + uuidv4().slice(0, 8);

    const query = `
      INSERT INTO accident_reports
      (policy_number, insurance_company, incident_type, incident_datetime, damage_details, remarks, claim_number, claim_status)
      VALUES (?, ?, ?, ?, ?, ?, ?, 'Pending')
    `;

    await db.execute(query, [
      policy_number,
      insurance_company,
      incident_type,
      incident_datetime,
      damage_details,
      remarks,
      claimNumber
    ]);

    res.status(201).json({
      message: "Claim Submitted Successfully",
      claimNumber
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};
