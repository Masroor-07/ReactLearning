import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import TodoApp from "./TodoApp.jsx";
import Parent from "./Simple.jsx";
import Project from "./Project.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Project />
  </React.StrictMode>
);
