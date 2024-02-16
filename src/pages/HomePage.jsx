import { useContext } from "react";
import { ProductContext } from "../context/productContext";
import Loader from "../components/Loader";
import Card from "../components/Card";
import { BasketContext } from "../context/basketContext";

const HomePage = () => {
  const { basket } = useContext(BasketContext);
  //abone olma işlemi
  const { products, category } = useContext(ProductContext);
  console.log(products);
  return (
    <div className="container">
      <h1 className="my-4 style">{category && category}</h1>
      <div className=" d-flex flex-wrap justify-content-center gap-3 justify-content-md-between gap-md-4 mt-3 p-4">
        {!products && <Loader />}
        {products?.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
