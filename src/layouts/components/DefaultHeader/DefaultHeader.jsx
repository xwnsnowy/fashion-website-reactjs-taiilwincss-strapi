import { FaUserTie, FaPhoneAlt, FaCaretDown } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";
import { IoMdSearch } from "react-icons/io";
import DarkMode from "../../../components/DarkMode";
import images from "../../../assets/images";
import { Link } from "react-router-dom";

const DefaultHeader = () => {
  const DropdownMenWear = [
    {
      id: 1,
      name: "Tops",
      link: "/",
    },
    {
      id: 2,
      name: "Sweaters",
      link: "/collections/men-sweaters",
    },
    {
      id: 3,
      name: "Jeans & Denim",
      link: "/",
    },
    {
      id: 4,
      name: "Pants & Bottoms",
      link: "/",
    },
  ];
  const DropdownWomenWear = [
    {
      id: 1,
      name: "Tops",
      link: "/",
    },
    {
      id: 2,
      name: "Sweaters",
      link: "/",
    },
    {
      id: 3,
      name: "Jeans & Denim",
      link: "/",
    },
    {
      id: 4,
      name: "Pants & Bottoms",
      link: "/",
    },
  ];

  const Menu = [
    {
      id: 1,
      name: "Home",
      link: "/#",
    },
    {
      id: 2,
      name: "Men Wear",
      link: "/#services",
      children: DropdownMenWear,
    },
    {
      id: 3,
      name: "Women Wear",
      link: "/#",
      children: DropdownWomenWear,
    },
    {
      id: 4,
      name: "About",
      link: "/#",
    },
    {
      id: 5,
      name: "Everworld Stories",
      link: "/#",
    },
  ];

  return (
    <header className="relative z-40 bg-white  text-black shadow-xl duration-200">
      <div className="h-full w-full bg-white py-6 dark:bg-slate-700 dark:text-white">
        <div className="container flex items-center justify-between border-b-violet-300">
          <div className="group flex items-center justify-center gap-2">
            <img src={images.usa} alt="USA" className="w-8 cursor-pointer" />
            <span>
              <FaCaretDown className="cursor-pointer group-hover:rotate-180" />
            </span>
          </div>
          <div className="flex items-center">
            <div className="right-0 h-px w-12 rotate-90 border border-black"></div>
            <div className="space-x-3">
              <Link
                to="/"
                className="flex gap-2 text-2xl font-bold sm:text-3xl"
              >
                <span className="font-['Jura'] text-2xl font-bold uppercase tracking-widest  text-neutral-800 ">
                  COSMIC FASHION
                </span>
              </Link>
            </div>
          </div>
          <div>
            <div className="flex items-center justify-center space-x-2 font-bold">
              {/* Search Header*/}
              <div className="w-50 relative flex rounded-md border-gray-300 ">
                {/* <input
                  type="text"
                  placeholder="Search"
                  className="focus:border-1 w-full rounded-full border border-gray-300 py-1 pl-6 
 transition-all duration-300 focus:border-black focus:outline-none"
                /> */}
                <IoMdSearch className="absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 transform text-black group-hover:text-primary" />
              </div>

              {/* Icon User */}
              <button className="group flex cursor-pointer items-center gap-3 rounded-full border-[1px] border-black bg-gradient-to-r from-white to-white px-4 py-1 text-black">
                <span className="hidden text-sm transition duration-700 ease-in-out group-hover:block">
                  User
                </span>
                <FaUserTie className="text-xl drop-shadow-sm " />
              </button>

              {/* Icon Cart */}
              <button className="group relative flex cursor-pointer items-center gap-3 rounded-full border-[1px] border-black bg-gradient-to-r from-white to-white px-4 py-1 text-black">
                <span className="hidden text-sm group-hover:block">Order</span>
                <TiShoppingCart className="text-xl drop-shadow-sm" />
                <div className="absolute -top-2 right-1 flex h-5 w-5 items-center justify-center rounded-lg bg-gray-700 text-base font-normal text-white">
                  0
                </div>
              </button>

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
      <hr />
      <div className="container flex items-center justify-center py-3">
        <ul className="relative hidden cursor-pointer items-center gap-4 sm:flex">
          {Menu.map((data) => (
            <li key={data.id}>
              {data.children ? (
                <div className="group relative cursor-pointer">
                  <a
                    href=""
                    className="flex items-center gap-2 py-2 transition-all duration-200"
                  >
                    {data.name}
                    <span>
                      <FaCaretDown className="group-hover:rotate-180" />
                    </span>
                  </a>
                  <div className="absolute z-[9999] hidden w-[200px] rounded-md bg-white p-2 text-black shadow-md group-hover:block">
                    <ul>
                      {data.children.map((childData) => (
                        <li key={childData.id}>
                          <a
                            href={childData.link}
                            className="inline-block w-full rounded-md p-2 hover:bg-primary/20"
                          >
                            {childData.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ) : (
                <a
                  href={data.link}
                  className="inline-block px-4 transition-all duration-200 hover:text-primary"
                >
                  {data.name}
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default DefaultHeader;
