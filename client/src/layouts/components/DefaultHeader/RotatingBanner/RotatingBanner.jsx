import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { useState, useEffect } from "react";

const RotatingBanner = () => {
  const colors = ["bg-red-800", "bg-blue-800", "bg-green-800", "bg-purple-800"];
  const texts = [
    "New markdowns just added: Now up to 70% off.",
    "Explore our latest collection: Limited-time offers.",
    "Don't miss out! Shop now and enjoy great discounts.",
    "Discover exclusive deals on our premium products.",
  ];

  const [currentColorIndex, setCurrentColorIndex] = useState(0);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 3500);

    return () => clearInterval(intervalId);
  }, [colors.length, texts.length]);

  const currentColorClass = colors[currentColorIndex];
  const currentText = texts[currentTextIndex];

  return (
    <div
      className={`py-2 ${currentColorClass} transition-all duration-1000 ease-in`}
    >
      <div className="container flex items-center justify-center gap-3 pr-28 text-white">
        <span className="text-[14px]">{currentText}</span>
        <Link to="/" className="text-base underline">
          Shop Now
        </Link>
        <FaArrowRight />
      </div>
    </div>
  );
};

export default RotatingBanner;
