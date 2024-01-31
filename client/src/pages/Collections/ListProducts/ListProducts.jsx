import PropTypes from "prop-types";

const ListProducts = ({ data }) => {
  return (
    <div className="my-5 flex-1">
      <span>Home / Men</span>
      <h1>Mens Sweaters - Cashmere, Cardigans & Crewnecks</h1>

      <div className="grid grid-cols-3 gap-10">
        {data.map((item, index) => (
          <div key={index}>
            <img
              src={
                import.meta.env.VITE_REACT_UPLOAD_URL +
                item?.attributes.product_size_colors.data[0].attributes.product_image.data.attributes.img_1.data
                  .attributes.url
              }
              alt=""
            />
            <div className="flex justify-between">
              <h4>{item?.attributes.name}</h4>
              <h4>{item?.attributes.original_price}</h4>
            </div>
            <div>
              <p>
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

ListProducts.propTypes = {
  data: PropTypes.array.isRequired,
};

export default ListProducts;
