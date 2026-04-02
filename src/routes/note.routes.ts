import { Router } from "express";
import { getNotes, addNote, getNoteHtml } from "../controllers/note.controller";

const router = Router();

router.get("/", getNotes);
router.post("/", addNote);
router.get("/:id/html", getNoteHtml);

export default router;