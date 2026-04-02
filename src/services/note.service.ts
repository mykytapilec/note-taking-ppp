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