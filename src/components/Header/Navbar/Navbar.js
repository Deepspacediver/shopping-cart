import { NavLink } from "react-router-dom";
import "./Navbar.css";
import CartPreview from "../CartPreview/CartPreview";

const Navbar = () => {
  const activeStyle = {
    textDecoration: "underline",
  };
  const handleActive = ({ isActive }) => (isActive ? activeStyle : undefined);
  return (
    <nav className="header-navbar">
      <ul className="header-navbar_list">
        <li className="header-navbar_list-item">
          <NavLink className="header-navbar-link" to="/" data-testid="navlink">
            Home
          </NavLink>
        </li>
        <li className="header-navbar_list-item">
          <NavLink
            className="header-navbar-link"
            to="/shop"
            data-testid="navlink"
          >
            Shop
          </NavLink>
        </li>
        <li className="header-navbar_list-item">
          <NavLink
            className="header-navbar-link"
            to="/cart"
            data-testid="navlink"
          >
            {<CartPreview />}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
