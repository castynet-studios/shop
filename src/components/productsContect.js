import React, { useEffect, useState, createContext } from "react";

export const ProductContext = createContext();

export const ProductProvider = () => {
  useEffect(() => {
    productData();
  }, []);

  const [products, setProducts] = useState([]);

  const productData = async () => {
    const rawData = await fetch(
      "https://raw.githubusercontent.com/castynet/shop/master/resources/products.json"
    );
    const data = await rawData.json();
    console.log(data);
    setProducts(data);
  };

  return (
    <ProductContext.Provider
      value={[products, setProducts]}
    ></ProductContext.Provider>
  );
};
