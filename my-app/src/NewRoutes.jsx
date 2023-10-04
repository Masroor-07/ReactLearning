import React from "react";
import { Routes, Route, Link, Navigate } from "react-router-dom";

const MENU = [
  { id: 0, path: "/login", name: "Login" },
  { id: 1, path: "/", name: "Home" },
  { id: 2, path: "/contact", name: "Contact" },
  { id: 3, path: "/team", name: "Team" },
  { id: 4, path: "/about", name: "About" },
];

const NewRoutes = () => {
  let auth = true;

  const useAuth = (Component) =>
    auth ? <Component /> : <Navigate to="/login" />;

  return (
    <div>
      <div style={{ display: "flex", gap: "5px" }}>
        {MENU.map((item) => (
          <Link key={item.id} to={item.path}>
            {item.name}
          </Link>
        ))}
      </div>
      {/* user logged in -> login hide redirect dashboard/home page */}
      {auth ? <h2>User Logged in </h2> : <h2>User Not logged in </h2>}
      <Routes>
        <Route path="/login" element={auth ? <Navigate to="/" /> : <Login />} />
        <Route path="/" element={useAuth(Home)} />
        <Route path="/contact" element={useAuth(Contact)} />
        <Route path="/team" element={useAuth(Team)} />
        <Route path="/about" element={useAuth(About)} />
      </Routes>
    </div>
  );
};

export default NewRoutes;

const Login = () => <div>Login</div>;

const Home = () => (
  <div>
    Home
    <div>1</div>
    <div>1</div>
    <div>1</div>
    <div>1</div>
    <div>1</div>
    <div>1</div>
    <div>1</div>
    <div>1</div>
    <div>1</div>
    <div>1</div>
    <div>1</div>
    <div>1</div>
    <div>1</div>
    <div>1</div>
    <div>1</div>
    <div>1</div>
    <div>1</div>
    <div>1</div>
    <div>1</div>
    <div>1</div>
    <div>1</div>
  </div>
);
<div>1</div>;
const Contact = () => <div>Contact</div>;
const Team = () => <div>Team</div>;
const About = () => <div>About</div>;
