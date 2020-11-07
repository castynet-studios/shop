import React, { useContext, useState, useEffect } from "react";

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
    setProducts(data.entries);
  };

  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};
