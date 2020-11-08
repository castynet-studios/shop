import React from "react";
import styled from "styled-components";
import Logo from "./static/logo.png";

export default function NavBar() {
  return (
    <>
      <Nav>
        <LogoImg src={Logo} alt="genZtech logo" />
      </Nav>
    </>
  );
}

const Nav = styled.nav`
  width: 100%;
  background-color: #203d4b;
  height: 65px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 3px rgba(0, 0, 0, 0.24);
`;

const LogoImg = styled.img`
  height: 55px;
  margin-left: 30px;
  padding: 5px;
`;
