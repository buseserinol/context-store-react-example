import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const ProductContext = createContext();

export function ProductProvider({ children }) {
  const [products, setProducts] = useState(null);
  const [category, setCategory] = useState(null);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <ProductContext.Provider value={{ products, category }}>
      {children}
    </ProductContext.Provider>
  );
}
