import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const NewIn = ({ fourNewProducts }) => {
  return (
    <section className="my-14">
      <div className="container">
        <div className="mx-auto mb-10 max-w-[600px] text-center ">
          <h1
            data-aos="fade-up"
            className="font-['Kaisei-Tokumin'] text-3xl font-extrabold uppercase
text-black"
          >
            a style that fits everyone
          </h1>
          <p
            data-aos="fade-up"
            className="text-md font-semibold text-neutral-800"
          >
            Be inspired by sleek shapes, fresh colors and expressive prints
          </p>
        </div>
        <div>
          <div className="relative grid grid-cols-1 place-items-center gap-5 bg-zinc-300/40 p-5  sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            <div className="flex w-[150px] flex-col justify-center gap-5">
              <div className="flex flex-col items-start justify-start gap-px">
                <div className="text-4xl font-medium tracking-wide text-neutral-800">
                  New in
                </div>
                <div className=" text-xs font-normal text-neutral-800 opacity-80">
                  Shop the latest fashion trends from the top luxury designers.
                </div>
              </div>
              <div className="inline-flex cursor-pointer items-center justify-center bg-neutral-800 px-3.5 py-2 hover:bg-neutral-950">
                <a className="text-xs font-normal text-white ">Shop New In</a>
              </div>
            </div>
            {/* card section */}
            {fourNewProducts.map((item) => (
              <div
                data-aos="fade-up"
                data-aos-delay="400"
                key={item.id}
                className="flex flex-col items-center justify-center bg-white"
              >
                <Link to="/">
                  <img
                    src={
                      import.meta.env.VITE_REACT_UPLOAD_URL +
                      item?.attributes?.product_size_colors?.data[0]?.attributes
                        ?.product_image.data?.attributes?.img_1?.data
                        ?.attributes?.url
                    }
                    alt=""
                    className="h-[220px] w-[180px] transform rounded-md object-cover p-4 transition duration-300 ease-in-out hover:scale-105"
                  />
                </Link>
                <div className="min-h-16">
                  <Link to="/">
                    <h3 className="transform pb-3 text-center font-semibold uppercase transition duration-300 ease-in-out hover:scale-105 hover:text-blue-500">
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
