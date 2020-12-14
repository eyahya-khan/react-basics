/*
C: create a note
R: Read (get) one note and all notes
U: Update a note
D: Delete a note
*/

const notes = [
  // { id: 1, title: "New note", body: "This is new note" },
  // { id: 2, title: "Empty note? No", body: "Empty note forever" },
  // { id: 4, title: "Else note", body: "Something else note" },
  // { id: 3, title: "Yet another note!", body: " This is yet another note" },
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
  //   notes.splice(indexToUpdate, 1, note);
  notes.splice(indexToUpdate, 1);
  // add new note
  notes.splice(0, 0, note);
  return notes;
}

export function deleteNote(id) {
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
