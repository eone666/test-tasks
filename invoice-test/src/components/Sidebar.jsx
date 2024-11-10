import React from "react";
import { Link } from "react-router-dom";
import UserBlock from "./UserBlock";

export default function Sidebar() {
  return (
    <header className="sidebar">
      <UserBlock></UserBlock>
      <nav className="sidebar__nav nav">
        <ul className="nav__list">
          <li>
            <Link className="nav__link" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="nav__link" to="/terminals">
              Terminals
            </Link>
          </li>
          <li>
            <Link className="nav__link" to="/buyers">
              Buyers
            </Link>
          </li>
        </ul>
      </nav>
      <div className="copyright">Copyright © 2020 </div>
    </header>
  );
}
