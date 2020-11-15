import React from "react";
import Products from "./components/products";
import Nav from "./components/nav";
import Footer from "./components/footer";
import Quotes from "./components/quotes";
import styled from "styled-components";
import SingleProduct from "./components/singleProduct"
// import { useApi } from "./components/productsContext"

function App() {
  return (
    <>
      <Page>
        <Nav />
        <Quotes />
        <Products />
        <SingleProduct />
      </Page>

      <Footer />
    </>
  );
}

const Page = styled.div`
  min-height: 80vh;
`;

export default App;
