import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <ul className="header container">
        <li>
          <NavLink className="NavLink" to="/">
            Popular
          </NavLink>
        </li>
        <li className="battle">
          <NavLink className="NavLink" to="/battle">
            Battle
          </NavLink>
        </li>
      </ul>
    </>
  );
}

export default Header;
