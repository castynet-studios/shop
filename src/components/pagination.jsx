import React from "react";
import * as Styled from "./styles/pagination";
import { useApi } from "./productsContext";
import { getPagesArr } from "./helpers";

export default function (props) {
  const api = useApi();

  var lastPage = api.totalPages;
  var page = props.match.params.slug ? parseInt(props.match.params.slug) : 1;
  let pages = getPagesArr(page, lastPage);

  return (
    <>
      <Styled.Wrapper>
        <Styled.PageWrap>
          {pages.map((p) => (
            <Styled.Button key={p} {...{ active: p === page ? "active" : "notActive" }}>
              {p}
            </Styled.Button>
          ))}
        </Styled.PageWrap>
      </Styled.Wrapper>
    </>
  );
}
