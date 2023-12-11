import React from "react";
interface ProductDetailProps {
  name: string;
  description: string;
  image: string;
}

const ProductDetail: React.FC<ProductDetailProps> = ({
  name,
  description,
  image,
}) => {
  const handlePurchase = () => {
    const message = `Hi, I want to purchase the product ${name}.`;
    const whatsappLink = `https://wa.me/+923495683110?text=${encodeURIComponent(
      message
    )}`;
    window.location.href = whatsappLink;
  };

  return (
    <div className="flex justify-center items-center mt-10">
      <div className="max-w-md mx-auto bg-white p-8 border rounded shadow-md">
        <img src={image} alt={name} className="w-full h-auto mb-4 rounded" />
        <h2 className="text-2xl font-bold mb-4">{name}</h2>
        <p className="text-gray-600 mb-6">{description}</p>
        <button
          onClick={handlePurchase}
          className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition duration-300"
        >
          Purchase on WhatsApp
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
