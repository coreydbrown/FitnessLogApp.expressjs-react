import express from "express";
const router = express.Router();

import { getRecords } from "../controllers/recordsController.js";

router.route("/").get(getRecords);

export default router;
