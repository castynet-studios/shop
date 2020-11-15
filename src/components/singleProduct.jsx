import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useApi } from "./productsContext";

export default function () {
  const api = useApi();
  const [product, setProduct] = useState();

  useEffect(() => {
    setProduct(api.setInViewProduct());
    console.log(product);
  }, [api, product]);

  return (
    <>
      <MainWrap>hello</MainWrap>
    </>
  );
}

const MainWrap = styled.p``;
