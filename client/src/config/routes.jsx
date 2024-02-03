const routes = {
  home: "/",
  productDetail: (productName) =>
    `/products/${productName.toLowerCase().replace(/\s+/g, "-")}`,
  mensSweaters: "/collections/mens-sweaters",
  womensSweaters: "/collections/womens-sweaters",
  about: "/about",
  everworldStories: "/everworld",
  cart: "/cart",
};

export default routes;
