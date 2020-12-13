/*
C: create a note
R: Read (get) one note and all notes
U: Update a note
D: Delete a note
*/

const notes = [
  { id: 1, title: "New note", body: "" },
  { id: 2, title: "Another note", body: "Empty" },
  { id: 4, title: "Another note", body: "Something else" },
  { id: 3, title: "Yet another note!", body: "" },
];

// works!
export function createNote(title, body) {
  const note = {
    id: Date.now(),
    title,
    body,
  };
  notes.push(note);
  return note;
}

// works!
export function getNote(id) {
  return notes.find((note) => note.id === id);
}

// works!
export function getNotes() {
  return notes;
}

export function updateNote(id, title, body) {
  const indexToUpdate = notes.findIndex((note) => note.id === id);
  const note = {
    id,
    title,
    body,
  };
  // remove old note
  notes.splice(indexToUpdate, 1, note);
  // add new note
  notes.splice(0, 0, note);
  return notes;
}

export function deleteNote(id) {
  const indexToDelete = notes.findIndex((note) => note.id === id);
  if (indexToDelete >= 0) notes.splice(indexToDelete, 1);
  return true;
}
