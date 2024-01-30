import { useState } from "react";
import { FaCaretDown } from "react-icons/fa";
import ListProducts from "../../ListProducts";
import useAxios from "../../../../hooks/useAxios";

const MenSweeter = () => {
  const data = useAxios("products?populate=*");

  console.log(data);

  const [showCategory, setShowCategory] = useState(false);

  const [showFilterPrice, setShowFilterPrice] = useState(false);

  const [maxPrice, setMaxPrice] = useState(10000);

  const [showSortPrice, setShowSortPrice] = useState(false);

  const [sort, setSort] = useState(null);

  const [showColor, setShowColor] = useState(false);

  const [showSize, setShowSize] = useState(false);

  const toggleCategory = () => {
    setShowCategory(!showCategory);
  };

  const toggleFilterPrice = () => {
    setShowFilterPrice(!showFilterPrice);
  };

  const handleMaxPrice = (e) => {
    setMaxPrice(e.target.value);
  };

  const toggleSortPrice = () => {
    setShowSortPrice(!showSortPrice);
  };

  const handleSortPriceLowTo = () => {
    setSort("asc");
  };

  const handleSortPriceHighTo = () => {
    setSort("desc");
  };

  const toggleColor = () => {
    setShowColor(!showColor);
  };

  const toggleSize = () => {
    setShowSize(!showSize);
  };

  return (
    <div className="container flex gap-4">
      <div className="w-52 max-w-52">
        <p className="my-5">43 Products</p>
        <hr />

        {/* Category */}
        <div className="py-4">
          <div className="flex items-center justify-between ">
            <h3 className="text-lg font-semibold">Category</h3>
            <span>
              <FaCaretDown
                className={`cursor-pointer ${showCategory ? "rotate-180" : ""}`}
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
                <label htmlFor="1" className="mr-1">
                  Cardigans
                </label>
                <span>(6)</span>
              </div>
              <div className="flex items-center justify-start">
                <input
                  type="checkbox"
                  name=""
                  id="2"
                  className="mr-2 h-6 w-6 border-[1px] border-[#737373]"
                />
                <label htmlFor="2" className="mr-1">
                  Cardigans
                </label>
                <span>(6)</span>
              </div>
              <div className=" flex items-center justify-start">
                <input
                  type="checkbox"
                  name=""
                  id="3"
                  className="mr-2 h-6 w-6 border-[1px] border-[#737373]"
                />
                <label htmlFor="3" className="mr-1">
                  Cardigans
                </label>
                <span>(6)</span>
              </div>
            </div>
          )}
        </div>

        {/* Filter by price */}
        <div className="py-4">
          <div className="flex items-center justify-between ">
            <h3 className="text-lg font-semibold">Filter by price</h3>
            <span>
              <FaCaretDown
                className={`cursor-pointer ${showFilterPrice ? "rotate-180" : ""}`}
                onClick={toggleFilterPrice}
              />
            </span>
          </div>
          {showFilterPrice && (
            <div className="mt-1 flex gap-2">
              <span>0</span>
              <input
                type="range"
                min={0}
                max={10000}
                onChange={handleMaxPrice}
              />
              <span>{maxPrice}</span>
            </div>
          )}
        </div>

        {/* Sort by price */}
        <div className="py-4">
          <div className="flex items-center justify-between ">
            <h3 className="text-lg font-semibold">Sort by</h3>
            <span>
              <FaCaretDown
                className={`cursor-pointer ${showSortPrice ? "rotate-180" : ""}`}
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
                  onChange={handleSortPriceLowTo}
                />
                <label htmlFor="asc"> Price (Lowest first)</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="desc"
                  value="desc"
                  name="price"
                  onChange={handleSortPriceHighTo}
                />
                <label htmlFor="desc"> Price (Highest first)</label>
              </div>
            </div>
          )}
        </div>

        <hr />
        <div className="py-4">
          <div className="flex items-center justify-between ">
            <h3 className="text-lg font-semibold">Color</h3>
            <span>
              <FaCaretDown
                className={`cursor-pointer ${showColor ? "rotate-180" : ""}`}
                onClick={toggleColor}
              />
            </span>
          </div>
          {showColor && (
            <div>
              <p>ABC</p>
              <p>ABC</p>
              <p>ABC</p>
              <p>ABC</p>
            </div>
          )}
        </div>
        <hr />
        <div className="py-4">
          <div className="flex items-center justify-between ">
            <h3 className="text-lg font-semibold">Size</h3>
            <span>
              <FaCaretDown
                className={`cursor-pointer ${showSize ? "rotate-180" : ""}`}
                onClick={toggleSize}
              />
            </span>
          </div>
          {showSize && (
            <div>
              <p>ABC</p>
              <p>ABC</p>
              <p>ABC</p>
              <p>ABC</p>
            </div>
          )}
        </div>
        <hr />
      </div>
      <ListProducts maxPrice={maxPrice} sort={sort} />
    </div>
  );
};

export default MenSweeter;
