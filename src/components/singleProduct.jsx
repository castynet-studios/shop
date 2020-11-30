import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useApi } from "./productsContext";
import Loading from "./loading"

export default function () {
  const api = useApi();
  const [product, setProduct] = useState();

  useEffect(() => {
    setProduct(api.setInViewProduct());
    console.log(product);
  }, [api, product]);

  function ProductInfo() {
    if ( product === undefined ) {
      return <Loading/>
    }
    else {
      return <MP/>
    }
  }
  
  function MP() {
    return(
    <>
      <MainWrap>
        Rating - {product.BuyersScore}
        <br/>
        Description: "Pace Live headphones are Bluetooth headphones that can last up to 15 hours on a single charge. Pace Focus headphones offer surround sound giving you the best experience when listening to music while shutting out distractions."
        {/* {Image} */}
        {product.JumiaLink}
        <br/>
        {product.JumiaPrice}
        <br/>
        {product.KilimallLink}
        <br/>
        {product.KilimallPrice}
        <br/>
        {product.OtherLinkAddress}
        <br/>
        {product.OtherPrice}
        <br/>
        {product.OtherTitle}
        <br/>
        {product.ReviewLink}
        <br/>
        {product.ShouldBuy}
        <br/>
        {product.Spec}
        <br/> 
        {product.Title}
      </MainWrap>
    </>
    )
    
  }

  return (
    <>
     <ProductInfo/>
    </>
  );
}

const MainWrap = styled.p``;
