import React from "react";
import styled from "styled-components";
import Logo from "./static/logo.png";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function () {
  const location = useLocation();

  function BackHome() {
    if (location.pathname !== "/") {
      return (
        <>
          <Link to="/">
            <Back>
              <span aria-label="home" role="img">
                🏠
              </span>{" "}
              {"  "}
              Back
            </Back>
          </Link>
        </>
      );
    } else {
      return "";
    }
  }

  return (
    <>
      <Nav>
        <Link to="/">
          <LogoImg src={Logo} alt="genZtech logo" />
        </Link>
        <BackHome />
      </Nav>
    </>
  );
}

const Back = styled.p`
  background-color: #e91e63;
  color: #fff;
  width: fit-content;
  padding: 5px 15px;
  margin: 10px 10px 0 0;
  border-radius: 4px;
  font-size: 0.95em;
  font-weight: 800;
  letter-spacing: 1px;
  text-transform: uppercase;
`;

const Nav = styled.nav`
  width: 100%;
  background-color: #203d4b;
  height: 65px;
  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 1px 5px 0 rgba(0, 0, 0, 0.12);
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  a {
    text-decoration: none;
  }
`;

const LogoImg = styled.img`
  height: 50px;
  margin-left: 20px;
  padding: 10px 0;
`;
