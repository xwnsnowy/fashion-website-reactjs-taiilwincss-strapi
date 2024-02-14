import { useEffect, useRef, useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Modal } from "antd";
import { IoStar } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/cartReducer";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const View = ({ productDetail }) => {
  const [listProductSizeColorNew, setListProductSizeColorNew] = useState(
    productDetail?.attributes?.product_size_colors,
  );
  console.log(listProductSizeColorNew);

  const [imagesArray, setImagesArray] = useState([]);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [quantityBySize, setQuantityBySize] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [open, setOpen] = useState(false);
  const [selectedSize, setSelectedSize] = useState(null);

  const colorProduct =
    productDetail?.attributes?.product_size_colors?.data[0]?.attributes?.color
      ?.data?.attributes?.name;

  const [selectedColor, setSelectedColor] = useState(colorProduct);

  const dispatch = useDispatch();

  useEffect(() => {
    const updatedImagesArray = Array.from({ length: 4 }, (_, index) => {
      const imgIndex = index + 1;
      return (
        import.meta.env.VITE_REACT_UPLOAD_URL +
        (Array.isArray(listProductSizeColorNew)
          ? listProductSizeColorNew[0]?.attributes?.product_image?.data
              ?.attributes?.[`img_${imgIndex}`]?.data?.attributes?.url ?? ""
          : listProductSizeColorNew?.data?.[0]?.attributes?.product_image?.data
              ?.attributes?.[`img_${imgIndex}`]?.data?.attributes?.url ?? "")
      );
    });
    setImagesArray(updatedImagesArray);
  }, [listProductSizeColorNew]);

  useEffect(() => {
    setSelectedColor(colorProduct);
  }, [colorProduct]);

  useEffect(() => {
    setListProductSizeColorNew(productDetail?.attributes?.product_size_colors);
  }, [productDetail]);

  const getQuantityBySize = (size) => {
    let product = Array.isArray(listProductSizeColorNew)
      ? listProductSizeColorNew
      : listProductSizeColorNew?.data;

    const productWithSize = product.find(
      (item) => item?.attributes?.size?.data?.attributes?.name === size,
    );

    return productWithSize?.attributes?.quantity ?? 0;
  };

  const getQuantitySizeXS = () => getQuantityBySize("XS");
  const getQuantitySizeS = () => getQuantityBySize("S");
  const getQuantitySizeM = () => getQuantityBySize("M");
  const getQuantitySizeL = () => getQuantityBySize("L");
  const getQuantitySizeXL = () => getQuantityBySize("XL");

  const handleSizeClick = (size) => {
    setSelectedSize(size);
    const quantityOfSize = getQuantityBySize(size);
    console.log(quantityOfSize);
    setQuantityBySize(quantityOfSize);
  };

  const getProductByColor = (color) => {
    const product = productDetail?.attributes?.product_size_colors?.data;
    const productWithColor = product.filter(
      (item) => item?.attributes?.color?.data?.attributes?.name === color,
    );
    return productWithColor;
  };

  const handleColorClick = (color) => {
    setSelectedColor(color);
    const listProductNew = getProductByColor(color);
    setListProductSizeColorNew(listProductNew);
  };

  const sliderRef = useRef(null);

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

  const addToCartHandler = () => {
    dispatch(
      addToCart({
        id: productDetail?.id + selectedColor + selectedSize,
        name: productDetail?.attributes?.name,
        price: productDetail?.attributes?.original_price,
        img: Array.isArray(listProductSizeColorNew)
          ? listProductSizeColorNew[0]?.attributes?.product_image?.data
              ?.attributes?.img_1?.data?.attributes?.url
          : listProductSizeColorNew?.data[0]?.attributes?.product_image?.data
              ?.attributes?.img_1?.data?.attributes?.url,
        size: selectedSize,
        quantity: quantity,
        color: selectedColor,
      }),
    );
  };

  return (
    <>
      <div className="container py-10">
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
                      ? " border-[4px] border-gray-400"
                      : "border-[#ddd]"
                  }`}
                  onClick={() => handleThumbnailClick(index)}
                  loading="lazy"
                />
              ))}
            </div>
            {/* slider  */}
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
            <div className="flex">
              <h1 className="flex-1 font-['Petrona'] text-3xl font-semibold uppercase">
                {productDetail?.attributes?.name}
              </h1>
              <p className="font-['Petrona'] text-3xl font-bold">
                ${productDetail?.attributes?.original_price}
              </p>
            </div>
            <div className="group flex cursor-pointer items-center gap-2">
              <span className="my-2 flex text-sm">
                <IoStar />
                <IoStar />
                <IoStar />
                <IoStar />
                <IoStar />
              </span>
              <Link
                to=""
                className="text-[#737373] group-hover:text-black group-hover:underline"
              >
                4.6 (95 Reviews)
              </Link>
            </div>
            <p className="text-base font-normal text-[#737373]">
              {productDetail?.attributes?.title}
            </p>
            <div className="mt-2 flex flex-col gap-2">
              <p>
                Color:
                <span className="ml-1 font-['Petrona'] text-lg font-bold">
                  {selectedColor}
                </span>
              </p>
              <div className="flex gap-2">
                <Link to="">
                  <div
                    className={`h-9 w-9 rounded-full border-[2px] border-[#fff] bg-[#4d4d4d]  ${selectedColor === "Heathered Ash" ? "shadow-[0_0_0_1px_#4d4d4d]" : ""}`}
                    onClick={() => handleColorClick("Heathered Ash")}
                  ></div>
                </Link>
                <Link to="">
                  <div
                    className={`h-9 w-9 rounded-full border-[2px] border-[#fff] bg-black  ${selectedColor === "New Black" ? "shadow-[0_0_0_1px_#4d4d4d]" : ""}`}
                    onClick={() => handleColorClick("New Black")}
                  ></div>
                </Link>
                <Link to="">
                  <div className="h-9 w-9 rounded-full border-[1px] border-[#e1e0e0] bg-blue-700"></div>
                </Link>
              </div>
            </div>
            <p className="relative top-6 mb-3">Size:</p>
            <div className="mb-4">
              <div className="flex justify-end">
                <button
                  className="mb-2 inline-block underline"
                  onClick={() => setOpen(true)}
                >
                  View size guide
                </button>
                <Modal
                  centered
                  open={open}
                  onOk={() => setOpen(false)}
                  onCancel={() => setOpen(false)}
                  width={1000}
                  footer={[]}
                >
                  <h1>Size Guide</h1>
                  <p>some contents...</p>
                  <p>some contents...</p>
                  <p>some contents...</p>
                </Modal>
              </div>
              <div className="flex space-x-3">
                <span
                  className={`inline-block w-1/5 cursor-pointer border-[1px] bg-gray-300 px-4 py-2 text-center ${
                    selectedSize === "XS" ? "border-black" : ""
                  } ${getQuantitySizeXS() === 0 ? "cursor-not-allowed !border-0 !opacity-50" : ""}`}
                  onClick={() => handleSizeClick("XS")}
                >
                  XS
                </span>
                <span
                  className={`inline-block w-1/5 cursor-pointer border-[1px] bg-gray-300 px-4 py-2 text-center ${
                    selectedSize === "S" ? "border-black" : ""
                  } ${getQuantitySizeS() === 0 ? "cursor-not-allowed !border-0 !opacity-50" : ""}`}
                  onClick={() => handleSizeClick("S")}
                >
                  S
                </span>
                <span
                  className={`inline-block w-1/5 cursor-pointer border-[1px] bg-gray-300 px-4 py-2 text-center ${
                    selectedSize === "M" ? "border-black" : ""
                  } ${getQuantitySizeM() === 0 ? "cursor-not-allowed !border-0 !opacity-50" : ""}`}
                  onClick={() => handleSizeClick("M")}
                >
                  M
                </span>
                <span
                  className={`inline-block w-1/5 cursor-pointer border-[1px] bg-gray-300 px-4 py-2 text-center ${
                    selectedSize === "L" ? "border-black" : ""
                  } ${getQuantitySizeL() === 0 ? "cursor-not-allowed !border-0 !opacity-50" : ""}`}
                  onClick={() => handleSizeClick("L")}
                >
                  L
                </span>
                <span
                  className={`inline-block w-1/5 cursor-pointer border-[1px] bg-gray-300 px-4 py-2 text-center ${
                    selectedSize === "XL" ? "border-black" : ""
                  } ${getQuantitySizeXL() === 0 ? "cursor-not-allowed !border-0 !opacity-50" : ""}`}
                  onClick={() => handleSizeClick("XL")}
                >
                  XL
                </span>
              </div>
            </div>
            <div className="mb-4 mt-8 flex">
              <p className="mr-4 flex items-center justify-center">Quantity:</p>
              <button
                onClick={decrementQuantity}
                className="flex h-8 w-8 items-center justify-center border-[1px] border-[#737373] text-center first-letter:cursor-pointer hover:scale-105 hover:transform hover:bg-gray-300"
              >
                <FaMinus />
              </button>
              <input
                type="text"
                value={quantity}
                className="h-8 w-12 border-b-[1px] border-t-[1px] border-[#737373] text-center"
              />
              <button
                onClick={incrementQuantity}
                className="flex h-8 w-8 items-center justify-center border-[1px] border-[#737373] text-center first-letter:cursor-pointer hover:scale-105 hover:transform hover:bg-gray-300"
              >
                <FaPlus />
              </button>
              {quantityBySize > 0 && (
                <p className="ml-4 flex items-center justify-center gap-1">
                  <span>{quantityBySize}</span>
                  <span>product available</span>
                </p>
              )}
            </div>
            {/* Button Add to bag */}
            <div className="flex flex-col">
              <button
                className="my-4 border-[1px] border-black  bg-[#262626] py-2 uppercase text-white hover:bg-black"
                onClick={() => addToCartHandler()}
              >
                Add to bag
              </button>
              <button className="border-[1px] border-black py-2">
                Wishlist
              </button>
            </div>

            <div className="mt-8 flex border-y-[1px] border-y-slate-300 py-3">
              <span className="inline-block w-32 text-base font-medium">
                Model
              </span>
              <span>{productDetail?.attributes?.model}</span>
            </div>
            <div className="flex border-b-[1px] border-y-slate-300 py-5">
              <span className="inline-block w-32 text-base font-medium">
                Fit
              </span>
              <div>
                <p>{productDetail?.attributes?.fit}</p>
                <p>Questions about fit?</p>
                <Link to="/" className="underline">
                  <p>Contact Us</p>
                </Link>
                <Link to="/" className="underline">
                  <p>Size Guide</p>
                </Link>
              </div>
            </div>
            <div className="mt-4">
              <div>
                <p className="text-lg font-semibold">Sustainability</p>
              </div>
              <div className="py-3">
                <img src="" alt="" />
                <span className="uppercase">ORGANIC COTTON</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

View.propTypes = {
  productDetail: PropTypes.object.isRequired,
};

export default View;
