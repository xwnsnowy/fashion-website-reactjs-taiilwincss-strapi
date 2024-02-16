import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setProductDetail, setListProduct } from "../../redux/productReducer";
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

  const handleClickProduct = (productDetail) => {
    dispatch(setProductDetail(productDetail));
    dispatch(setListProduct(data));
  };

  const titleMap = {
    "mens-sweaters": "Mens Sweaters - Cashmere, Cardigans & Crewnecks",
    "womens-sweaters": "Women’s Sweaters & Cardigans",
    "mens-all-shirts-tops": "Men's Shirts, T-Shirts, Polos & Button Downs",
    "womens-all-shirts-tops": "Women's Tops, T-Shirts, Blouses & Shirts",
    "mens-all": "Shop All Men's Clothing & Apparel",
    "womens-all": "Shop All Women's Clothing & Apparel",
    "best-sellers": "Best Selling Clothing & Apparel",
  };

  const titleFaqsMap = {
    "mens-sweaters": "Men's Sweaters FAQs",
    "womens-sweaters": "Women’s Sweaters FAQs",
    "mens-all-shirts-tops": "Men's Shirts, T-Shirts, Polos & Button Downs",
    "womens-all-shirts-tops": "Women's Tops, T-Shirts, Blouses & Shirts",
    "mens-all": "Shop All Men's Clothing & Apparel",
    "womens-all": "Shop All Women's Clothing & Apparel",
    "best-sellers": "Best Selling Clothing & Apparel",
  };

  const faqsQues1Map = {
    "mens-sweaters": "How do you wash and store sweaters for men?",
    "womens-sweaters":
      "What is the difference between the fabrics used in Everlane's sweaters?",
    "mens-all-shirts-tops": "What are the best shirts to wear to work?",
    "womens-all-shirts-tops": "What are the best shirts to wear to work?",
    "mens-all": "Shop All Men's Clothing & Apparel",
    "womens-all": "Shop All Women's Clothing & Apparel",
    "best-sellers": "Best Selling Clothing & Apparel",
  };

  const faqsQues2Map = {
    "mens-sweaters":
      "What are the different types of sweaters for men that you carry?",
    "womens-sweaters": "Which sweater styles are lightweight?",
    "mens-all-shirts-tops": "What are your softest T-shirts?",
    "womens-all-shirts-tops": "What are your softest T-shirts?",
    "mens-all": "Shop All Men's Clothing & Apparel",
    "womens-all": "Shop All Women's Clothing & Apparel",
    "best-sellers": "Best Selling Clothing & Apparel",
  };

  const faqsQues3Map = {
    "mens-sweaters": "What is your lightest weight sweater?",
    "womens-sweaters": "How do I wash and take care of sweaters?",
    "mens-all-shirts-tops": "How should men's t-shirts fit?",
    "womens-all-shirts-tops": "How should women's t-shirts fit?",
    "mens-all": "Shop All Men's Clothing & Apparel",
    "womens-all": "Shop All Women's Clothing & Apparel",
    "best-sellers": "Best Selling Clothing & Apparel",
  };

  const faqsAns1Map = {
    "mens-sweaters":
      "Everlane offers sweaters in various materials, such as cotton, cashmere, and wool. The specific differences in fabric will depend on the product, so it's best to refer to the product descriptions for details on each sweater.",
    "womens-sweaters":
      "Everlane offers sweaters in various materials, such as cotton, cashmere, and wool. The specific differences in fabric will depend on the product, so it's best to refer to the product descriptions for details on each sweater.",
    "mens-all-shirts-tops":
      "The best shirts for a professional work environment typically include tailored button-down shirts, dress shirts, and classic polos. These provide a polished and business-appropriate look.",
    "womens-all-shirts-tops":
      "The best shirts for a professional work environment typically include tailored button-down shirts, dress shirts, and classic polos. These provide a polished and business-appropriate look.",
    "mens-all": "Shop All Men's Clothing & Apparel",
    "womens-all": "Shop All Women's Clothing & Apparel",
    "best-sellers": "Best Selling Clothing & Apparel",
  };

  const faqsAns2Map = {
    "mens-sweaters": `Everlane offers lightweight sweater styles such as our "The Cashmere V-Neck" and "The Cotton Turtleneck" that are perfect for layering or transitional weather.`,
    "womens-sweaters": `Everlane offers lightweight sweater styles such as our "The Cashmere V-Neck" and "The Cotton Turtleneck" that are perfect for layering or transitional weather.`,
    "mens-all-shirts-tops": `Some of our softest T-shirts include "The Pima Micro-Rib Crew" and "The Organic Cotton Box-Cut Pocket Tee." These are known for their comfort and soft feel against the skin.`,
    "womens-all-shirts-tops": `Some of our softest T-shirts include "The Pima Micro-Rib Crew" and "The Organic Cotton Box-Cut Pocket Tee." These are known for their comfort and soft feel against the skin.`,
    "mens-all": "Shop All Men's Clothing & Apparel",
    "womens-all": "Shop All Women's Clothing & Apparel",
    "best-sellers": "Best Selling Clothing & Apparel",
  };

  const faqsAns3Map = {
    "mens-sweaters":
      "To care for sweaters, it's best to hand wash or use a delicate cycle in cold water and lay them flat to dry. Avoid hanging them, which can cause stretching. Refer to the care instructions on the sweater's label.",
    "womens-sweaters":
      "To care for sweaters, it's best to hand wash or use a delicate cycle in cold water and lay them flat to dry. Avoid hanging them, which can cause stretching. Refer to the care instructions on the sweater's label.",
    "mens-all-shirts-tops":
      "Men's t-shirts should have a comfortable, but not overly loose, fit. They should skim the body without being too tight or baggy, with sleeves ending mid-bicep. The hem should fall around the hip area for a classic look.",
    "womens-all-shirts-tops":
      "Men's t-shirts should have a comfortable, but not overly loose, fit. They should skim the body without being too tight or baggy, with sleeves ending mid-bicep. The hem should fall around the hip area for a classic look.",
    "mens-all": "Shop All Men's Clothing & Apparel",
    "womens-all": "Shop All Women's Clothing & Apparel",
    "best-sellers": "Best Selling Clothing & Apparel",
  };

  const title = titleMap[type] || "Other Title";
  const titleFaqs = titleFaqsMap[type] || "Other Title Faqs";
  const faqsQues1 = faqsQues1Map[type] || "Other Title Question 1 Faqs";
  const faqsQues2 = faqsQues2Map[type] || "Other Title Question 2 Faqs";
  const faqsQues3 = faqsQues3Map[type] || "Other Title Question 3 Faqs";
  const faqsAns1 = faqsAns1Map[type] || "Other Title Answer 1 Faqs";
  const faqsAns2 = faqsAns2Map[type] || "Other Title Answer 2 Faqs";
  const faqsAns3 = faqsAns3Map[type] || "Other Title Answer 3 Faqs";

  const isWomen = type.toLowerCase().includes("womens");

  const normalizedName = (input) => input.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className="my-5 flex-1 px-4 dark:bg-[#18191a]">
      <span className="dark:text-white">
        {isWomen ? "Home / Women" : "Home / Men"}
      </span>
      <h1 className="mb-10 text-4xl dark:text-[#7DFFAF]">{title}</h1>

      <div className="grid grid-cols-3 gap-6">
        {data.map((item) => (
          <div key={item?.attributes?.id}>
            <div className="relative cursor-pointer">
              <Link
                to={`/products/${normalizedName(item?.attributes?.name)}?collection=${type}`}
                onClick={() => handleClickProduct(item)}
              >
                <img
                  src={
                    import.meta.env.VITE_REACT_UPLOAD_URL +
                    item?.attributes?.product_size_colors?.data[0]?.attributes
                      ?.product_image?.data?.attributes?.img_1?.data?.attributes
                      ?.url
                  }
                  alt="image-main"
                  className="h-auto w-full transition-opacity duration-300 ease-in-out hover:opacity-0"
                />
                <img
                  src={
                    import.meta.env.VITE_REACT_UPLOAD_URL +
                    item?.attributes?.product_size_colors?.data[0]?.attributes
                      ?.product_image?.data?.attributes?.img_2?.data?.attributes
                      ?.url
                  }
                  alt="image-secondary"
                  className="absolute left-0 top-0 h-auto w-full opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-100"
                />
              </Link>
            </div>

            <div className="flex justify-between">
              <Link
                to={`/products/${normalizedName(item?.attributes?.name)}?collection=${type}`}
                onClick={() => handleClickProduct(item)}
              >
                <h4 className="mb-1 mt-2 text-base font-semibold text-[#262626] dark:text-white">
                  {item?.attributes?.name}
                </h4>
              </Link>
              <h4 className="mt-2 font-semibold dark:text-white">
                ${item?.attributes?.original_price}
              </h4>
            </div>
            <div>
              <p className="font-light dark:text-neutral-400">
                {
                  item?.attributes?.product_size_colors?.data[0]?.attributes
                    ?.color?.data?.attributes?.name
                }
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12">
        <h1 className="text-3xl font-medium dark:text-[#7DFFAF]">
          {titleFaqs}
        </h1>{" "}
        {/* Question and Answer 1 */}
        <div
          className="cursor-pointer border-b-[1px] border-b-black py-5"
          onClick={toggleFaqFirst}
        >
          <div className="flex justify-between ">
            <h4 className="text-lg font-medium dark:text-white">{faqsQues1}</h4>
            <span>
              <FaCaretDown
                className={`cursor-pointer ${showFaqFirst ? "rotate-180" : ""}`}
              />
            </span>
          </div>
          {showFaqFirst && (
            <p className="mt-2 dark:text-neutral-300">{faqsAns1}</p>
          )}
        </div>
        {/* Question and Answer 2 */}
        <div
          className="cursor-pointer border-b-[1px] border-b-black py-5"
          onClick={toggleFaqSecond}
        >
          <div className="flex justify-between ">
            <h4 className="text-lg font-medium dark:text-white">{faqsQues2}</h4>
            <span>
              <FaCaretDown
                className={`cursor-pointer ${showFaqSecond ? "rotate-180" : ""}`}
              />
            </span>
          </div>
          {showFaqSecond && (
            <p className="mt-2 dark:text-neutral-300">{faqsAns2}</p>
          )}
        </div>
        {/* Question and Answer 3 */}
        <div
          className="cursor-pointer border-b-[1px] border-b-black py-5"
          onClick={toggleFaqThird}
        >
          <div className="flex justify-between ">
            <h4 className="text-lg font-medium dark:text-white">{faqsQues3}</h4>
            <span>
              <FaCaretDown
                className={`cursor-pointer ${showFaqThird ? "rotate-180" : ""}`}
              />
            </span>
          </div>
          {showFaqThird && (
            <p className="mt-2 dark:text-neutral-300">{faqsAns3}</p>
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
