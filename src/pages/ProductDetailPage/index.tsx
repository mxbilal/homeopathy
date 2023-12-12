import p1 from "../../assets/p1.jpg";

const ProductDetailPage = () => {
  const handlePurchase = () => {
    const message = `Hi, I want to purchase the Vaginal Revive.`;
    const whatsappLink = `https://wa.me/+923185685693?text=${encodeURIComponent(
      message
    )}`;
    window.location.replace(whatsappLink);
  };
  return (
    <div className="flex justify-center items-center mt-10 text-black bg-white">
      <div className="max-w-lg mx-auto bg-white p-8 border rounded shadow-md mb-10">
        <img
          src={p1}
          alt="Vaginal Revive"
          className="w-full h-auto mb-4 rounded"
        />
        <h2 className="text-2xl font-bold mb-4">Vaginal Revive</h2>
        <h4>Description</h4>
        <p>Vaginal tightning powder</p>
        <ul>
          <li>shrink and tighten the vagina</li>
          <li>Reduce vaginal Laxity</li>
          <li>Promote blood circ ation & Cell regeneration</li>
          <li>Reduces aging & childbirth issues</li>
        </ul>
        <p className="text-gray-600 mb-6"></p>
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

export default ProductDetailPage;
