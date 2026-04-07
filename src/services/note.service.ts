interface Note {
  id: string;
  content: string;
  createdAt: Date;
}

const notes: Note[] = [];

export const getAllNotes = () => {
  return notes;
};

export const createNote = (content: string) => {
  const newNote: Note = {
    id: Date.now().toString(),
    content,
    createdAt: new Date(),
  };

  notes.push(newNote);
  return newNote;
};

export const getNoteById = (id: string) => {
  return notes.find((note) => note.id === id);
};

export const updateNote = (id: string, content: string) => {
  const note = notes.find((n) => n.id === id);

  if (!note) return null;

  note.content = content;
  return note;
};

export const deleteNote = (id: string) => {
  const index = notes.findIndex((n) => n.id === id);

  if (index === -1) return false;

  notes.splice(index, 1);
  return true;
};