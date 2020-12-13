import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { createNote, updateNote, deleteNote } from "./notes";

export default function Editor({ selectedNote, refreshList }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const [isSaved, setIsSaved] = useState(false);

  //for every change of input text
  useEffect(() => {
    setTitle("");
    if (selectedNote) return setTitle(selectedNote.title);
  }, [selectedNote]);

  // title input
  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  // body input
  const onChangeBody = (e) => {
    setBody(e.target.value);
  };

  const onSave = (e) => {
    e.preventDefault();

    // clear input text
    setTitle("");

    // show save message
    setIsSaved(true);

    // update input text
    if (selectedNote) {
      updateNote(selectedNote.id, title);
      // updateNote(selectedNote.id, title, body);
      return refreshList();
    }

    // create input text
    createNote(title, "");
    //rendering whole list
    refreshList();
  };

  const onDelete = (e) => {
    e.preventDefault();
    // show delete message
    const { id } = selectedNote;
    deleteNote(id);
    refreshList();
    setTitle("");
  };

  return (
    <Form>
      <Form.Group>
        <Form.Label>Title</Form.Label>
        <Form.Control
          className="mb-4"
          size="lg"
          // "value" for display input text when click on list
          value={title}
          // "onChange" for edit input text
          onChange={onChangeTitle}
        />
        <Form.Label>Note</Form.Label>
        <Form.Control
          as="textarea"
          size="lg"
          value={body}
          onChange={onChangeBody}
        />
      </Form.Group>
      <Button className="mr-2" variant="primary" onClick={onSave}>
        Save
      </Button>
      {selectedNote && (
        <Button variant="danger" onClick={onDelete}>
          Delete
        </Button>
      )}
      {isSaved && <p>Saved successfully!</p>}
    </Form>
  );
}
