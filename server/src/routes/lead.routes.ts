import express from "express";

import {
  createLead,
  getLeads,
  assignLead,
  updateLeadStatus,
  updateLead,
  deleteLead,
} from "../controllers/lead.controller";

import {
  protect,
  authorizeRoles,
} from "../middleware/auth.middleware";

const router = express.Router();

router.post(
  "/",
  protect,
  createLead
);

router.get(
  "/",
  protect,
  getLeads
);

router.put(
  "/assign/:leadId",
  protect,
  authorizeRoles("admin"),
  assignLead
);

router.put(
  "/status/:leadId",
  protect,
  updateLeadStatus
);

router.put(
  "/:leadId",
  protect,
  updateLead
);

router.delete(
  "/:leadId",
  protect,
  authorizeRoles("admin"),
  deleteLead
);

export default router;