import BannerTop from "./BannerTop";
import BannerBottom from "./BannerBottom";
import Hero from "./Hero";
import NewIn from "./NewIn";
import Review from "./Review";
import TopProducts from "./TopProducts";
import useAxios from "../../hooks/useAxios";

const Home = () => {
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

  const querySort = qs.stringify(
    {
      sort: ["id:desc"],
      pagination: {
        limit: 4,
      },
    },
    { encodeValuesOnly: true },
  );

  const { data, loading, error } = useAxios(
    `products?${query}&${querySort}`,
    "",
    querySort,
  );

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <>
      <BannerTop />
      <Hero />
      <NewIn fourNewProducts={data.data} />
      <TopProducts />
      <BannerBottom />
      <Review />
    </>
  );
};

export default Home;
