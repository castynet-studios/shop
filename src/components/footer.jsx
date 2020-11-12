import React from "react";
import styled from "styled-components";
import { Icons } from "./utilities";
import { Year } from "./helpers";

export default function footer() {
  return (
    <>
      <FooterWrap>
        <LinksWrap>
          <Link>
            Ethics Statement {"  "}
            <External />
          </Link>
          <Link>
            Get Your Products Listed {"  "}
            <External />
          </Link>
          <Link>
            Tracking &amp; Privacy Policy {"  "}
            <External />
          </Link>
          <Link>
            How the Buyers Score is Calculated {"  "}
            <External />
          </Link>
        </LinksWrap>
        <Tag>GenZtech Shop</Tag>
        <CopyRight>
          &copy; <u>Castynet Studios</u> 2018 - {Year()} | All Rights Reserved
        </CopyRight>
      </FooterWrap>
    </>
  );
}

const External = styled(Icons.ExternalLink)`
  vertical-align: text-bottom;
  width: 20px;
  color: #b700d6;
`;

const CopyRight = styled.p`
  text-align: center;
  padding: 10px;
  color: #ff5722;
`;

const Link = styled.a``;

const LinksWrap = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1%;
  padding-bottom: 20px;
`;

const Tag = styled.p`
  text-align: center;
  text-decoration: underline;
  padding-bottom: 10px;
`;

const FooterWrap = styled.div`
  background-color: rgb(228 228 228 / 80%);
  color: #0c0021;
  box-shadow: 0 -1px 1px rgb(156 39 176 / 0.24),
    0 -1px 1px rgb(156 39 176 / 0.24);
  padding: 20px;
  text-transform: uppercase;
  font-size: 0.95em;
  font-weight: 600;
  letter-spacing: 1px;
`;
