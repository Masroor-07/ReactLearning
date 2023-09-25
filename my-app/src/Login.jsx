import React, { useState } from "react";

const Login = ({ hanldeAuth }) => {
  const [state, setState] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // api fetch call

    // validation
    if (!state.username) return alert("please Enter username");
    if (!state.password) return alert("please Enter password");

    if (state.username === "sourav" && state.password === "12345") {
      hanldeAuth(true);
    } else {
      alert("Invalid Password");
    }
  };

  return (
    <div
      style={{
        display: "grid",
        placeItems: "center",
        height: "100vh",
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "5px",
        }}
      >
        <input
          type="text"
          name="username"
          placeholder="Enter Your Username"
          value={state.username}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Enter Your Password"
          value={state.password}
          onChange={handleChange}
        />
        <button>Login</button>
      </form>
    </div>
  );
};

export default Login;
