import { createContext, useState } from "react";
export const BasketContext = createContext();
import { useLocalStorage } from "@uidotdev/usehooks";
import { toast } from "react-toastify";

export function BasketProvider({ children }) {
  const [basket, setBasket] = useLocalStorage("basket", []);

  const addToBasket = (newProduct) => {
    //! bu üründen sepette var mı kontrol
    const found = basket.find((i) => i.id === newProduct.id);

    if (found) {
      //bulunan ürünün miktarını bir arttır
      const updated = { ...found, amount: found.amount + 1 };

      //!sepet dizisindeki eski ürünün yerine güncel halinin koy
      const newBasket = basket.map((item) =>
        item.id === updated.id ? updated : item
      );
      //!state'i güncelle

      setBasket(newBasket);
      toast.info(`Product quantity increased(${updated.amount})`);
    } else {
      //ürün sepete ilk defa ekleniyosa ürünün bütün bilgilerini getir bir de miktar değeri ekle bunu 1 yap
      setBasket([...basket, { ...newProduct, amount: 1 }]);

      toast.success("The product added to your cart.");
    }
    console.log(basket);
  };
  //! ürünü sepetten kaldır

  const removeFromBasket = (deleteId) => {
    //!sepetteki ürünü bul
    const found = basket.find((i) => i.id === deleteId);

    if (found.amount > 1) {
      //! miktarı 1'den fazlaysa > mik. 1 eksilt
      const updated = { ...found, amount: found.amount - 1 };
      const newBasket = basket.map((i) => (i.id === updated.id ? updated : i));
      setBasket(newBasket);
      toast.info(`Product quantity reduced (${updated.amount})`);
    } else {
      const filtred = basket.filter((i) => i.id !== deleteId);
      setBasket(filtred);

      toast.error("Product removed from cart");
    }
  };
  return (
    <BasketContext.Provider value={{ basket, addToBasket, removeFromBasket }}>
      {children}
    </BasketContext.Provider>
  );
}
