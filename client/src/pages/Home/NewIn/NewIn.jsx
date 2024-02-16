import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setProductDetail } from "../../../redux/productReducer";

const NewIn = ({ fourNewProducts }) => {
  const dispatch = useDispatch();

  const handleClickProduct = (product) => {
    dispatch(setProductDetail(product));
  };

  const normalizedName = (input) => input.toLowerCase().replace(/\s+/g, "-");

  return (
    <section className="py-12">
      <div className="container rounded-3xl dark:bg-[#18191a]">
        <div className="mx-auto max-w-[600px] py-12 text-center ">
          <h1
            data-aos="fade-up"
            className="font-['Kaisei-Tokumin'] text-3xl font-extrabold uppercase
text-black dark:text-white"
          >
            a style that fits everyone
          </h1>
          <p
            data-aos="fade-up"
            className="text-md font-semibold text-neutral-800 dark:text-neutral-400"
          >
            Be inspired by sleek shapes, fresh colors and expressive prints
          </p>
        </div>
        <div>
          <div className="relative grid grid-cols-1 place-items-center gap-5 bg-neutral-600 p-5  sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            <div className="flex w-[150px] flex-col justify-center gap-5">
              <div className="flex flex-col items-start justify-start gap-px">
                <div className="text-4xl font-medium tracking-wide text-white ">
                  New In
                </div>
                <div className=" text-xs font-normal text-neutral-200 opacity-90 ">
                  Shop the latest fashion trends from the top luxury designers.
                </div>
              </div>
              <div className="inline-flex cursor-pointer items-center justify-center bg-neutral-800 px-3.5 py-2 hover:bg-neutral-950">
                <Link
                  to="/collections/new-in"
                  className="text-xs font-normal text-white "
                >
                  Shop New In
                </Link>
              </div>
            </div>
            {/* card section */}
            {fourNewProducts.map((item) => (
              <div
                key={item.id}
                className="flex min-h-[320px]  transform flex-col items-center justify-center rounded-md bg-white p-4 shadow-xl transition duration-300 ease-in-out hover:scale-105 dark:bg-neutral-700"
              >
                <Link
                  to={`/products/${normalizedName(item?.attributes.name)}`}
                  onClick={() => handleClickProduct(item)}
                >
                  <img
                    src={`${import.meta.env.VITE_REACT_UPLOAD_URL}${item?.attributes?.product_size_colors?.data[0]?.attributes?.product_image.data?.attributes?.img_1?.data?.attributes?.url}`}
                    alt=""
                    className="h-[220px] w-[180px] rounded-md object-cover"
                  />
                </Link>
                <div className="mt-2">
                  <Link to="/">
                    <h3 className="transform pb-3 text-center font-semibold uppercase transition duration-300 ease-in-out hover:scale-105 hover:text-blue-500 dark:text-[#7DFFAF]">
                      {item?.attributes?.name}
                    </h3>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

NewIn.propTypes = {
  fourNewProducts: PropTypes.array.isRequired,
};

export default NewIn;
