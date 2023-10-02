// menu bar
// - home
// - contact
// - team
// - about

import { useEffect, useState } from "react";

const NavMenu = ({ path, name }) => (
  <li>
    <a href={path}>{name}</a>
  </li>
);

const MENU = [
  { id: 1, path: "/", name: "Home" },
  { id: 2, path: "/contact", name: "Contact" },
  { id: 3, path: "/team", name: "Team" },
  { id: 4, path: "/about", name: "About" },
];

const Route = () => {
  let pathName = window.location.pathname;

  return (
    <div>
      <ul>
        {MENU.map((item) => (
          <NavMenu key={item.id} path={item.path} name={item.name} />
        ))}
      </ul>
      <div>
        <Routing path={pathName} />
      </div>
    </div>
  );
};

export default Route;

const Routing = ({ path }) => {
  switch (path) {
    case "/":
      return <Home />;
    case "/contact":
      return <Contact />;
    case "/team":
      return <Team />;
    case "/about":
      return <About />;
    default:
      return <div>404 Error</div>;
  }
};

const Home = () => <div>Home</div>;
const Contact = () => <div>Contact</div>;
const Team = () => <div>Team</div>;
const About = () => <div>About</div>;
