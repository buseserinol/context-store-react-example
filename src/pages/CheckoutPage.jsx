import { useContext } from "react";
import { BasketContext } from "../context/basketContext";
import BasketItem from "../components/BasketItem";
import { Link } from "react-router-dom";

const CheckoutPage = () => {
  const { basket, addToBasket, removeFromBasket } = useContext(BasketContext);
  const totalAmount = basket.reduce((total, i) => total + i.amount, 0);
  const totalPrice = basket.reduce((total, i) => total + i.price * i.amount, 0);
  return (
    <div className="container my-4">
      <div className="d-flex flex-column gap-5">
        {/*sepette ürün YOKSA  */}
        {basket.length === 0 && (
          <p className="Text-center my-5">
            <span className="mx-3">
              Firstly, please add a product to your cart.
            </span>
            <Link to={"/"}>Products</Link>
          </p>
        )}
        {/*sepette ürün VARSA  */}
        {basket?.map((item) => (
          <BasketItem
            key={item.id}
            item={item}
            addToBasket={addToBasket}
            removeFromBasket={removeFromBasket}
          />
        ))}
      </div>

      <div className="border rounded p-5 my-5 fs-4">
        <p>
          Products in your cart:
          <span className="text-warning"> {totalAmount} items</span>
        </p>
        <p>
          Total Price:
          <span className="text-success"> {totalPrice.toFixed(2)} ₺</span>
        </p>
      </div>
    </div>
  );
};

export default CheckoutPage;
