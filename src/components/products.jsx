import React from "react";
import { useApi } from "./productsContext";
import styled from "styled-components";
import { Icons } from "./utilities";

export default function Products() {
  const products = useApi().products;
  useApi().setProductView("hello World");
  console.log(useApi().productView);

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
          <Wrapper key={products._id}>
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
        ))}
        <div style={{ width: "220px", height: "0" }}></div>
        <div style={{ width: "220px", height: "0" }}></div>
        <div style={{ width: "220px", height: "0" }}></div>
        <div style={{ width: "220px", height: "0" }}></div>
      </Page>
    </>
  );
}

const handleBgColor = (color) => {
  if (color > 8.5) {
    return "#bc00dc";
  } else if (color > 7.5) {
    return "#ff0057";
  } else if (color > 5.5) {
    return "#008000";
  } else {
    return;
  }
};

const Flame = styled(Icons.Flame)`
  vertical-align: text-bottom;
  height: 25px;
  color: #bc00dc;
  background-color: #000;
  background-color: rgb(96 125 139 / 0.1);
  border-radius: 3px;
  box-shadow: 0px 2px 1px -1px rgba(56, 40, 40, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
`;

const Check = styled(Icons.Check)`
  vertical-align: text-bottom;
  height: 25px;
  color: #008000;
  background-color: rgb(96 125 139 / 0.1);
  border-radius: 3px;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
`;

const Heart = styled(Icons.Heart)`
  vertical-align: text-bottom;
  height: 25px;
  color: #ff0057;
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
  background-color: #fff;
  width: 200px;
  padding: 10px;
  transition: box-shadow 0.4s;

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
  gap: 15px;
`;
