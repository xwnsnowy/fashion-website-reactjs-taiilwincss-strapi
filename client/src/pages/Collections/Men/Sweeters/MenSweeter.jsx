import ListProducts from "../../ListProducts";
import useAxios from "../../../../hooks/useAxios";
import ProductFilterSidebar from "../../../../components/ProductFilterSidebar";

const MenSweeter = () => {
  const data = useAxios("products?populate=*");

  console.log(data);

  return (
    <div className="container flex gap-8">
      <ProductFilterSidebar />
      <ListProducts />
    </div>
  );
};

export default MenSweeter;
