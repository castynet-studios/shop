import React from "react";
import styled from "styled-components";
import { Quotes } from "./utilities";

export default function QuotesSection() {
  var singleQuote = Quotes[Math.floor(Math.random() * Quotes.length)];

  return (
    <>
      <Quote>{singleQuote}</Quote>
    </>
  );
}
const Quote = styled.p`
  text-align: center;
  margin: 20px auto;
  background-color: #f8ccff;
  padding: 12px 20px;
  text-transform: uppercase;
  font-weight: 500;
  letter-spacing: 1px;
  width: fit-content;
  border-radius: 3px;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
`;
