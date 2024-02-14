import images from "../../../assets/images";
import { FaStar } from "react-icons/fa";

const ProductsData = [
  {
    id: 1,
    img: images.shirt1,
    title: "Casual Wear",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    img: images.shirt2,
    title: "Printed shirt",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    img: images.shirt3,
    title: "Women shirt",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];
const TopProducts = () => {
  return (
    <section className="py-12">
      <div className="container flex flex-col rounded-3xl dark:bg-[#18191a]">
        {/* Header section */}
        <div className="mx-auto max-w-[600px] py-12 text-center ">
          <h1
            data-aos="fade-up"
            className="font-['Kaisei-Tokumin'] text-3xl font-extrabold uppercase text-black dark:text-white"
          >
            top seller
          </h1>
          <p
            data-aos="fade-up"
            className="text-md font-semibold text-neutral-800 dark:text-neutral-400"
          >
            Be inspired by sleek shapes, fresh colors and expressive prints
          </p>
        </div>
        {/* Body section */}
        <div className="grid grid-cols-1 place-items-center gap-20 sm:grid-cols-2 md:grid-cols-3 md:gap-5">
          {ProductsData.map((data) => (
            <div
              data-aos="zoom-in"
              className="group relative flex max-w-[300px] flex-col gap-20 rounded-2xl bg-white shadow-2xl duration-300 hover:bg-black/80 hover:text-white dark:bg-gray-800 dark:hover:bg-primary"
              key={data.id}
            >
              {/* image section */}
              <div className="h-[100px]">
                <img
                  src={data.img}
                  alt=""
                  className="mx-auto block max-w-[140px] transform drop-shadow-xl duration-300 group-hover:scale-105"
                />
              </div>
              {/* details section */}
              <div className="p-4 text-center">
                {/* star rating */}
                <div className="flex w-full items-center justify-center gap-1">
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                </div>
                <h1 className="text-xl font-bold">{data.title}</h1>
                <p className="line-clamp-2 text-sm text-gray-500 duration-300 group-hover:text-white">
                  {data.description}
                </p>
                <button className="mt-4 rounded-full bg-primary px-4 py-1 text-white duration-300 hover:scale-105 group-hover:bg-white group-hover:text-primary">
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopProducts;
