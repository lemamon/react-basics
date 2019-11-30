import React from "react";
import { Link } from "react-router-dom";

const menuItems = [
  {
    path: "/",
    displayName: "Home"
  },
  {
    path: "/contact",
    displayName: "Contact"
  },
  {
    path: "/about",
    displayName: "About"
  },
  {
    path: "/generic",
    displayName: "Generic"
  },
  {
    path: "/topics",
    displayName: "Topics"
  },
  {
    path: "/privatePage",
    displayName: "Private Page"
  }
];

const Menu = () => (
  <ul>
    {menuItems.map((page, idx) => (
      <li key={idx}>
        <Link to={page.path}>{page.displayName} </Link>
      </li>
    ))}
  </ul>
);

export default Menu;
