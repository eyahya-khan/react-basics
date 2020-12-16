import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
export const colorContext = React.createContext();

ReactDOM.render(
  <React.StrictMode>
    <colorContext.Provider value={"successfully!"}>
      <App />
    </colorContext.Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// const styles = {
//   heading: {
//     color: "green",
//   },
// };
