const ProductCard = ({
  image,
  title,
  openDetail,
}: {
  image: string;
  title: string;
  openDetail: () => void;
}) => {
  return (
    <div
      className="group relative overflow-hidden cursor-pointer"
      onClick={openDetail}
    >
      <img src={image} alt={title} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black opacity-50 transition-opacity group-hover:opacity-0"></div>
      <div className="absolute inset-0 flex items-center justify-center text-white text-lg font-bold z-10">
        {title}
      </div>
    </div>
  );
};

export default ProductCard;
