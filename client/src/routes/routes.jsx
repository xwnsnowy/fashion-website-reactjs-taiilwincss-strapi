import routes from "../config/routes";
import ListProducts from "../pages/Collections/ListProducts";
import CartLayout from "../layouts/CartLayout";
import About from "../pages/About";
import Cart from "../pages/Cart";
import EverworldStories from "../pages/EverworldStories/EverworldStories";
import Home from "../pages/Home";
import ProductDetail from "../pages/ProductDetail";

const publicRoutes = [
  { path: routes.home, component: Home },
  { path: routes.productDetail(":productname"), component: ProductDetail },
  { path: routes.about, component: About },
  { path: routes.everworldStories, component: EverworldStories },
  { path: routes.cart, component: Cart, Layout: CartLayout },
  {
    path: routes.mensAll,
    component: () => <ListProducts type="mens-all" />,
  },
  {
    path: routes.womensAll,
    component: () => <ListProducts type="womens-all" />,
  },
  {
    path: routes.mensAllShirtsTops,
    component: () => <ListProducts type="mens-all-shirts-tops" />,
  },
  {
    path: routes.womensAllShirtsTops,
    component: () => <ListProducts type="womens-all-shirts-tops" />,
  },
  {
    path: routes.mensJeans,
    component: () => <ListProducts type="mens-jeans" />,
  },
  {
    path: routes.mensSweaters,
    component: () => <ListProducts type="mens-sweaters" />,
  },
  {
    path: routes.womensSweaters,
    component: () => <ListProducts type="womens-sweaters" />,
  },
  {
    path: routes.bestSellers,
    component: () => <ListProducts type="best-sellers" />,
  },
  {
    path: routes.newIn,
    component: () => <ListProducts type="new-in" />,
  },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
