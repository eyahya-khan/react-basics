function initializeNotes() {
  // sets localstorage for the first time
  // sets "notes" as key object and convert into array string
  localStorage.setItem("notes", JSON.stringify([]));
  // returns an array
  return [];
}

export function getNotes() {
  //receive all data from local storage as object
  const notes = localStorage.getItem("notes");
  //if local storage is empty
  if (!notes) {
    notes = initializeNotes();
  }
  //convert data into object
  const parsedNotes = JSON.parse(notes);
  return parsedNotes;
}

export function createNote(title, body) {
  const notes = getNotes();
  //adds new items to the end of an array as string
  const newNote = { title, body };
  notes.push(newNote);
  //convert object into array string
  const jsonNoteArray = JSON.stringify(notes);
  localStorage.setItem("notes", jsonNoteArray);
}

export function moveNote() {
  const notes = getNotes();
  const indexToMove = 0;
  const noteToMove = notes.length > 0 ? notes[indexToMove] : null;
  notes.splice(indexToMove, 1);
  notes.splice(notes.length, 0, noteToMove);
  const jsonNoteArray = JSON.stringify(notes);
  localStorage.setItem("notes", jsonNoteArray);
}

export function updateNote(selectedNote, title, body) {
  const notes = getNotes();
  const noteToUpdate = 0;
  const indexToUpdate =
    notes.length > 0 ? notes[selectedNote] : notes[noteToUpdate];
  const note = {
    title,
    body,
  };
  // remove old note
  //   notes.splice(indexToUpdate, 1, note);
  notes.splice(indexToUpdate, 1);
  // add new note
  notes.splice(0, 0, note);
  const jsonNoteArray = JSON.stringify(notes);
  localStorage.setItem("notes", jsonNoteArray);

  // return notes;
}

export function deleteNote(selectedNote) {
  const notes = getNotes();
  const noteToDelete = 0;
  const indexToDelete =
    notes.length > 0 ? notes[noteToDelete] : notes[selectedNote];
  // console.log(indexToDelete);
  // console.log(id);
  if (indexToDelete >= 0) notes.splice(indexToDelete, 1);
  localStorage.removeItem(indexToDelete);
  //message for last item to delete
  const listNumber = notes.length;
  // console.log(listNumber);
  if (listNumber === 0) alert("Last item of list");
  return true;
}
