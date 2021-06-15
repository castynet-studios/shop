import React, { useState, useEffect } from "react";
import * as Styled from "./styles/pagination";
import { useApi } from "./productsContext";

export default function (props) {
  const api = useApi();

  var lastPage = api.totalPages;
  var page = props.match.params.slug ? parseInt(props.match.params.slug) : 1;
  const nonPage = { visible: false, page: "n/a" };
  console.log(lastPage, page);

  // we know what page one is always going to be
  // last page = total number of pages
  // total number of pages is always greater than 1

  // holds active, visibility, & actual number of page
  const [alpha, setAlpha] = useState(nonPage);
  const [beta, setBeta] = useState(nonPage);
  const [charlie, setCharlie] = useState(nonPage);

  useEffect(() => {
    if (page === 1) {
      var preAlpha = page + 1;
      var preBeta = page + 2;
      var preCharlie = page + 3;

      preAlpha < lastPage ? setAlpha({ visible: true, page: preAlpha }) : setAlpha(nonPage);
      preBeta < lastPage ? setBeta({ visible: true, page: preBeta }) : setBeta(nonPage);
      preCharlie < lastPage ? setCharlie({ visible: true, page: preCharlie }) : setBeta(nonPage);
    } else if (page === lastPage) {
      preAlpha = lastPage - 3;
      preBeta = lastPage - 2;
      preCharlie = lastPage - 1;

      preAlpha > 1 ? setAlpha({ visible: true, page: preAlpha }) : setAlpha(nonPage);
      preBeta > 1 ? setBeta({ visible: true, page: preBeta }) : setBeta(nonPage);
      preCharlie > 1 ? setCharlie({ visible: true, page: preCharlie }) : setBeta(nonPage);
    }
    // else if (page !== 2 && page !== 3 && page !== 4) {
    //   preAlpha = page - 1;
    //   preBeta = page;
    //   preCharlie = page + 1;

    //   setAlpha({ visible: true, page: preAlpha });
    //   setBeta({ visible: true, page: preBeta });
    //   setCharlie({ visible: true, page: preCharlie });
    // }
  }, [lastPage, page, nonPage]);

  return (
    <>
      <Styled.Wrapper>
        <Styled.PageWrap>
          <Styled.Button {...{ visible: true, active: page === 1 ? "active" : "notActive" }}>
            1
          </Styled.Button>
          ...
          <Styled.Button {...alpha}>{alpha.page}</Styled.Button>
          <Styled.Button {...beta}>{beta.page}</Styled.Button>
          <Styled.Button {...charlie}>{charlie.page}</Styled.Button>
          ...
          <Styled.Button {...{ visible: true, active: page === lastPage ? "active" : "notActive" }}>
            {lastPage}
          </Styled.Button>
        </Styled.PageWrap>
      </Styled.Wrapper>
    </>
  );
}
