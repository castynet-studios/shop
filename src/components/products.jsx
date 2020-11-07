import React from "react";
import { useApi } from "./productsContext";
import styled from "styled-components";

export default function Products() {
  const products = useApi().products;
  console.log(useApi().products);

  return (
    <>
      <Page>
        {products.map((products) => (
          <div key={products._id}>
            <Wrapper>
              <Image
                src={"https://shop.api.genztech.xyz" + products.Image.path}
                alt={products.Description}
              />
              <Title>{products.Title}</Title>
              <Price>KSH {products.JumiaPrice}</Price>
            </Wrapper>
          </div>
        ))}
        <div style={{ width: "250px", height: "0" }}></div>
        <div style={{ width: "250px", height: "0" }}></div>
        <div style={{ width: "250px", height: "0" }}></div>
      </Page>
    </>
  );
}

const Image = styled.img`
  width: 100%;
`;

const Price = styled.p``;

const Title = styled.h2``;

const Wrapper = styled.div`
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border-radius: 2px;
  background-color: #fff;
  width: 230px;
  margin: 2%;
  padding: 10px;
`;

const Page = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 3%;
  padding-top: 3%;
  margin: 0 Auto;
  border-left: #fff solid 2px;
  border-right: #fff solid 2px;
  gap: 1%;
`;
