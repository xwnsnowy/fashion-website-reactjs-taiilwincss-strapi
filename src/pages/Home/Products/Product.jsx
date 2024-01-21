import images from "../../../assets/images";

import { FaStar } from "react-icons/fa6";

const ProductsData = [
  {
    id: 1,
    img: images.slider1,
    title: "Saint Laurent",
    rating: 5.0,
    color: "white",
    aosDelay: "0",
  },
  {
    id: 2,
    img: images.slider1,
    title: "loewe",
    rating: 4.5,
    color: "Red",
    aosDelay: "200",
  },
  {
    id: 3,
    img: images.slider1,
    title: "balenciaga",
    rating: 4.7,
    color: "brown",
    aosDelay: "400",
  },
  {
    id: 4,
    img: images.slider1,
    title: "gucci",
    rating: 4.4,
    color: "Yellow",
    aosDelay: "600",
  },
];

const Products = () => {
  return (
    <section className="my-14">
      <div className="container">
        <div className="mx-auto mb-10 max-w-[600px] text-center ">
          <h1
            data-aos="fade-up"
            className="font-[Kaisei-Tokumin] text-3xl font-extrabold uppercase text-black"
          >
            a style that fits everyone
          </h1>
          <p data-aos="fade-up" className="text-md font-extrabold text-black">
            Be inspired by sleek shapes, fresh colors and expressive prints
          </p>
          <h3 data-aos="fade-up" className="text-md text-black underline">
            Shop collection
          </h3>
        </div>
        <div>
          <div className="relative grid grid-cols-1 place-items-center gap-5 bg-zinc-300/40 p-7  sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            <div className="flex w-[150px] flex-col justify-center gap-5">
              <div className="flex flex-col items-start justify-start gap-px">
                <div className="text-4xl font-medium tracking-wide text-neutral-800">
                  New in
                </div>
                <div className=" text-xs font-normal text-neutral-800 opacity-80">
                  Shop the latest fashion trends from the top luxury designers.
                </div>
              </div>
              <div className="inline-flex cursor-pointer items-center justify-center bg-neutral-800 px-3.5 py-2 ">
                <a className="text-xs font-normal text-white">Shop New In</a>
              </div>
            </div>
            {/* card section */}
            {ProductsData.map((data) => (
              <div
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                key={data.id}
                className=" flex flex-col items-center justify-center bg-white"
              >
                <img
                  src={data.img}
                  alt=""
                  className="h-[220px] w-[180px] rounded-md object-cover p-4"
                />
                <div>
                  <h3 className="pb-3 text-center font-semibold uppercase">
                    {data.title}
                  </h3>
                  {/* <p className="text-sm text-gray-600">{data.color}</p>
                  <div className="flex items-center gap-1">
                    <FaStar className="text-yellow-400" />
                    <span>{data.rating}</span>
                  </div> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
