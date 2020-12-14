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
  const [isStatus, setIsStatus] = useState("");
  const [isButton, setIsButton] = useState("Add");

  // const inputRef = useRef('');
  // useEffect(() => {
  //   inputRef.current.focus();
  // });

  //for every change of input text
  useEffect(() => {
    setTitle("");
    setBody("");

    //shows the text in input field when select list
    if (selectedNote)
      return setTitle(selectedNote.title), setBody(selectedNote.body);
  }, [selectedNote]);

  // messaging for save,update & Delete
  useEffect(() => {
    setTimeout(() => setIsStatus(""), 5000);
  }, [isStatus]);

  // title input
  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };
  // body input
  const onChangeBody = (e) => {
    setBody(e.target.value);
  };
  useEffect(() => {
    if (selectedNote) {
      setIsButton("Update");
    }
  }, [selectedNote]);

  const onSave = (e) => {
    e.preventDefault();
    // clear input text
    setTitle("");
    setBody("");

    // update input text
    if (selectedNote) {
      setIsStatus("Updated");
      setIsButton("Add");
      updateNote(selectedNote.id, title, body);
      return refreshList();
    }

    setIsStatus("Saved");
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
    // console.log(id);
    // console.log(selectedNote);

    deleteNote(id);
    refreshList();
    setTitle("");
    setBody("");
    setIsStatus("Deleted");
    setIsButton("Add");
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
          // ref={inputRef}
        />
        <Form.Label>Note</Form.Label>
        <Form.Control
          as="textarea"
          size="lg"
          value={body}
          onChange={onChangeBody}
        />
      </Form.Group>
      {/* <Button className="mr-2" variant="primary" onClick={onSave}>
        Save
      </Button> */}
      {isButton && (
        <Button className="mr-2" variant="primary" onClick={onSave}>
          {isButton}
        </Button>
      )}
      {selectedNote && (
        <Button variant="danger" onClick={onDelete}>
          Delete
        </Button>
      )}
      <br /> <br />
      {isStatus && <Alert variant="info">{isStatus} successfully!</Alert>}
    </Form>
  );
}
