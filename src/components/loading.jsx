import React from "react";
import styled from "styled-components";
import { Icons } from "./utilities";

export default function () {
  return (
    <>
      <MainWrap>
        <Loader />
      </MainWrap>
    </>
  );
}

const Loader = styled(Icons.Flame)`
  width: 100px;
  vertical-align: middle;
  height: 100%;
`;

const MainWrap = styled.div`
  width: fit-content;
  height: 40vh;
  margin: 0 auto;
`;
