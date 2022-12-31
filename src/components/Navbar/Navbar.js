import { NavLink } from "react-router-dom";
import styled from "styled-components";
import CartPreview from "../CartPreview/CartPreview";

const Navbar = () => {
  const activeStyle = {
    textDecoration: "underline",
  };
  const handleActive = ({ isActive }) => (isActive ? activeStyle : undefined);
  return (
    <ul>
      <StyledLi>
        <NavLink style={handleActive} to="/" data-testid="navlink">
          Home
        </NavLink>
      </StyledLi>
      <StyledLi>
        <NavLink style={handleActive} to="/shop" data-testid="navlink">
          Shop
        </NavLink>
      </StyledLi>
      <StyledLi>
        <NavLink style={handleActive} to="/cart" data-testid="navlink">
          {<CartPreview />}
        </NavLink>
      </StyledLi>
    </ul>
  );
};

const StyledLi = styled.li``;
export default Navbar;
