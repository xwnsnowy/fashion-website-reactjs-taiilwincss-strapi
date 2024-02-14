import Detail from "./Detail";
import Recommended from "./Recommended";
import View from "./View";
import { useSelector } from "react-redux";

const ProductDetail = () => {
  const productDetail = useSelector((state) => state.product.productDetail);
  const listProduct = useSelector((state) => state.product.listProduct);
  console.log(productDetail);
  console.log(listProduct);
  if (!productDetail) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <View productDetail={productDetail} listProduct={listProduct} />
      <Detail productDetail={productDetail} listProduct={listProduct} />
      <Recommended productDetail={productDetail} listProduct={listProduct} />
    </div>
  );
};

export default ProductDetail;
