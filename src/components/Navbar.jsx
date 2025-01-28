import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="container navBar">
      <div className="left nav-Item">Portfolio</div>
      <div className="right">
        <NavLink to="/" className="nav-Item" activeClassName="active" end>
          About
        </NavLink>
        <NavLink to="/zeeshan-portfolio/experience" className="nav-Item" activeClassName="active">
          Experience
        </NavLink>
        <NavLink to="/zeeshan-portfolio/skills" className="nav-Item" activeClassName="active">
          Skills
        </NavLink>
        <NavLink to="/zeeshan-portfolio/projects" className="nav-Item" activeClassName="active">
          Projects
        </NavLink>
        <NavLink to="/zeeshan-portfolio/contact" className="nav-Item" activeClassName="active">
          Contact
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
