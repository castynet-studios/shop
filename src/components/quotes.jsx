import React from "react";
import styled from "styled-components";
import { Quotes, Icons } from "./utilities";

export default function QuotesSection() {
  var singleQuote = Quotes[Math.floor(Math.random() * Quotes.length)];

  return (
    <>
      <QuoteWrap>
        <Quote> {singleQuote}</Quote>
        <Insight>
          <p>Some Insight;</p>
          <Flame />
          {"  "}Best Value,{"  "}
          <Heart />
          {"  "}Good Value,{"  "}
          <Check />
          {"  "}Works as Expected
        </Insight>
      </QuoteWrap>
    </>
  );
}

const Flame = styled(Icons.Flame)`
  vertical-align: text-bottom;
  height: 25px;
  color: #bc00dc;
  background-color: #000;
  background-color: rgb(96 125 139 / 0.1);
  border-radius: 3px;
  box-shadow: 0px 2px 1px -1px rgba(56, 40, 40, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
`;

const Check = styled(Icons.Check)`
  vertical-align: text-bottom;
  height: 25px;
  color: #008000;
  background-color: rgb(96 125 139 / 0.1);
  border-radius: 3px;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
`;

const Heart = styled(Icons.Heart)`
  vertical-align: text-bottom;
  height: 25px;
  color: #ff0057;
  background-color: rgb(96 125 139 / 0.1);
  border-radius: 3px;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
`;

const Insight = styled.p`
  background-color: #fff;
  padding: 12px 20px;

  p {
    padding-bottom: 10px;
    text-decoration: underline;
  }
`;

const Quote = styled.div`
  padding: 12px 20px;
`;

const QuoteWrap = styled.div`
  text-align: center;
  margin: 20px auto;
  background-color: #f8ccff;
  text-transform: uppercase;
  font-weight: 500;
  letter-spacing: 1px;
  width: fit-content;
  border-radius: 3px;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
`;
