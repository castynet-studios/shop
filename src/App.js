import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import { useApi } from "./components/productsContext";
import ReactGA from "react-ga";
import { createBrowserHistory } from "history";

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
  const trackingId = "UA-122346776-4";

  ReactGA.initialize(trackingId);
  const history = createBrowserHistory();
  history.listen((location) => {
    ReactGA.set({ page: location.pathname });
    ReactGA.pageview(location.pathname);
  });

  function LoadingPage(props) {
    if (api.products.length === 0) {
      return <Loading />;
    } else
      return (
        <>
          <Quotes />
          <Products {...props} />
        </>
      );
  }

  return (
    <>
      <Router history={history}>
        <Page>
          <Nav />
          <Switch>
            <Route exact path="/" render={(props) => <LoadingPage {...props} />} />
            <Route path="/product/:slug" render={(props) => <SingleProduct {...props} />} />
            {/* <Route path="/p?/:slug" render={(props) => <SingleProduct {...props} />} /> */}
            <Route exact path="/page/:pageSlug" render={(props) => <Pages {...props} />} />
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
