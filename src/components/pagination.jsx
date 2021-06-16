import React, { useState, useEffect } from "react";
import * as Styled from "./styles/pagination";
import { useApi } from "./productsContext";
import { getPagesArr } from "./helpers";

export default function (props) {
  const api = useApi();

  var lastPage = api.totalPages;
  var page = props.match.params.slug ? parseInt(props.match.params.slug) : 1;
  const [pages, setPages] = useState([]);

  useEffect(() => {
    setPages(getPagesArr(page, lastPage));
  }, [lastPage, page]);

  console.log(pages);

  return (
    <>
      <Styled.Wrapper>
        <Styled.PageWrap>
          <Styled.Button {...{ visible: true, active: page === 1 ? "active" : "notActive" }}>
            1
          </Styled.Button>
        </Styled.PageWrap>
      </Styled.Wrapper>
    </>
  );
}
