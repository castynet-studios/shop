import React from "react";
import Products from "./components/products";
import Nav from "./components/nav";
import Footer from "./components/footer";
import Quotes from "./components/quotes";
import styled from "styled-components";
// import SingleProduct from "./components/singleProduct";
import Loading from "./components/loading"
import { useApi } from "./components/productsContext";

function App() {
  const api = useApi();
  const product = api.products;
  
  function Loaded() {
    console.log(product.length);
    if (product.length === 0) {
      return <Loading />
    } else return <Products />;
  }

  return (
    <>
      <Page>
        <Nav />
        <Quotes />
        <Loaded/>
      </Page>

      <Footer />
    </>
  );
}

const Page = styled.div`
  min-height: 80vh;
`;

export default App;
