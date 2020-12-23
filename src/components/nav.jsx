import React from "react";
import styled from "styled-components";
import Logo from "./static/logo.png";

export default function NavBar() {
  return (
    <>
      <Nav>
        <a href="https://shop.genztech.xyz/">
          <LogoImg src={Logo} alt="genZtech logo" />
        </a>
      </Nav>
    </>
  );
}

const Nav = styled.nav`
  width: 100%;
  background-color: #203d4b;
  height: 65px;
  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 1px 5px 0 rgba(0, 0, 0, 0.12);
`;

const LogoImg = styled.img`
  height: 55px;
  margin-left: 30px;
  padding: 5px;
`;
