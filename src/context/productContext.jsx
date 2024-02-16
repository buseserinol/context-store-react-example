import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const ProductContext = createContext();

export function ProductProvider({ children }) {
  const [products, setProducts] = useState(null);
  const [category, setCategory] = useState("All");

  useEffect(() => {
    //önceki ürünleri kaldır > yükleniyor tetiklenir.
    setProducts(null);
    //hangi url'e istek atılacağını belirle
    //hepsi seçeneği seçildiyse hepsini değilse seçilen kategoriyi yayınlama
    const url =
      category === "All"
        ? "https://fakestoreapi.com/products"
        : `https://fakestoreapi.com/products/category/${category}`;
    axios
      .get(url)
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, [category]);

  return (
    <ProductContext.Provider value={{ products, category, setCategory }}>
      {children}
    </ProductContext.Provider>
  );
}
