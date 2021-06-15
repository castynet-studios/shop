import React, { useContext, useState, useEffect } from "react";
import { Slugify } from "./helpers";

const ProductContext = React.createContext();
const limit = 12;

export function useApi() {
  return useContext(ProductContext);
}

export const ProductProvider = ({ children }) => {
  useEffect(() => {
    productData(limit, 0);
  }, []);

  const [products, setProducts] = useState([]);
  const [totalPages, setTotalPages] = useState();

  const productData = async (limit, page) => {
    var rawData = await fetch(
      "https://shop.api.genztech.xyz/api/collections/get/Product?token=9e0994af324faa13be7993a9c45782",
      {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          filter: { published: true },
          limit: limit,
          skip: limit * page,
          sort: { _modified: -1 },
        }),
      }
    );
    var data = await rawData.json();
    setTotalPages(Math.ceil(data.total / limit));
    var slugified = data.entries.map(function (el) {
      var o = Object.assign({}, el);
      o.slug = Slugify(o.Title);
      return o;
    });
    setProducts(slugified);
  };

  return (
    <ProductContext.Provider value={{ products, productData, totalPages }}>
      {children}
    </ProductContext.Provider>
  );
};
