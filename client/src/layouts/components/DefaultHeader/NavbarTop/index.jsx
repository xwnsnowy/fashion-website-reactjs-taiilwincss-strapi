import { FaUserTie, FaPhoneAlt, FaCaretDown } from "react-icons/fa";
import DarkMode from "../../../../components/DarkMode";
import images from "../../../../assets/images";
import { Link } from "react-router-dom";
import CartTooltip from "./CartTooltip";

const NavbarTop = () => {
  return (
    <div className="h-full w-full bg-white py-6 dark:bg-[#18191a]  ">
      <div className="container flex items-center justify-between border-b-violet-300">
        <div className="group flex items-center justify-center gap-2">
          <img src={images.usa} alt="USA" className="w-8 cursor-pointer" />
          <span>
            <FaCaretDown className="cursor-pointer group-hover:rotate-180 dark:text-white" />
          </span>
        </div>
        <div className="flex items-center">
          <div className="right-0 h-px w-12 rotate-90 border border-black dark:border-white"></div>
          <div className="space-x-3">
            <Link to="/" className="flex gap-2 text-2xl font-bold sm:text-3xl">
              <span className="text-nowrap font-['Jura'] text-2xl font-bold uppercase tracking-widest  text-neutral-800 dark:text-white">
                COSMIC FASHION
              </span>
            </Link>
          </div>
        </div>
        <div>
          <div className="flex items-center justify-center space-x-2 font-bold">
            {/* Icon User */}
            <button className="group flex cursor-pointer items-center gap-3 rounded-full border-[1px] border-black bg-gradient-to-r from-white to-white px-4 py-1 text-black">
              <span className="hidden text-sm transition duration-700 ease-in-out group-hover:block">
                User
              </span>
              <FaUserTie className="text-xl drop-shadow-sm " />
            </button>

            {/* Icon Cart */}
            <CartTooltip />

            {/* Icon Telephone */}
            <button className="group flex cursor-pointer items-center gap-3 rounded-full border-[1px] border-black bg-gradient-to-r from-white to-white px-4 py-1 text-black">
              <span className="hidden text-sm group-hover:block">Phone</span>
              <FaPhoneAlt className="text-xl drop-shadow-sm" />
            </button>

            {/* Darkmode Switch */}
            <div>
              <DarkMode />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarTop;
