import { Router } from "express";
import { getNotes, addNote, getNoteHtml, checkNoteGrammar, getNote, updateNoteById, deleteNoteById } from "../controllers/note.controller";

const router = Router();

router.get("/", getNotes);
router.post("/", addNote);
router.get("/:id/grammar", checkNoteGrammar);
router.get("/:id/html", getNoteHtml);
router.get("/:id", getNote);
router.put("/:id", updateNoteById);
router.delete("/:id", deleteNoteById);

export default router;