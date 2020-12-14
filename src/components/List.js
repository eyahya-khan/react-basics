import React from "react";
import ListGroup from "react-bootstrap/ListGroup";

export default function List({ selectedNote, setSelectedNote, notes }) {
  // console.log({ notes });

  const onSelectNote = (note) => {
    setSelectedNote(note);
  };

  return (
    <ListGroup as="ul">
      {notes.length ? notes.title : "Item not found"}
      {notes.map((note) => (
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
