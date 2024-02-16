import { useState } from "react";
import { FaCaretDown } from "react-icons/fa";
import PropTypes from "prop-types";

const ProductFilterSidebar = ({
  onFilterChange,
  onSortChange,
  maxPrice,
  length,
}) => {
  const [showCategory, setShowCategory] = useState(true);

  const [showFilterPrice, setShowFilterPrice] = useState(true);

  const [showSortPrice, setShowSortPrice] = useState(true);

  const [showColor, setShowColor] = useState(true);

  const [showSize, setShowSize] = useState(true);

  const toggleCategory = () => {
    setShowCategory(!showCategory);
  };

  const toggleFilterPrice = () => {
    setShowFilterPrice(!showFilterPrice);
  };

  // Filter by price 0 - 1000
  const handleMaxPrice = (e) => {
    const newPrice = parseInt(e.target.value);
    onFilterChange(newPrice);
  };

  const toggleSortPrice = () => {
    setShowSortPrice(!showSortPrice);
  };

  const handleSortPriceLowTo = () => {
    onSortChange("asc");
  };

  const handleSortPriceHighTo = () => {
    onSortChange("desc");
  };

  const toggleColor = () => {
    setShowColor(!showColor);
  };

  const toggleSize = () => {
    setShowSize(!showSize);
  };
  return (
    <div className="w-52 max-w-52 px-4 dark:bg-[#18191a]">
      <p className="my-5 text-base tracking-wider dark:text-[#7DFFAF]">
        <span className="text-lg font-medium ">{length} </span>
        Products
      </p>
      <hr />

      {/* Category */}
      <div className="py-4">
        <div className="flex items-center justify-between ">
          <h3 className="text-lg font-semibold dark:text-[#7DFFAF]  ">
            Category
          </h3>
          <span>
            <FaCaretDown
              className={`cursor-pointer dark:text-white ${showCategory ? "rotate-180" : ""}`}
              onClick={toggleCategory}
            />
          </span>
        </div>
        {showCategory && (
          <div className="mt-1 flex flex-col gap-2">
            <div className="flex items-center justify-start">
              <input
                type="checkbox"
                name=""
                id="1"
                className="form-checkbox mr-2 h-6 w-6 border-[1px] border-[#737373] "
              />
              <label htmlFor="1" className="mr-1 dark:text-white">
                Cardigans
              </label>
              <span className="dark:text-white">(6)</span>
            </div>
            <div className="flex items-center justify-start">
              <input
                type="checkbox"
                name=""
                id="2"
                className="mr-2 h-6 w-6 border-[1px] border-[#737373]"
              />
              <label htmlFor="2" className="mr-1 dark:text-white">
                Cardigans
              </label>
              <span className="dark:text-white">(6)</span>
            </div>
            <div className=" flex items-center justify-start">
              <input
                type="checkbox"
                name=""
                id="3"
                className="mr-2 h-6 w-6 border-[1px] border-[#737373]"
              />
              <label htmlFor="3" className="mr-1 dark:text-white">
                Cardigans
              </label>
              <span className="dark:text-white">(6)</span>
            </div>
          </div>
        )}
      </div>

      {/* Filter by price */}
      <div className="py-4">
        <div className="flex items-center justify-between ">
          <h3 className="text-lg font-semibold dark:text-[#7DFFAF]">
            Filter by price
          </h3>
          <span>
            <FaCaretDown
              className={`cursor-pointer dark:text-white ${showFilterPrice ? "rotate-180" : ""}`}
              onClick={toggleFilterPrice}
            />
          </span>
        </div>
        {showFilterPrice && (
          <div className="mt-1 flex gap-2">
            <span className="dark:text-white">0</span>
            <input type="range" min={0} max={1000} onChange={handleMaxPrice} />
            <span className="dark:text-white">{maxPrice}</span>
          </div>
        )}
      </div>

      {/* Sort by price */}
      <div className="py-4">
        <div className="flex items-center justify-between ">
          <h3 className="text-lg font-semibold dark:text-[#7DFFAF]">Sort by</h3>
          <span>
            <FaCaretDown
              className={`cursor-pointer dark:text-white ${showSortPrice ? "rotate-180" : ""}`}
              onClick={toggleSortPrice}
            />
          </span>
        </div>
        {showSortPrice && (
          <div className="mt-1 flex flex-col gap-1">
            <div>
              <input
                type="radio"
                id="asc"
                value="asc"
                name="price"
                onChange={() => handleSortPriceLowTo()}
              />
              <label htmlFor="asc" className="dark:text-white">
                {" "}
                Price (Lowest first)
              </label>
            </div>
            <div>
              <input
                type="radio"
                id="desc"
                value="desc"
                name="price"
                onChange={() => handleSortPriceHighTo()}
              />
              <label htmlFor="desc" className="dark:text-white">
                {" "}
                Price (Highest first)
              </label>
            </div>
          </div>
        )}
      </div>

      <hr />
      <div className="py-4">
        <div className="flex items-center justify-between ">
          <h3 className="text-lg font-semibold dark:text-[#7DFFAF]">Color</h3>
          <span>
            <FaCaretDown
              className={`cursor-pointer dark:text-white ${showColor ? "rotate-180" : ""}`}
              onClick={toggleColor}
            />
          </span>
        </div>
        {showColor && (
          <div className="mt-2 flex flex-wrap justify-center gap-2">
            <button className="h-[40px] w-[50px] rounded-md bg-gray-200 hover:bg-gray-300">
              Red
            </button>
            <button className="h-[40px] w-[50px] rounded-md bg-gray-200 hover:bg-gray-300">
              Blue
            </button>
            <button className="h-[40px] w-[50px] rounded-md bg-gray-200 hover:bg-gray-300">
              Green
            </button>
            <button className="h-[40px] w-[50px] rounded-md bg-gray-200 hover:bg-gray-300">
              Pink
            </button>
            <button className="h-[40px] w-[50px] rounded-md bg-gray-200 hover:bg-gray-300">
              Purple
            </button>
          </div>
        )}
      </div>
      <hr />
      <div className="py-4">
        <div className="flex items-center justify-between ">
          <h3 className="text-lg font-semibold dark:text-[#7DFFAF]">Size</h3>
          <span>
            <FaCaretDown
              className={`cursor-pointer dark:text-white ${showSize ? "rotate-180" : ""}`}
              onClick={toggleSize}
            />
          </span>
        </div>
        {showSize && (
          <div className="mt-2 flex flex-wrap justify-center gap-2">
            <button className="h-[40px] w-[50px] rounded-md bg-gray-200 hover:bg-gray-300">
              XS
            </button>
            <button className="h-[40px] w-[50px] rounded-md bg-gray-200 hover:bg-gray-300">
              S
            </button>
            <button className="h-[40px] w-[50px] rounded-md bg-gray-200 hover:bg-gray-300">
              M
            </button>
            <button className="h-[40px] w-[50px] rounded-md bg-gray-200 hover:bg-gray-300">
              L
            </button>
            <button className="h-[40px] w-[50px] rounded-md bg-gray-200 hover:bg-gray-300">
              XL
            </button>
          </div>
        )}
      </div>
      <hr />
    </div>
  );
};

ProductFilterSidebar.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
  onSortChange: PropTypes.func.isRequired,
  maxPrice: PropTypes.number.isRequired,
  length: PropTypes.number.isRequired,
};
export default ProductFilterSidebar;
