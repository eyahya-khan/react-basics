import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { BeatLoader } from "react-spinners";

export default function List({
  selectedNote,
  setSelectedNote,
  notes,
  isLoading,
}) {
  const onSelectNote = (note) => {
    setSelectedNote(note);
  };

  // if (isLoading) return (
  // <p>
  // <i className="fas fa-spinner fa-spin"></i>loading.....
  // </p>)

  return (
    <ListGroup as="ul">
      {notes.length ? notes.title : "Item not found"}

      {isLoading && (
        <p>
          <BeatLoader color="green" loading />
        </p>
      )}

      {!isLoading &&
        notes.map((note) => (
          <ListGroup.Item
            //highlight the note
            active={selectedNote ? note.id === selectedNote.id : false}
            onClick={() => onSelectNote(note)}
            as="li"
            key={note.id}
          >
            {note.title}
            {/* <br />
          {note.body} */}
          </ListGroup.Item>
        ))}
    </ListGroup>
  );
}
