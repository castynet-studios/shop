import React, { useContext, useState, useEffect } from "react";
import { Slugify } from "./helpers";

const ProductContext = React.createContext();

export function useApi() {
  return useContext(ProductContext);
}

export const ProductProvider = ({ children }) => {
  useEffect(() => {
    productData();
  }, []);

  const [products, setProducts] = useState([]);

  const productData = async () => {
    const rawData = await fetch(
      "https://shop.api.genztech.xyz/api/collections/get/Product?token=9e0994af324faa13be7993a9c45782"
    );
    const data = await rawData.json();
    const published = data.entries.filter(function (x) {
      return x.published === true;
    });
    var slugified = published.map(function (el) {
      var o = Object.assign({}, el);
      o.slug = Slugify(o.Title);
      return o;
    });
    setProducts(slugified);
  };

  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};
