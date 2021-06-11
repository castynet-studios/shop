import React from "react";
import * as Styled from "./styles/pagination";

export default function () {
  return (
    <>
      <Styled.Wrapper>
        <Styled.PageWrap>
          <Styled.Button>1</Styled.Button>
          ...
          <Styled.Button>4</Styled.Button>
          <Styled.Button active>5</Styled.Button>
          <Styled.Button>6</Styled.Button>
          ...
          <Styled.Button>15</Styled.Button>
        </Styled.PageWrap>
      </Styled.Wrapper>
    </>
  );
}
