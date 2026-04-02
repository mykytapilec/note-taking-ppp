import { Request, Response } from "express";
import { getAllNotes, createNote, getNoteById } from "../services/note.service";
import { renderMarkdown } from "../utils/markdown";
import { checkGrammar } from "../utils/grammar";

export const getNotes = (req: Request, res: Response) => {
  const notes = getAllNotes();
  res.json(notes);
};

export const addNote = (req: Request, res: Response) => {
  const { content } = req.body;

  if (!content) {
    return res.status(400).json({ message: "Content is required" });
  }

  const note = createNote(content);
  res.status(201).json(note);
};

export const getNoteHtml = (req: Request, res: Response) => {
  const { id } = req.params;
  const noteId = Array.isArray(id) ? id[0] : id;

  const note = getNoteById(noteId);

  if (!note) {
    return res.status(404).json({ message: "Note not found" });
  }

  const html = renderMarkdown(note.content);
  res.send(html);
};

export const checkNoteGrammar = (req: Request, res: Response) => {
  const { id } = req.params;
  const noteId = Array.isArray(id) ? id[0] : id;

  const note = getNoteById(noteId);

  if (!note) {
    return res.status(404).json({ message: "Note not found" });
  }

  const issues = checkGrammar(note.content);

  res.json({ id: note.id, issues });
};