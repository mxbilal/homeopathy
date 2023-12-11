import ProductCard from "../../components/ProductCard";
import p1 from "../../assets/p1.jpg";
import { useNavigate } from "react-router-dom";

const productData = [
  {
    id: 1,
    title: "Vaginal Revive",
    image: p1,
  },
];

const ProductsPage = () => {
  const navi = useNavigate();

  const handleClick = () => navi("product-detail");
  return (
    <div className="px-10 py-4 flex items-center flex-col">
      <p className="font-bold text-3xl text-lime-800">Our Products</p>
      <div className="container mx-auto my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div></div>
        {productData.map((product) => (
          <ProductCard key={product.id} {...product} openDetail={handleClick} />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
