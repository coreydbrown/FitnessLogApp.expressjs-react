import express from "express";
const router = express.Router();

import {
  getAllNotes,
  createNote,
  updateNote,
  deleteNote,
} from "../controllers/notesController.js";

router.route("/").get(getAllNotes).post(createNote);
router.route("/:id").patch(updateNote).delete(deleteNote);

export default router;
