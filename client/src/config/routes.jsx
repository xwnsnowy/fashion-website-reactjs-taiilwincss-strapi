const routes = {
  home: "/",
  productDetail: (productName) =>
    `/products/${productName.toLowerCase().replace(/\s+/g, "-")}`,
  mensAll: "/collections/mens-all",
  womensAll: "/collections/womens-all",
  mensAllShirtsTops: "/collections/mens-all-shirts-tops",
  womensAllShirtsTops: "/collections/womens-all-shirts-tops",
  mensSweaters: "/collections/mens-sweaters",
  womensSweaters: "/collections/womens-sweaters",
  bestSellers: "/collections/best-sellers",
  newIn: "/collections/new-in",
  about: "/about",
  everworldStories: "/everworld",
  cart: "/cart",
};

export default routes;
