import React from "react";
import styled from "styled-components";
import { ExternalLink } from "@styled-icons/heroicons-outline/ExternalLink";

export default function footer() {
  return (
    <>
      <FooterWrap>
        <LinksWrap>
          <Link>
            Ethics Statement {"  "}
            <ExternalLink size="20" />
          </Link>
          <Link>
            Get Your Products Listed {"  "}
            <ExternalLink size="20" />
          </Link>
          <Link>
            Tracking &amp; Privacy Policy {"  "}
            <ExternalLink size="20" />
          </Link>
          <Link>
            How the Buyers Score is Calculated {"  "}
            <ExternalLink size="20" />
          </Link>
        </LinksWrap>
        <Tag>GenZtech Shop</Tag>
        <CopyRight>
          &copy; Castynet Studios 2018 - 2020 | All Rights Reserved
        </CopyRight>
      </FooterWrap>
    </>
  );
}

const CopyRight = styled.p`
  text-align: center;
  text-decoration: underline;
  padding: 10px;
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
  background-color: rgb(228 228 228 / 75%);
  color: #0c0021;
  box-shadow: 0 -1px 1px rgb(156 39 176 / 0.24),
    0 -1px 1px rgb(156 39 176 / 0.24);
  padding: 20px;
  text-transform: uppercase;
  font-size: 0.95em;
  font-weight: 600;
  letter-spacing: 1px;
`;
