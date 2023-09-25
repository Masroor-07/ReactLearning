import React, { useState } from "react";
import Login from "./Login";
import TodoApp from "./TodoApp";

const Project = () => {
  const [auth, setAuth] = useState(false);

  const hanldeAuth = (val) => {
    setAuth(val);
  };

  return <>{auth ? <TodoApp /> : <Login hanldeAuth={hanldeAuth} />}</>;
};

export default Project;
