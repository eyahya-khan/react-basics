import React, { useState } from "react";
import {
  Button,
  Container,
  Row,
  Form,
  Col,
  ListGroup,
  Accordion,
  Card,
} from "react-bootstrap";
import { getNotes } from "./notes111";

function Note() {
  const [selectedNote, setSelectedNote] = useState(undefined);
  const onSelectNote = (note) => {
    setSelectedNote(note);
  };
  return (
    <div>
      <Container>
        <Row>
          <Col style={styles.heading}>
            <Accordion>
              <Card>
                <Card.Header style={styles.cardHeader}>Notes</Card.Header>
              </Card>
            </Accordion>
          </Col>
        </Row>
        <Row>
          <Col lg="4">
            <Button variant="dark" block style={styles.newNote}>
              New note
            </Button>
            <ListGroup>
              {getNotes().map((note) => (
                <ListGroup.Item
                  active={selectedNote ? note.id === selectedNote.id : false}
                  onClick={() => onSelectNote(note)}
                  as="li"
                  key={note.id}
                >
                  {note.title}
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label>Title</Form.Label>
              <Form.Control as="input" placeholder="hello" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Note</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Button variant="primary" style={styles.saveButton}>
              Save
            </Button>
            <Button variant="danger">Delete</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Note;

const styles = {
  cardHeader: {
    fontSize: 40,
  },

  heading: {
    marginBottom: 25,
    marginTop: 25,
  },
  newNote: {
    marginBottom: 25,
  },
  saveButton: {
    marginRight: 15,
  },
};
