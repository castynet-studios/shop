import React from "react";
import { useApi } from "./productsContext";
import styled from "styled-components";
import { Icons } from "./utilities";
import { Link } from "react-router-dom";

export default function () {
  const api = useApi();
  const products = api.products;

  function insight(rating) {
    var r = parseFloat(rating);
    if (r > 8.5) {
      return <Flame />;
    } else if (r > 7.5) {
      return <Heart />;
    } else if (r > 5.5) {
      return <Check />;
    } else {
      return;
    }
  }

  function findPrice(Jumia, Kilimall, Other) {
    var JumiaP = parseInt(Jumia.replace(/,/g, ""));
    var KilimallP = parseInt(Kilimall.replace(/,/g, ""));
    var OtherP = parseInt(Other.replace(/,/g, ""));

    var least = Math.min.apply(
      null,
      [JumiaP, KilimallP, OtherP].filter(Number.isInteger)
    );

    if (least === JumiaP) {
      return Jumia;
    } else if (least === KilimallP) {
      return Kilimall;
    } else return Other;
  }

  return (
    <>
      <Page>
        {products.map((products) => (
          <StyledLink key={products._id} to={`/product/${products.slug}`}>
            <Wrapper>
              <Image
                src={"https://shop.api.genztech.xyz" + products.Image.path}
                alt={products.Description}
              />
              <Title>{products.Title}</Title>
              <Rate color={products.BuyersScore}>
                {insight(products.BuyersScore)}
                {"  "} Buyers Score {"  "}
                <span className="coloured">{products.BuyersScore}</span>
                /10
              </Rate>
              <Price>
                KSh{" "}
                {findPrice(
                  products.JumiaPrice,
                  products.KilimallPrice,
                  products.OtherPrice
                )}
              </Price>
            </Wrapper>
          </StyledLink>
        ))}
        <div style={{ width: "220px", height: "0", margin: "7px" }}></div>
        <div style={{ width: "220px", height: "0", margin: "7px" }}></div>
        <div style={{ width: "220px", height: "0", margin: "7px" }}></div>
        <div style={{ width: "220px", height: "0", margin: "7px" }}></div>
      </Page>
    </>
  );
}

const handleBgColor = (color) => {
  if (color > 8.5) {
    return "var(--light-purple)";
  } else if (color > 7.5) {
    return "var(--pink)";
  } else if (color > 5.5) {
    return "var(--green)";
  } else {
    return;
  }
};

const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: inherit;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    color: inherit;
    text-decoration: inherit;
  }
`;

const Flame = styled(Icons.Flame)`
  vertical-align: text-bottom;
  height: 25px;
  color: var(--light-purple);
  background-color: #000;
  background-color: rgb(96 125 139 / 0.1);
  border-radius: 3px;
  box-shadow: 0px 2px 1px -1px rgba(56, 40, 40, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
`;

const Check = styled(Icons.Check)`
  vertical-align: text-bottom;
  height: 25px;
  color: var(--green);
  background-color: rgb(96 125 139 / 0.1);
  border-radius: 3px;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
`;

const Heart = styled(Icons.Heart)`
  vertical-align: text-bottom;
  height: 25px;
  color: var(--pink);
  background-color: rgb(96 125 139 / 0.1);
  border-radius: 3px;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
`;

const Rate = styled.p`
  padding: 5px;
  font-weight: 500;

  .coloured {
    color: ${({ color }) => handleBgColor(color)};
    padding: 5px;
    background-color: rgb(0 0 0 / 0.07);
    border-radius: 1000px;
  }

  &:after {
    content: "";
    width: 100%;
    height: 5px;
    background-color: ${({ color }) => handleBgColor(color)};
    display: block;
    margin-top: -9.5px;
    z-index: -99;
    opacity: 0.1;
    border-radius: 1000px;
  }
`;

const Image = styled.img`
  width: 100%;
`;

const Price = styled.p`
  padding: 5px;
  font-weight: 500;
  letter-spacing: 1px;
`;

const Title = styled.h2``;

const Wrapper = styled.div`
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border-radius: 2px;
  background-color: var(--white);
  width: 200px;
  padding: 10px;
  transition: box-shadow 0.4s;
  margin: 7px;

  @media screen and (max-width: 450px) {
    width: 80%;
    margin: 7px auto;
  }

  &:hover {
    cursor: pointer;
    box-shadow: 0px 1px 8px 2px rgba(0, 0, 0, 0.37);
  }
`;

const Page = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 3%;
  padding-top: 2%;

  @media screen and (max-width: 450px) {
    margin: 0 auto;
  }
`;
