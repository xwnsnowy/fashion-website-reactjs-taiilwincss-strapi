import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setProductDetail } from "../../redux/productReducer";
import { FaCaretDown } from "react-icons/fa";
import { useState } from "react";

const ListProductsView = ({ data, type }) => {
  const [showFaqFirst, setShowFaqFirst] = useState(false);
  const [showFaqSecond, setShowFaqSecond] = useState(false);
  const [showFaqThird, setShowFaqThird] = useState(false);

  const toggleFaqFirst = () => {
    setShowFaqFirst(!showFaqFirst);
  };
  const toggleFaqSecond = () => {
    setShowFaqSecond(!showFaqSecond);
  };
  const toggleFaqThird = () => {
    setShowFaqThird(!showFaqThird);
  };

  const dispatch = useDispatch();

  const handleClickProduct = (product) => {
    dispatch(setProductDetail(product));
  };

  const titleMap = {
    "mens-sweaters": "Mens Sweaters - Cashmere, Cardigans & Crewnecks",
    "womens-sweaters": "Women’s Sweaters & Cardigans",
    "mens-all": "Shop All Men's Clothing & Apparel",
    "womens-all": "Shop All Women's Clothing & Apparel",
    "best-sellers": "Best Selling Clothing & Apparel",
  };

  const title = titleMap[type] || "Other Title";

  const isWomen = type.toLowerCase().includes("womens");

  const normalizedName = (input) => input.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className="my-5 flex-1">
      <span>{isWomen ? "Home / Women" : "Home / Men"}</span>
      <h1 className="mb-10 text-4xl">{title}</h1>

      <div className="grid grid-cols-3 gap-6">
        {data.map((item) => (
          <div key={item?.attributes.id}>
            <div className="relative cursor-pointer">
              <Link
                to={`/products/${normalizedName(item?.attributes.name)}?collection=${type}`}
                onClick={() => handleClickProduct(item)}
              >
                <img
                  src={
                    import.meta.env.VITE_REACT_UPLOAD_URL +
                    item?.attributes.product_size_colors.data[0].attributes
                      .product_image.data.attributes.img_1.data.attributes.url
                  }
                  alt="image-main"
                  className="h-auto w-full transition-opacity duration-300 ease-in-out hover:opacity-0"
                />
                <img
                  src={
                    import.meta.env.VITE_REACT_UPLOAD_URL +
                    item?.attributes.product_size_colors.data[0].attributes
                      .product_image.data.attributes.img_2.data.attributes.url
                  }
                  alt="image-secondary"
                  className="absolute left-0 top-0 h-auto w-full opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-100"
                />
              </Link>
            </div>

            <div className="flex justify-between">
              <Link
                to={`/products/${normalizedName(item?.attributes.name)}?collection=${type}`}
                onClick={() => handleClickProduct(item)}
              >
                <h4 className="mb-1 mt-2 text-base font-semibold text-[#262626]">
                  {item?.attributes.name}
                </h4>
              </Link>
              <h4 className="mt-2 font-semibold">
                ${item?.attributes.original_price}
              </h4>
            </div>
            <div>
              <p className="font-light">
                {
                  item?.attributes.product_size_colors.data[0].attributes.color
                    .data.attributes.name
                }
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12">
        <h1 className="text-3xl font-medium">Men's Sweaters FAQs</h1>
        <div
          className="cursor-pointer border-[1px] border-b-black py-5"
          onClick={toggleFaqFirst}
        >
          <div className="flex justify-between ">
            <h4 className="text-lg font-medium">
              How do you wash and store sweaters for men?
            </h4>
            <span>
              <FaCaretDown
                className={`cursor-pointer ${showFaqFirst ? "rotate-180" : ""}`}
              />
            </span>
          </div>
          {showFaqFirst && (
            <p className="mt-2">
              To care for sweaters, hand wash or use a delicate cycle in cold
              water and lay them flat to dry to prevent stretching. Store them
              in a cool, dry place, preferably folded, to maintain their shape.
            </p>
          )}
        </div>
        <div
          className="cursor-pointer border-[1px] border-b-black py-5 "
          onClick={toggleFaqSecond}
        >
          <div className="flex justify-between ">
            <h4 className="text-lg font-medium">
              What are the different types of sweaters for men that you carry?
            </h4>
            <span>
              <FaCaretDown
                className={`cursor-pointer ${showFaqSecond ? "rotate-180" : ""}`}
              />
            </span>
          </div>
          {showFaqSecond && (
            <p className="mt-2">
              We offer a range of sweaters for men, including crewneck sweaters,
              V-neck sweaters, cashmere sweaters, and cardigans. Each style
              provides a different look and level of warmth.
            </p>
          )}
        </div>
        <div
          className="cursor-pointer border-[1px] border-b-black py-5 "
          onClick={toggleFaqThird}
        >
          <div className="flex justify-between ">
            <h4 className="text-lg font-medium">
              What is your lightest weight sweater?
            </h4>
            <span>
              <FaCaretDown
                className={`cursor-pointer ${showFaqThird ? "rotate-180" : ""}`}
              />
            </span>
          </div>
          {showFaqThird && (
            <p className="mt-2">
              Our lightest weight sweaters are typically made from fine
              materials like lightweight cotton or cashmere. Options like "The
              Cotton Cashmere Sweater" or "The Pima Micro-Rib Crew" are known
              for their comfort and breathability.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

ListProductsView.propTypes = {
  data: PropTypes.array.isRequired,
  type: PropTypes.string.isRequired,
};

export default ListProductsView;
