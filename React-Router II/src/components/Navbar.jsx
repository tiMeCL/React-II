import { NavLink } from "react-router-dom";

const Navbar = () => {
  const setActiveClass = ({ isActive }) => (isActive ? "active" : undefined);
  return (
    <div>
      <nav className="">
      <img className="logo" src="../assets\logo.png" alt="" />
        <NavLink
          className={setActiveClass}
          to="/"
        >
          {" "}
          Home{" "}
        </NavLink>

        <NavLink
          className={setActiveClass}
          to="/pokemon"
        >
          {" "}
          Pokemon{" "}
        </NavLink>

      </nav>
    </div>
  );
};
export default Navbar;
