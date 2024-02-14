  import PropTypes from "prop-types";
  import { Link } from "react-router-dom";
  import { useDispatch } from "react-redux";
  import {
    setListProduct,
    setProductDetail,
  } from "../../../redux/productReducer";

  const Recommended = ({ productDetail, listProduct }) => {
    const getRandomProducts = (arr, num) => {
      const shuffled = arr
        .filter((product) => product.id !== productDetail.id)
        .sort(() => 0.5 - Math.random());
      return shuffled.slice(0, num);
    };

    const randomProducts = getRandomProducts(listProduct, 4);

    const normalizedName = (input) => input.toLowerCase().replace(/\s+/g, "-");

    const dispatch = useDispatch();

    const handleClickProduct = (productDetail) => {
      dispatch(setProductDetail(productDetail));
      dispatch(setListProduct(listProduct));
    };

    return (
      <div className="container mb-14 mt-24">
        <h2 className="mb-6 text-xl font-bold uppercase">recommended for you</h2>
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {randomProducts.map((item) => (
            <div key={item.id}>
              <Link
                to={`/products/${normalizedName(item?.attributes?.name)}`}
                onClick={() => handleClickProduct(item)}
              >
                <img
                  src={
                    import.meta.env.VITE_REACT_UPLOAD_URL +
                    item?.attributes?.product_size_colors?.data[0]?.attributes
                      ?.product_image?.data?.attributes?.img_1?.data?.attributes
                      ?.url
                  }
                  alt=""
                />
              </Link>
              <Link
                to={`/products/${normalizedName(item?.attributes?.name)}`}
                onClick={() => handleClickProduct(item)}
              >
                <h4 className="mb-1 mt-2 text-base font-semibold text-[#262626]">
                  {item?.attributes?.name}
                </h4>
              </Link>
              <p className="font-normal">
                {
                  item?.attributes?.product_size_colors?.data[0]?.attributes
                    ?.color?.data?.attributes?.name
                }
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  };

  Recommended.propTypes = {
    productDetail: PropTypes.object.isRequired,
    listProduct: PropTypes.array.isRequired,
  };

  export default Recommended;
