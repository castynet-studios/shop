import React from "react";
import Products from "./components/products";
import Nav from "./components/nav";
import Footer from "./components/footer";
// import { useApi } from "./components/productsContext"

function App() {
  return (
    <>
      <Nav/>
      <Products />
      <Footer/>
    </>
  );
}

export default App;
