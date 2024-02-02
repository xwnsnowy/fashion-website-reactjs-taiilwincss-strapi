import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ListProductsView = ({ data, type }) => {
  const titleMap = {
    "mens-sweaters": "Mens Sweaters - Cashmere, Cardigans & Crewnecks",
    "womens-sweaters": "Women’s Sweaters & Cardigans",
  };
  const title = titleMap[type] || "Other Title";

  const isWomen = type.toLowerCase().includes("womens");
  console.log(isWomen);

  return (
    <div className="my-5 flex-1">
      <span>{isWomen ? "Home / Women" : "Home / Men"}</span>
      <h1 className="mb-10 text-4xl">{title}</h1>

      <div className="grid grid-cols-3 gap-6">
        {data.map((item, index) => (
          <div key={index}>
            <div className="relative cursor-pointer">
              <Link
                to={`/products/${encodeURIComponent(item?.attributes.name.toLowerCase().replace(/ /g, "-"))}?collection=${type}`}
              >
                <img
                  src={
                    import.meta.env.VITE_REACT_UPLOAD_URL +
                    item?.attributes.product_size_colors.data[0].attributes
                      .product_image.data.attributes.img_1.data.attributes.url
                  }
                  alt="image-main"
                  className="h-auto w-full transition-opacity duration-300 ease-in-out hover:opacity-0"
                />
                <img
                  src={
                    import.meta.env.VITE_REACT_UPLOAD_URL +
                    item?.attributes.product_size_colors.data[0].attributes
                      .product_image.data.attributes.img_2.data.attributes.url
                  }
                  alt="image-secondary"
                  className="absolute left-0 top-0 h-auto w-full opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-100"
                />
              </Link>
            </div>

            <div className="flex justify-between">
              <Link to="/product-detail">
                <h4 className="mb-1 mt-2 text-base font-semibold text-[#262626]">
                  {item?.attributes.name}
                </h4>
              </Link>
              <h4 className="mt-2 font-semibold">
                ${item?.attributes.original_price}
              </h4>
            </div>
            <div>
              <p className="font-light">
                {
                  item?.attributes.product_size_colors.data[0].attributes.color
                    .data.attributes.name
                }
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

ListProductsView.propTypes = {
  data: PropTypes.array.isRequired,
  type: PropTypes.array.isRequired,
};

export default ListProductsView;
