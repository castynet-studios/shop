import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useApi } from "./productsContext";
import Loading from "./loading";
import ReactMarkdown from "react-markdown";

export default function () {
  const api = useApi();
  const [product, setProduct] = useState();

  useEffect(() => {
    setProduct(api.setInViewProduct());
    console.log(product);
  }, [api, product]);

  function ProductInfo() {
    if (product === undefined) {
      return <Loading />;
    } else {
      return <MP />;
    }
  }

  function MP() {
    return (
      <>
        <Wrapper>
          <TitleWrap>
            <Title>{product.Title}</Title>
            <Rating great={product.ShouldBuy}>
              Buyer's Rating - {product.BuyersScore}/10
            </Rating>
          </TitleWrap>

          <MainWrap>
            <ProductImage>
              <Image
                src={"https://shop.api.genztech.xyz" + product.Image.path}
                alt={product.Description}
              />
            </ProductImage>

            <Details>
              <ContentSection>
                <h3>Specifications</h3>
                <p>
                  <ReactMarkdown source={product.Spec} />
                </p>
              </ContentSection>
              <ContentSection>
                <h3>Description</h3>
                <p>{product.Description}</p>
              </ContentSection>
              <ShopWrap content={product.JumiaLink}>
                {product.JumiaLink}
                {product.JumiaPrice}
              </ShopWrap>
              <ShopWrap content={product.KilimallLink}>
                {product.KilimallLink}
                {product.KilimallPrice}
              </ShopWrap>
              <ShopWrap content={product.OtherLinkAddress}>
                {product.OtherTitle}
                {product.OtherLinkAddress}
                {product.OtherPrice}
              </ShopWrap>

              <Button
                href={product.ReviewLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                See Detailed Review
              </Button>
            </Details>
          </MainWrap>
        </Wrapper>
        ;
      </>
    );
  }

  return (
    <>
      <ProductInfo />
    </>
  );
}

const Show = (content) => {
  if (content === "") {
    return "hidden";
  } else return "visible";
};

const handleBgColor = (great) => {
  return great ? "#008000" : "#800000";
};

const ShopWrap = styled.div`
  visibility: ${({ content }) => Show(content)};
`;
const Button = styled.a`
  padding: 8px 10px;
  background-color: #f0f;
  display: block;
  width: fit-content;
`;

const Rating = styled.p`
  border: 1px solid #000;
  padding: 7px 10px;
  margin: 10px 0 0 10px;
  width: fit-content;
  border-radius: 4px;
  text-transform: uppercase;
  font-weight: 500;
  font-size: 0.95em;
  background-color: ${({ great }) => handleBgColor(great)};
  color: #fff;
  letter-spacing: 1px;
`;

const ContentSection = styled.div`
  padding: 10px 0 0 10px;
`;

const Image = styled.img`
  width: 100%;
`;

const ProductImage = styled.div`
  padding: 15px;
  width: 350px;
  border-radius: 5px;
  margin: 15px;
  background-color: rgb(156 39 176 / 0.1);
`;

const Details = styled.div`
  width: 65%;
  width: 500px;
`;
const Title = styled.h2`
  text-align: center;
`;

const TitleWrap = styled.div`
  padding: 20px 10px;
  margin-top: 20px;
  color: #0c0021;
  border-top: solid 1px #9c27b0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const MainWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  gap: 50px;
  margin: 0 0 20px;
  border-bottom: solid 1px #9c27b0;
  padding-bottom: 20px;
`;

const Wrapper = styled.div`
  width: 96%;
  margin: 0 auto;
  background-color: rgb(250 250 255 / 0.95);
`;
