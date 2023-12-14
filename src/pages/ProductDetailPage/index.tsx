import { useEffect, useState } from "react";
import p1 from "../../assets/p1.jpg";
import p2 from "../../assets/p2.png";
import p3 from "../../assets/p1.jpg";

const images = [p1, p2, p3];

const ProductDetailPage = () => {
  const handlePurchase = () => {
    const message = `Hi, I want to purchase the Vaginal Revive.`;
    const whatsappLink = `https://wa.me/+923185685693?text=${encodeURIComponent(
      message
    )}`;
    window.location.replace(whatsappLink);
  };
  const goFb = () =>
    window.location.replace(
      "https://www.facebook.com/profile.php?id=61554388898128&mibextid=ZbWKwL"
    );

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex]);
  return (
    <div className="flex justify-center items-center mt-10 text-black bg-white">
      <div className="max-w-4xl mx-auto bg-white p-8 border rounded shadow-md mb-10">
        <div className="flex mb-4">
          <img
            src={p1}
            alt="Vaginal Revive 1"
            className="w-1/2 h-auto mr-2 rounded"
          />
          <img
            src={p2}
            alt="Vaginal Revive 2"
            className="w-1/2 h-auto ml-2 rounded"
          />
        </div>
        <h2 className="text-2xl font-bold mb-4">Vaginal Revive</h2>
        <h4>Description</h4>
        <p>Vaginal tightening powder</p>
        <ul>
          <li>Shrink and tighten the vagina</li>
          <li>Reduce vaginal laxity</li>
          <li>Promote blood circulation & cell regeneration</li>
          <li>Reduce aging & childbirth issues</li>
        </ul>
        <p className="text-gray-600 mb-6"></p>
        <div className="flex space-x-4">
          <button
            onClick={handlePurchase}
            className="flex-1 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition duration-300"
          >
            Purchase on WhatsApp
          </button>
          <button
            onClick={goFb}
            className="flex-1 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
          >
            Purchase on Facebook
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
