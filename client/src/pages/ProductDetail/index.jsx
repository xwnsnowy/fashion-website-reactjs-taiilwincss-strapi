import { useParams } from "react-router-dom";
import Detail from "./Detail";
import Recommended from "./Recommended";
import View from "./View";
import useAxios from "../../hooks/useAxios";

const normalizeProductName = (productName) => {
  const words = productName
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1));
  return words.join(" ");
};

const ProductDetail = () => {
  const { productname } = useParams();
  const normalizedProductName = normalizeProductName(productname);
  console.log(normalizedProductName);

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

  const queryFilter = qs.stringify(
    {
      filters: { name: normalizedProductName },
    },
    { encodeValuesOnly: true },
  );

  const query = qs.stringify(queryObject, { encodeValuesOnly: true });

  const { data, loading, error } = useAxios(`products?${query}&${queryFilter}`);
  console.log(`products?${query}&${queryFilter}`);
  console.log(data);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  return (
    <div>
      <View />
      <Detail />
      <Recommended />
    </div>
  );
};

export default ProductDetail;
