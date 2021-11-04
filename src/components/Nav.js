import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="navContainer">
      <div className="fixedContainer">
        <header className="devChallLink">
          <a
            href="https://devchallenges.io/challenges/ohgVTyJCbm5OZyTB2gNY"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Dev</span>challenges.io
          </a>
        </header>
        <div className="linksContainer">
          <ul>
            <li>
              <NavLink
                exact
                to="/my-reusable-components"
                activeClassName="activeLink"
              >
                Buttons
              </NavLink>
            </li>
            <li>
              <NavLink
                exact
                to="/my-reusable-components/inputs"
                activeClassName="activeLink"
              >
                Inputs
              </NavLink>
            </li>
            <li>
              <NavLink to="/random" activeClassName="activeLink">
                404
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
