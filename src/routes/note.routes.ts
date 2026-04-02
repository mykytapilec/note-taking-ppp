import { Router } from "express";
import { getNotes } from "../controllers/note.controller";

const router = Router();

router.get("/", getNotes);

export default router;