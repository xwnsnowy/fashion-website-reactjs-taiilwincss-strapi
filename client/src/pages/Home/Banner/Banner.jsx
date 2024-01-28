import images from "../../../assets/images";
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";

const Banner = () => {
  return (
    <div className="flex min-h-[550px] items-center justify-center py-12 sm:py-0">
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-6 sm:grid-cols-2">
          {/* image section */}
          <div data-aos="zoom-in">
            <img
              src={images.slider1}
              alt=""
              className="mx-auto h-[350px] w-full max-w-[400px] object-cover drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]"
            />
          </div>

          {/* text details section */}
          <div className="flex flex-col justify-center gap-6 sm:pt-0">
            <h1 data-aos="fade-up" className="text-3xl font-bold sm:text-4xl">
              Winter Sale upto 50% Off
            </h1>
            <p
              data-aos="fade-up"
              className="text-sm leading-5 tracking-wide text-gray-500"
            >
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque
              reiciendis inventore iste ratione ex alias quis magni at optio
            </p>
            <div className="flex flex-col gap-4">
              <div data-aos="fade-up" className="flex items-center gap-4">
                <GrSecure className="h-12 w-12 rounded-full bg-violet-100 p-4 text-4xl shadow-sm dark:bg-violet-400" />
                <p>Quality Products</p>
              </div>
              <div data-aos="fade-up" className="flex items-center gap-4">
                <IoFastFood className="h-12 w-12 rounded-full bg-orange-100 p-4 text-4xl shadow-sm dark:bg-orange-400" />
                <p>Fast Delivery</p>
              </div>
              <div data-aos="fade-up" className="flex items-center gap-4">
                <GiFoodTruck className="h-12 w-12 rounded-full bg-green-100 p-4 text-4xl shadow-sm dark:bg-green-400" />
                <p>Easy Payment method</p>
              </div>
              <div data-aos="fade-up" className="flex items-center gap-4">
                <GiFoodTruck className="h-12 w-12 rounded-full bg-yellow-100 p-4 text-4xl shadow-sm dark:bg-yellow-400" />
                <p>Get Offers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
