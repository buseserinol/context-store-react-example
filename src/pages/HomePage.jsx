import { useContext } from "react";
import { ProductContext } from "../context/productContext";
import Loader from "../components/Loader";
const HomePage = () => {
  //abone olma işlemi
  const { products } = useContext(ProductContext);
  console.log(products);
  return (
    <div>
      {!products && <Loader />}
      {products?.map((urun) => (
        <h1>Kart</h1>
      ))}
    </div>
  );
};

export default HomePage;
