import { useRef, useState } from "react";
import images from "../../../assets/images";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const View = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const sliderRef = useRef(null);

  const imagesArray = [images.slider1, images.slider2, images.slider3];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    afterChange: (index) => setSelectedImageIndex(index),
  };

  const handleThumbnailClick = (index) => {
    setSelectedImageIndex(index);
    sliderRef.current.slickGoTo(index);
  };

  const incrementQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  return (
    <div className="container py-12">
      <div className="mb-6">Women New In</div>
      <div className="flex w-full flex-col gap-7 sm:items-center sm:justify-center xl:flex-row xl:items-start xl:justify-between">
        <div className="flex xl:w-2/3">
          <div className="space-y-3 pl-4 sm:hidden xl:block">
            {imagesArray.map((image, index) => (
              <img
                key={index}
                src={image}
                alt=""
                className={`h-40 w-28 cursor-pointer border-[1px]  p-2 ${
                  selectedImageIndex === index
                    ? " border-2 border-stone-900"
                    : "border-[#ddd]"
                }`}
                onClick={() => handleThumbnailClick(index)}
                loading="lazy"
              />
            ))}
          </div>
          {/* main img */}

          <div className="flex flex-1 items-center justify-center ">
            <Slider
              {...settings}
              className="h-[56rem] w-[46rem]"
              ref={sliderRef}
            >
              {imagesArray.map((image, index) => (
                <div key={index} className="h-full w-full">
                  <img
                    src={image}
                    alt=""
                    className="h-[56rem] w-[46rem] cursor-pointer"
                    loading="lazy"
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>

        <div className="flex-1">
          <h1 className="mb-2 font-['Petrona'] text-3xl font-bold uppercase">
            Saint laurent
          </h1>
          <p className="text-base font-normal text-neutral-800">
            Turtle neck Saint Laurent dress
          </p>
          <p className="my-4 font-['Petrona'] text-lg font-black ">$3,200</p>
          <p>
            Color:
            <span className="font-['Petrona'] text-lg font-bold"> Black</span>
          </p>
          <p className="relative top-6 mb-3">Size:</p>
          <div className="mb-4">
            <div className="flex justify-end">
              <a href="/">
                <span className="mb-2 inline-block underline">
                  View size guide
                </span>
              </a>
            </div>
            <div className="flex space-x-3">
              <span className="inline-block w-1/5 cursor-pointer border-[1px] border-black px-4 py-2 text-center hover:scale-105 hover:transform hover:bg-gray-300">
                XS
              </span>
              <span className="inline-block w-1/5 cursor-pointer border-[1px] border-black px-4 py-2 text-center hover:scale-105 hover:transform hover:bg-gray-300">
                S
              </span>
              <span className="inline-block w-1/5 cursor-pointer border-[1px] border-black px-4 py-2 text-center hover:scale-105 hover:transform hover:bg-gray-300">
                M
              </span>
              <span className="inline-block w-1/5 cursor-pointer border-[1px] border-black px-4 py-2 text-center hover:scale-105 hover:transform hover:bg-gray-300">
                L
              </span>
              <span className="inline-block w-1/5 cursor-pointer border-[1px] border-black px-4 py-2 text-center hover:scale-105 hover:transform hover:bg-gray-300">
                XL
              </span>
            </div>
          </div>
          <div className="mb-4 mt-8 flex">
            <p className="mr-4 flex items-center justify-center">Quantity:</p>
            <button
              onClick={decrementQuantity}
              className="flex h-8 w-8 items-center justify-center border-[1px] border-black text-center first-letter:cursor-pointer hover:scale-105 hover:transform hover:bg-gray-300"
            >
              <FaMinus />
            </button>
            <input
              type="text"
              value={quantity}
              className="h-8 w-12 border-b-[1px] border-t-[1px] border-black text-center"
            />
            <button
              onClick={incrementQuantity}
              className="flex h-8 w-8 items-center justify-center border-[1px] border-black text-center first-letter:cursor-pointer hover:scale-105 hover:transform hover:bg-gray-300"
            >
              <FaPlus />
            </button>
            <p className="ml-4 flex items-center justify-center">
              1 product available
            </p>
          </div>
          <div className="flex flex-col">
            <button className="my-4 border-[1px] border-black bg-black py-2 text-white  ">
              Add to bag
            </button>
            <button className="border-[1px] border-black py-2">Wishlist</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default View;
