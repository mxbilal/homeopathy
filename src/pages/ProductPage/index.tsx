import ProductCard from "../../components/ProductCard";
import p1 from "../../assets/p1.jpg";
import p2 from "../../assets/p2.jpg";
import p3 from "../../assets/p3.jpg";

const productData = [
  {
    id: 1,
    title: "Product 1",
    image: p1,
  },
  {
    id: 2,
    title: "Product 2",
    image: p2,
  },
  {
    id: 3,
    title: "Product 3",
    image: p3,
  },
  // Add more product data as needed
];

const ProductsPage = () => {
  return (
    <div className="container mx-auto my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {productData.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
};

export default ProductsPage;
