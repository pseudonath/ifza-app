import { NavLink } from "react-router-dom";
import styled from "styled-components";

export default function NavLinkAuth() {
  return (
    <NavLinkContainer>
      <NavLinkStyled to={"/login"} className={({ isActive }) => (isActive ? "active" : "")}>
        Login
      </NavLinkStyled>
      <NavLinkStyled to={"/signup"} className={({ isActive }) => (isActive ? "active" : "")}>
        Sign Up
      </NavLinkStyled>
    </NavLinkContainer>
  );
}

const NavLinkContainer = styled.div`
  width: 100%;
  max-width: 600px;
  margin: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 40px;
`;

const NavLinkStyled = styled(NavLink)`
  display: block;
  margin-bottom: 8px;
  font-size: 18px;
  font-weight: 600;
  color: #333;
  text-decoration: none;

  &.active {
    border-bottom: 2px solid #cda72c;
    border-offset: 4px;
  }
`;
