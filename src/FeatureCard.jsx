// FeatureCard.js
const FeatureCard = ({ img, alt, title, description }) => (
  <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center w-full sm:w-64">
    <img
      src={img}
      alt={alt}
      className="h-16 w-16 mb-4"
    />
    <h3 className="text-lg text-blue-300 font-bold mb-2 text-center">
      {title}
    </h3>
    <p className="text-gray-600 text-center">
      {description}
    </p>
  </div>
);

export default FeatureCard;
