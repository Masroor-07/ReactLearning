import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import TodoApp from "./TodoApp.jsx";
import Parent from "./Simple.jsx";
import Project from "./Project.jsx";
import NewRoutes from "./NewRoutes.jsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <Project /> */}
      <NewRoutes />
    </BrowserRouter>
  </React.StrictMode>
);
