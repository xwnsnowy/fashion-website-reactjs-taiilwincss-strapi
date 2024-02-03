import Detail from "./Detail";
import Recommended from "./Recommended";
import View from "./View";
import { useSelector } from "react-redux";

const ProductDetail = () => {
  const productDetail = useSelector((state) => state.product.productDetail);
  console.log(productDetail);
  if (!productDetail) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <View productDetail={productDetail} />
      <Detail productDetail={productDetail} />
      <Recommended productDetail={productDetail} />
    </div>
  );
};

export default ProductDetail;
