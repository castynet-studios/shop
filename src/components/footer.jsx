import React from "react";
import styled from "styled-components";
import { Icons } from "./utilities";
import { Year } from "./helpers";
import { Link } from "react-router-dom";
// import Subscribe from "./mail";

export default function () {
  return (
    <>
      <FooterWrap>
        <LinksWrap>
          <StyledLink to="/page/ethics">
            <span className="underline">Ethics Statement</span> {"  "}
            <External />
          </StyledLink>
          <StyledLink to="/page/submit_product">
            <span className="underline">Get A Product Listed</span> {"  "}
            <External />
          </StyledLink>
          <StyledLink to="/page/privacy_policy">
            <span className="underline">Tracking &amp; Privacy Policy</span>{" "}
            {"  "}
            <External />
          </StyledLink>
          <StyledLink to="/page/buyers_score">
            <span className="underline">
              How the Buyer's Score is Calculated
            </span>{" "}
            {"  "}
            <External />
          </StyledLink>
        </LinksWrap>
        {/* <Subscribe /> */}
        <Tag>GenZtech Shop</Tag>
        <CopyRight>
          &copy; <a href="http://castynet.africa">Castynet Studios</a> 2018 -{" "}
          {Year()} | All Rights Reserved
        </CopyRight>
      </FooterWrap>
    </>
  );
}

const External = styled(Icons.ExternalLink)`
  vertical-align: text-bottom;
  width: 20px;
  color: var(--light-purple);
`;

const CopyRight = styled.p`
  text-align: center;
  padding: 10px;
  color: var(--cs-deep-blue);
  a {
    color: var(--cs-deep-blue);
  }
`;

const StyledLink = styled(Link)`
  cursor: pointer;
  transition: color 0.2s ease;
  color: var(--cs-deep-blue);
  padding-top: 10px;

  .underline {
    transition: text-decoration 0.2s ease;
  }

  &:hover {
    color: var(--light-purple);

    .underline {
      text-decoration: underline;
    }
  }
`;

const LinksWrap = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1%;
  padding-bottom: 20px;
`;

const Tag = styled.p`
  text-align: center;
  padding-bottom: 10px;
`;

const FooterWrap = styled.footer`
  background-color: rgb(228 228 228 / 80%);
  color: var(--cs-deep-blue);
  box-shadow: 0 -1px 1px rgb(156 39 176 / 0.24),
    0 -1px 1px rgb(156 39 176 / 0.24);
  padding: 10px 20px 20px 20px;
  text-transform: uppercase;
  font-size: 0.95em;
  font-weight: 600;
  letter-spacing: 1px;
`;
