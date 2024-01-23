import config from "../config";
import Home from "../pages/Home";
import ProductDetail from "../pages/ProductDetail";

const publicRoutes = [
  { path: config.routes.home, component: Home },
  { path: config.routes.productDetail, component: ProductDetail },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
