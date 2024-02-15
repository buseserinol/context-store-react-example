import { useContext } from "react";
import { ProductContext } from "../context/productContext";
import Loader from "../components/Loader";
import Card from "../components/Card";
const HomePage = () => {
  //abone olma işlemi
  const { products } = useContext(ProductContext);
  console.log(products);
  return (
    <div className="container d-flex flex-wrap justify-content-center gap-3 justify-content-md-between gap-md-4 mt-3 p-4">
      {!products && <Loader />}
      {products?.map((product) => (
        <Card key={product.id} product={product} />
      ))}
    </div>
  );
};

export default HomePage;
