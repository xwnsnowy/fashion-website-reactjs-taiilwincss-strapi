import images from "../../../assets/images";
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";

const BannerBottom = () => {
  return (
    <div className="flex min-h-[550px] items-center justify-center bg-gray-100 py-12 sm:py-0">
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-6 sm:grid-cols-2">
          {/* image section */}
          <div data-aos="zoom-in">
            <img
              src={images.bannerBottomSale}
              alt=""
              className="mx-auto h-[350px] w-full max-w-[400px] rounded-lg object-cover shadow-lg"
            />
          </div>

          {/* text details section */}
          <div className="flex flex-col justify-center gap-6 sm:pt-0">
            <h1
              data-aos="fade-up"
              className="text-3xl font-bold text-gray-800 sm:text-4xl"
            >
              Spring Sale - Up to 50% Off!
            </h1>
            <p
              data-aos="fade-up"
              className="text-sm leading-4 tracking-wide text-gray-700"
            >
              Revamp your wardrobe this spring! Enjoy up to 50% off on our
              latest fashion collections. Hurry, limited time offer!
            </p>
            <div className="flex flex-col gap-4">
              <div data-aos="fade-up" className="flex items-center gap-4">
                <GrSecure className="h-12 w-12 rounded-full bg-violet-100 p-4 text-4xl shadow-md dark:bg-violet-400" />
                <p className="text-gray-800">Quality Products</p>
              </div>
              <div data-aos="fade-up" className="flex items-center gap-4">
                <IoFastFood className="h-12 w-12 rounded-full bg-orange-100 p-4 text-4xl shadow-md dark:bg-orange-400" />
                <p className="text-gray-800">Fast Delivery</p>
              </div>
              <div data-aos="fade-up" className="flex items-center gap-4">
                <GiFoodTruck className="h-12 w-12 rounded-full bg-green-100 p-4 text-4xl shadow-md dark:bg-green-400" />
                <p className="text-gray-800">Easy Payment method</p>
              </div>
              <div data-aos="fade-up" className="flex items-center gap-4">
                <GiFoodTruck className="h-12 w-12 rounded-full bg-yellow-100 p-4 text-4xl shadow-md dark:bg-yellow-400" />
                <p className="text-gray-800">Exclusive Offers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerBottom;
