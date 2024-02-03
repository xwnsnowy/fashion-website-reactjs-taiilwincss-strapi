import PropTypes from "prop-types";
import useAxios from "../../../hooks/useAxios";
import ProductFilterSidebar from "../../../components/ProductFilterSidebar";
import ListProductsView from "../../../components/ListProductsView/ListProductsView";

const ListProducts = ({ type }) => {
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

  let queryType;
  if (type === "mens-sweaters") {
    queryType = { name: { $eq: "men_sweater" } };
  }
  if (type === "womens-sweaters") {
    queryType = { name: { $eq: "women_sweater" } };
  }

  const queryFilter = qs.stringify(
    {
      filters: { sub_category: queryType },
    },
    { encodeValuesOnly: true },
  );

  const query = qs.stringify(queryObject, { encodeValuesOnly: true });

  const { data, loading, error } = useAxios(`products?${query}&${queryFilter}`);

  console.log(data);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="container flex gap-8">
      {/* Filter Sidebar */}
      <ProductFilterSidebar />
      {/* List Products */}
      <ListProductsView data={data.data} type={type} />
    </div>
  );
};

ListProducts.propTypes = {
  type: PropTypes.string.isRequired,
};

export default ListProducts;
