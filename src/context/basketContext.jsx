import { createContext, useState } from "react";
export const BasketContext = createContext();

export function BasketProvider({ children }) {
  const [basket, setBasket] = useState([]);
  return (
    <BasketContext.Provider value={{ basket }}>
      {children}
    </BasketContext.Provider>
  );
}
