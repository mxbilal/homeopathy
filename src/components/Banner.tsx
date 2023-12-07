import "./component.scss";

const Banner = () => {
  return (
    <div className="relative h-96 overflow-hidden -z-10">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center z-0 banner-img" />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50 z-1" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-2">
        <h1 className="banner-text text-4xl md:text-6xl font-bold text-white mb-4 text-center animate-slow-fade-in">
          Discover the Natural Power of Herbal Remedies
        </h1>
        <p className="banner-text text-lg md:text-xl opacity-0 text-white text-center animate-slow-fade-in delay-500">
          Elevate your well-being with our curated selection of herbal products.
        </p>
      </div>
    </div>
  );
};

export default Banner;
