import { Request, Response } from "express";
import { getAllNotes, createNote, getNoteById, updateNote, deleteNote } from "../services/note.service";
import { renderMarkdown } from "../utils/markdown";
import { checkGrammar } from "../utils/grammar";

// получить все заметки
export const getNotes = (req: Request, res: Response) => {
  const notes = getAllNotes();
  res.json(notes);
};

// создать заметку
export const addNote = (req: Request, res: Response) => {
  const { content } = req.body;

  if (!content) {
    return res.status(400).json({ error: "Content is required" });
  }

  const note = createNote(content);
  res.status(201).json(note);
};

export const getNote = (req: Request, res: Response) => {
  const { id } = req.params;
  const noteId = Array.isArray(id) ? id[0] : id;

  const note = getNoteById(noteId);

  if (!note) {
    return res.status(404).json({ error: "Note not found" });
  }

  res.json(note);
};

export const getNoteHtml = (req: Request, res: Response) => {
  const { id } = req.params;
  const noteId = Array.isArray(id) ? id[0] : id;

  const note = getNoteById(noteId);

  if (!note) {
    return res.status(404).json({ error: "Note not found" });
  }

  const html = renderMarkdown(note.content);
  res.send(html);
};

export const checkNoteGrammar = (req: Request, res: Response) => {
  const { id } = req.params;
  const noteId = Array.isArray(id) ? id[0] : id;

  const note = getNoteById(noteId);

  if (!note) {
    return res.status(404).json({ error: "Note not found" });
  }

  const issues = checkGrammar(note.content);

  res.json({
    id: note.id,
    issues,
  });
};

export const updateNoteById = (req: Request, res: Response) => {
  const { id } = req.params;
  const noteId = Array.isArray(id) ? id[0] : id;
  const { content } = req.body;

  if (!content) {
    return res.status(400).json({ error: "Content is required" });
  }

  const updated = updateNote(noteId, content);

  if (!updated) {
    return res.status(404).json({ error: "Note not found" });
  }

  res.json(updated);
};

export const deleteNoteById = (req: Request, res: Response) => {
  const { id } = req.params;
  const noteId = Array.isArray(id) ? id[0] : id;

  const deleted = deleteNote(noteId);

  if (!deleted) {
    return res.status(404).json({ error: "Note not found" });
  }

  res.json({ message: "Note deleted" });
};