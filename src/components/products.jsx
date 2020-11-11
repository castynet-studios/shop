import React from "react";
import { useApi } from "./productsContext";
import styled from "styled-components";
import { Icons } from "./utilities";

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
              <Rate>
                Buyers Rating {products.BuyersScore}/10
                <Icons.DotCircle size="30" />
              </Rate>
            </Wrapper>
          </div>
        ))}
        <div style={{ width: "220px", height: "0" }}></div>
        <div style={{ width: "220px", height: "0" }}></div>
        <div style={{ width: "220px", height: "0" }}></div>
      </Page>
    </>
  );
}

const Rate = styled.p``;

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
  width: 200px;
  margin: 2%;
  padding: 10px;
`;

const Page = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 3%;
  padding-top: 2%;
  margin: 0 Auto;
  gap: 1%;
`;
