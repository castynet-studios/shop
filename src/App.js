import React from "react";
import Products from "./components/products";
import Nav from "./components/nav";
import Footer from "./components/footer";
import Quotes from "./components/quotes";
import styled from "styled-components";
import SingleProduct from "./components/singleProduct";
import Loading from "./components/loading";
import { useApi } from "./components/productsContext";
import NotFound from "./components/404";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export default function App() {
  const api = useApi();

  function LoadingPage() {
    if (api.products.length === 0) {
      return <Loading />;
    } else
      return (
        <>
          <Quotes />
          <Products />
        </>
      );
  }

  return (
    <>
      <Router>
        <Page>
          <Nav />
          <Switch>
            <Route exact path="/" component={LoadingPage} />
            <Route
              path="/product/:productId"
              render={(props) => <SingleProduct {...props} />}
            />
            <Route exact path="/ooh-no" component={NotFound} />
            <Route component={NotFound} />
          </Switch>
        </Page>
        <Footer />
      </Router>
    </>
  );
}

const Page = styled.div`
  min-height: 80vh;
`;
