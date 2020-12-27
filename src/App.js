import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import { useApi } from "./components/productsContext";

import SingleProduct from "./components/singleProduct";
import Products from "./components/products";
import Loading from "./components/loading";
import Footer from "./components/footer";
import Quotes from "./components/quotes";
import NotFound from "./components/404";
import Pages from "./components/pages";
import Nav from "./components/nav";

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
            <Route
              exact
              path="/page/:pageSlug"
              render={(props) => <Pages {...props} />}
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
