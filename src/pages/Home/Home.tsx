import Card from "../../components/Card/Card";
import { products } from "../../data/products-mock";

function Home() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {products.map((product) => (
        <Card key={product.id} product={product} />
      ))}
    </div>
  );
}

export default Home;
