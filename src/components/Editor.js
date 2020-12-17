import React, { useState, useEffect, useContext } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { createNote, updateNote, deleteNote } from "../helpers/notes";
import { colorContext } from "../index";

export default function Editor({ selectedNote, refreshList, setIsLoading }) {
  const userColor = useContext(colorContext);
  //take input value
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  //show save message
  const [isStatus, setIsStatus] = useState("");
  const [isButton, setIsButton] = useState("Add");

  //for select note, of input text
  useEffect(() => {
    setTitle("");
    setBody("");

    //shows the text in input field when select list
    if (selectedNote) {
      setTitle(selectedNote.title);
      setBody(selectedNote.body);
    }
  }, [selectedNote]);

  // messaging for save,update & Delete
  useEffect(() => {
    setTimeout(() => setIsStatus(""), 2000);
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

    //loading
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 1000);

    //clear input text
    setTitle("");
    setBody("");

    // update input text
    if (selectedNote) {
      setIsStatus("Updated");
      setIsButton("Add");
      updateNote(selectedNote.id, title, body);
      // updateNote(selectedNote, title, body);
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
    deleteNote(id);
    // deleteNote(selectedNote);

    refreshList();
    setTitle("");
    setBody("");
    setIsStatus("Deleted");
    setIsButton("Add");
  };
  console.log(title);
  console.log(body);

  return (
    <Form>
      {isStatus && (
        <p style={styles.heading}>
          {isStatus} {userColor}
        </p>
      )}
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
    </Form>
  );
}

const styles = {
  heading: {
    color: "green",
  },
};
