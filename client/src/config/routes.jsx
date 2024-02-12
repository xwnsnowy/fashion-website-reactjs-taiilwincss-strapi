const routes = {
  home: "/",
  productDetail: (productName) =>
    `/products/${productName.toLowerCase().replace(/\s+/g, "-")}`,
  mensAll: "/collections/mens-all",
  womensAll: "/collections/womens-all",
  mensSweaters: "/collections/mens-sweaters",
  womensSweaters: "/collections/womens-sweaters",
  bestSellers: "/collections/best-sellers",
  about: "/about",
  everworldStories: "/everworld",
  cart: "/cart",
};

export default routes;
