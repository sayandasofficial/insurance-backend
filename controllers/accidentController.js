import { supabase } from "../config/supabaseClient.js";
import { v4 as uuidv4 } from "uuid";

// ================= SUBMIT CLAIM =================

export const submitAccidentReport = async (req, res) => {
  try {
    const claim_number = `CLM-${uuidv4().slice(0, 8)}`;

    const payload = {
      ...req.body,
      claim_number,
      claim_status: "Submitted",
    };

    const { data, error } = await supabase
      .from("accident_reports")
      .insert([payload])
      .select()
      .single();

    if (error) return res.status(500).json(error);

    res.json(data);

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


// ================= GET MARINE POLICIES =================

export const getMarinePolicies = async (req, res) => {
  try {
    const { data, error } = await supabase
      .from("marine_policies")
      .select("policy_number");

    if (error) return res.status(500).json(error);

    res.json(data);

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
