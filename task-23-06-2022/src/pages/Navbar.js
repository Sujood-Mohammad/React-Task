import { Outlet, Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav>
        <NavLink
          to="/home"
          className={({ isActive }) => (isActive ? "link-active" : "link")}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "link-active" : "link")}
        >
          About
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? "link-active" : "link")}
        >
          Contact
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
