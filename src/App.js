import React from "react";
import Products from "./components/products";
import Nav from "./components/nav";
import Footer from "./components/footer";
import Quotes from "./components/quotes";
import styled from "styled-components";
import SingleProduct from "./components/singleProduct";
import Loading from "./components/loading"
import { useApi } from "./components/productsContext";

function App() {
  const api = useApi();
  const product = api.products;
  
  function LoadingPage() {
    if (product.length === 0) {
      return <Loading />
    } else return <Products />;
  }


  function InView() {
    if (api.page === "page") {
      return <LoadingPage/>
    }
    else if (api.page === "product") {
      return <SingleProduct/>
    }
  }

  return (
    <>
      <Page>
        <Nav />
        <Quotes />
        <InView/>
      </Page>

      <Footer />
    </>
  );
}

const Page = styled.div`
  min-height: 80vh;
`;

export default App;
