import React from "react";
import { Routes, Route, Link } from "react-router-dom";

const MENU = [
  { id: 1, path: "/", name: "Home" },
  { id: 2, path: "/contact", name: "Contact" },
  { id: 3, path: "/team", name: "Team" },
  { id: 4, path: "/about", name: "About" },
];

const NewRoutes = () => {
  return (
    <div>
      <div style={{ display: "flex", gap: "5px" }}>
        {MENU.map((item) => (
          <Link key={item.id} to={item.path}>
            {item.name}
          </Link>
        ))}
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/team" element={<Team />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
};

export default NewRoutes;

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
