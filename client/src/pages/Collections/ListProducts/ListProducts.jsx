import PropTypes from "prop-types";
import useAxios from "../../../hooks/useAxios";
import ProductFilterSidebar from "../../../components/ProductFilterSidebar";
import ListProductsView from "../../../components/ListProductsView/ListProductsView";
import { useState } from "react";

const ListProducts = ({ type }) => {
  const [filterMaxPrice, setFilters] = useState(1000);
  const [sortBy, setSortBy] = useState(null);

  console.log(filterMaxPrice);

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  const handleSortChange = (sortOption) => {
    setSortBy(sortOption);
  };

  // eslint-disable-next-line no-undef
  const qs = require("qs");

  const queryObject = {
    populate: [
      "product_size_colors.color",
      "product_size_colors.size",
      "product_size_colors.product_image.img_1",
      "product_size_colors.product_image.img_2",
      "product_size_colors.product_image.img_3",
      "product_size_colors.product_image.img_4",
      "sub_category",
    ],
  };

  const query = qs.stringify(queryObject, { encodeValuesOnly: true });

  let queryType;
  // sweater
  if (type === "mens-sweaters") {
    queryType = { name: { $eq: "men_sweater" } };
  }
  if (type === "womens-sweaters") {
    queryType = { name: { $eq: "women_sweater" } };
  }
  // all shirts tops
  if (type === "mens-all-shirts-tops") {
    queryType = { name: { $eq: "mens_all_shirts_tops" } };
  }
  if (type === "womens-all-shirts-tops") {
    queryType = { name: { $eq: "womens_all_shirts_tops" } };
  }
  // all clothes
  if (type === "mens-all") {
    queryType = { name: { $notContains: "women" } };
  }
  if (type === "womens-all") {
    queryType = { name: { $contains: "women" } };
  }

  const queryFilter = qs.stringify(
    {
      filters: {
        $and: [
          { sub_category: queryType, original_price: { $lte: filterMaxPrice } },
        ],
      },
    },
    { encodeValuesOnly: true },
  );

  const querySort = sortBy
    ? qs.stringify(
        { sort: [`original_price:${sortBy}`] },
        { encodeValuesOnly: true },
      )
    : "";

  const { data, loading, error } = useAxios(
    `products?${query}&${queryFilter}&${querySort}`,
    queryFilter,
    querySort,
  );

  console.log(data);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="dark:bg-[#000F0A]">
      <div className="container flex gap-8 ">
        {/* Filter Sidebar */}
        <ProductFilterSidebar
          length={data.data.length}
          onFilterChange={handleFilterChange}
          maxPrice={filterMaxPrice}
          onSortChange={handleSortChange}
        />
        {/* List Products */}
        <ListProductsView data={data.data} type={type} />
      </div>
    </div>
  );
};

ListProducts.propTypes = {
  type: PropTypes.string.isRequired,
};

export default ListProducts;
