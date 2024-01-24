import config from "../config";
import MenSweeter from "../pages/Collections/Men/Sweeters/MenSweeter";
import Home from "../pages/Home";
import ProductDetail from "../pages/ProductDetail";

const publicRoutes = [
  { path: config.routes.home, component: Home },
  { path: config.routes.productDetail, component: ProductDetail },
  { path: config.routes.menSweaters, component: MenSweeter },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
