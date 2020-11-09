import React from "react";
import styled from "styled-components";

export default function footer() {
  return (
    <>
      <FooterWrap>
        <Tag>GenZtech Shop</Tag>
        <LinksWrap>
          <Link>Ethics Statement</Link>
          <Link>Get Your Products Listed</Link>
          <Link>Tracking &amp; Privacy Policy</Link>
          <Link>How the Buyers Score is Calculated</Link>
        </LinksWrap>
        <CopyRight>&copy; Castynet Studios 2018 - 2020 | All Rights Reserved </CopyRight>
      </FooterWrap>
    </>
  );
}

const CopyRight = styled.p``;

const Link = styled.a``;

const LinksWrap = styled.div``;

const Tag = styled.p``;

const FooterWrap = styled.div``;
