import React from "react";
import Products from "./components/products";
import Nav from "./components/nav";
import Footer from "./components/footer";
import Quotes from "./components/quotes"
// import { useApi } from "./components/productsContext"

function App() {
  return (
    <>
      <Nav />
      <Quotes/>
      <Products />
      <Footer/>
    </>
  );
}

export default App;
