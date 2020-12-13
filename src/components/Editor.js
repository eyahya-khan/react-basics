import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Button";
import { createNote, updateNote, deleteNote } from "./notes";

export default function Editor({ selectedNote, refreshList }) {
  //take input value
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  //show save message
  const [isSaved, setIsSaved] = useState(false);
  const [isUpdated, setIsUpdated] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);

  //for every change of input text
  useEffect(() => {
    setTitle("");
    setBody("");

    // shows the text in input field when select list
    if (selectedNote)
      return setTitle(selectedNote.title), setBody(selectedNote.body);
  }, [selectedNote]);

  // messaging for save
  useEffect(() => {
    setTimeout(() => setIsSaved(false), 5000);
  }, [isSaved]);

  // messaging for update
  useEffect(() => {
    setTimeout(() => setIsUpdated(false), 5000);
  }, [isUpdated]);

  // messaging for delete
  useEffect(() => {
    setTimeout(() => setIsDeleted(false), 5000);
  }, [isDeleted]);

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
    setBody("");

    // update input text
    if (selectedNote) {
      setIsUpdated(true);
      updateNote(selectedNote.id, title, body);
      return refreshList();
    }
    setIsSaved(true);
    // create input text
    createNote(title, body);
    //rendering whole list
    refreshList();
  };

  // delete note
  const onDelete = (e) => {
    e.preventDefault();
    // show delete message
    const { id } = selectedNote;
    deleteNote(id);
    refreshList();
    setTitle("");
    setBody("");
    setIsDeleted(true);
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
      <br /> <br />
      {isSaved && <Alert variant="info">Saved successfully!</Alert>}
      {isUpdated && <Alert variant="info">Updated successfully!</Alert>}
      {isDeleted && <Alert variant="info">Deleted successfully!</Alert>}
    </Form>
  );
}
