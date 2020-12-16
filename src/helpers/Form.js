// import React, { useState, useEffect } from "react";
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
// // import { createNote, updateNote, deleteNote } from "../helpers/notes";

// export default function LocalForm() {
//   //take input value
//   const [tasks, setTasks] = useState([]);
//   const [newTask, setnewTask] = useState("");
//   const [updateTask, setupdateTask] = useState("");

//   //show save message
//   //   const [isStatus, setIsStatus] = useState("");
//   //   const [isButton, setIsButton] = useState("Add");

//   useEffect(() => {
//     const readTasks = () => {
//       if (localStorage.getItem("tasks")) {
//         setTasks(JSON.parse(localStorage.getItem("tasks")));
//       }
//     };
//     readTasks();
//   }, []);

//   const onCraete = () => {
//     tasks.push(newTask);
//     localStorage.setItem("tasks", JSON.stringify(tasks));
//   };

//   function onDelete(task) {
//     const index = tasks.indexOf(task);
//     tasks.splice(index, 1);
//     localStorage.setItem("tasks", JSON.stringify(tasks));
//     setnewTask("");
//     setTasks(JSON.parse(localStorage.getItem("tasks")));
//   }
//   const onUpdate = () => {
//     const index = tasks.indexOf(task);
//     const tasks2 = JSON.parse(localStorage.getItem("tasks"));

//     tasks2[index] = updateTask;

//     localStorage.setItem("tasks", JSON.stringify(tasks2));
//     setTasks(JSON.parse(localStorage.getItem("tasks")));
//   };

//   return (
//     <Form>
//       {/* {isStatus && <p>{isStatus} successfully!</p>} */}
//       <Form.Group>
//         <Form.Label>Title</Form.Label>
//         <Form.Control
//           className="mb-4"
//           size="lg"
//           // "value" for display input text when click on list
//           value={newTask}
//           // "onChange" for edit input text
//           onChange={(e) => setnewTask(e.target.value)}
//         />
//       </Form.Group>
//       {/* {isButton && ( */}
//       <Button className="mr-2" variant="primary" onClick={onCraete}>
//         create
//       </Button>

//       <ListGroup as="ul">
//         {tasks.map((task) => (
//           <ListGroup.Item>
//             {task}
//             {/* <br />
//     {note.body} */}
//           </ListGroup.Item>
//         ))}
//       </ListGroup>
//     </Form>
//   );
// }
