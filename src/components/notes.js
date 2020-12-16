const notes = [];

export function createNote(title, body) {
  const note = {
    id: Date.now(),
    title,
    body,
  };
  notes.push(note);
  return note;
}

export function getNote(id) {
  const notes = getNotes();
  return notes.find((note) => note.id === id);
}

export function getNotes() {
  return notes;
}

export function updateNote(id, title, body) {
  const notes = getNotes();
  const indexToUpdate = notes.findIndex((note) => note.id === id);
  const note = {
    id,
    title,
    body,
  };
  // remove old note
  //   notes.splice(indexToUpdate, 1, note);
  notes.splice(indexToUpdate, 1);
  // add new note
  notes.splice(0, 0, note);
  return notes;
}

export function deleteNote(id) {
  const notes = getNotes();
  const indexToDelete = notes.findIndex((note) => note.id === id);
  // console.log(indexToDelete);
  // console.log(id);
  if (indexToDelete >= 0) notes.splice(indexToDelete, 1);
  //message for last item to delete
  const listNumber = notes.length;
  // console.log(listNumber);
  if (listNumber === 0) alert("Last item of list");
  return true;
}
