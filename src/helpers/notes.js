function initilize() {
  localStorage.setItem("notes", JSON.stringify([]));
  return [];
}

export function getNotes() {
  const notes = localStorage.getItem("notes");
  if (!notes) {
    return initilize();
  }
  const newValue = JSON.parse(notes);
  return newValue;
}
//create note
export function createNote(title, body) {
  const note = {
    id: Date.now(),
    title,
    body,
  };
  const notes = getNotes();
  notes.push(note);

  const newArray = JSON.stringify(notes);
  localStorage.setItem("notes", newArray);
  return note;
}

//update note
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
  const newUpdate = JSON.stringify(notes);
  localStorage.setItem("notes", newUpdate);
  return notes;
}

//delete note
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
  const newDelete = JSON.stringify(notes);
  localStorage.setItem("notes", newDelete);
  return true;
}
