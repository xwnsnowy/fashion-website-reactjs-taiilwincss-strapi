import config from "../config";
import CartLayout from "../layouts/CartLayout";
import About from "../pages/About";
import Cart from "../pages/Cart";
import MenSweeter from "../pages/Collections/Men/Sweeters/MenSweeter";
import EverworldStories from "../pages/EverworldStories/EverworldStories";
import Home from "../pages/Home";
import ProductDetail from "../pages/ProductDetail";

const publicRoutes = [
  { path: config.routes.home, component: Home },
  { path: config.routes.productDetail, component: ProductDetail },
  { path: config.routes.menSweaters, component: MenSweeter },
  { path: config.routes.about, component: About },
  { path: config.routes.everworldStories, component: EverworldStories },
  { path: config.routes.cart, component: Cart, Layout: CartLayout },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
