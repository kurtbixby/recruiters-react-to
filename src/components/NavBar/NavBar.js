import { useState } from "react";
import { useLocation } from "react-router-dom";
import NavLink from "../NavLink/NavLink";

const NavBar = () => {
  let location = useLocation();

  return (
    <div className="flex justify-center bg-blue-400 text-xl w-full">
      <div className="w-8/12 flex justify-between">
        <NavLink to="/" text="Home" active={location.pathname === "/"} />
        <NavLink
          to="/about"
          text="About Me"
          active={location.pathname === "/about"}
        />
        <NavLink
          to="/portfolio"
          text="Portfolio"
          active={location.pathname === "/portfolio"}
        />
        <NavLink
          to="/resume"
          text="Resume"
          active={location.pathname === "/resume"}
        />
        <NavLink
          to="/contact"
          text="Contact Me"
          active={location.pathname === "/contact"}
        />
      </div>
    </div>
  );
};

export default NavBar;
