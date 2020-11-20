import React from "react";
import styled, { keyframes } from "styled-components";
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

const Rotate = keyframes`
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(359deg);
		}
`;

const Loader = styled(Icons.Loader)`
  width: 80px;
  vertical-align: middle;
  height: 100%;
  animation: ${Rotate} 1.3s infinite linear;
  color: #ff3d00;
`;

const MainWrap = styled.div`
  width: fit-content;
  height: 40vh;
  margin: 0 auto;
`;
