import { FaUserTie, FaPhoneAlt, FaCaretDown } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";
import { IoMdSearch } from "react-icons/io";
import DarkMode from "../../../components/DarkMode";

const DefaultHeader = () => {
  const Menu = [
    {
      id: 1,
      name: "Home",
      link: "/#",
    },
    {
      id: 2,
      name: "Top Rated",
      link: "/#services",
    },
    {
      id: 3,
      name: "Kids Wear",
      link: "/#",
    },
    {
      id: 3,
      name: "Mens Wear",
      link: "/#",
    },
    {
      id: 3,
      name: "Electronics",
      link: "/#",
    },
  ];

  const DropdownLinks = [
    {
      id: 1,
      name: "Trending Products",
      link: "/#",
    },
    {
      id: 2,
      name: "Best Selling",
      link: "/#",
    },
    {
      id: 3,
      name: "Top Rated",
      link: "/#",
    },
  ];
  return (
    <header className="relative z-40 bg-white  text-black shadow-xl duration-200 ">
      <div className="h-full w-full bg-slate-300 py-4 dark:bg-slate-700 dark:text-white">
        <div className="container flex items-center justify-between border-b-violet-300">
          <div>
            <a href="" className="flex gap-2 text-2xl font-bold sm:text-3xl">
              <span>Fashion</span>
            </a>
          </div>
          <div>
            <div className="flex items-center justify-center space-x-2">
              {/* Search Header*/}
              <div className="w-50 relative flex rounded-md border-gray-300 ">
                {/* <input
                  type="text"
                  placeholder="Search"
                  className="focus:border-1 w-full rounded-full border border-gray-300 py-1 pl-6 
 transition-all duration-300 focus:border-black focus:outline-none"
                /> */}
                <IoMdSearch className="group-hover:text-primary absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 transform text-white" />
              </div>

              {/* Icon User */}
              <button className="from-primary to-secondary group flex cursor-pointer items-center gap-3 rounded-full bg-gradient-to-r px-4 py-1 text-white">
                <span className="hidden text-sm transition duration-700 ease-in-out group-hover:block">
                  User
                </span>
                <FaUserTie className="text-xl drop-shadow-sm" />
              </button>

              {/* Icon Cart */}
              <button className="from-primary to-secondary group flex cursor-pointer items-center gap-3 rounded-full bg-gradient-to-r px-4 py-1 text-white transition duration-700 ease-in-out">
                <span className="hidden text-sm group-hover:block">Order</span>
                <TiShoppingCart className="text-xl drop-shadow-sm" />
              </button>

              {/* Icon Telephone */}
              <button className="from-primary to-secondary group flex cursor-pointer items-center gap-3 rounded-full bg-gradient-to-r px-4 py-1 text-white  transition duration-700 ease-in-out">
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

      <div className="container mt-2 flex items-center justify-center">
        <ul className="relative hidden cursor-pointer items-center gap-4 sm:flex">
          {Menu.map((data) => (
            <li key={data.id}>
              <a
                href={data.link}
                className="hover:text-primary inline-block px-4 transition-all duration-200"
              >
                {data.name}
              </a>
            </li>
          ))}

          <li className="group relative cursor-pointer">
            <a
              href=""
              className="flex items-center gap-2 py-2 transition-all duration-200"
            >
              Trending
              <span>
                <FaCaretDown className="group-hover:rotate-180" />
              </span>
            </a>

            <div className="absolute z-[9999] hidden w-[200px] rounded-md bg-white p-2 text-black shadow-md group-hover:block">
              <ul>
                {DropdownLinks.map((data) => (
                  <li key={data.id}>
                    <a
                      href={data.link}
                      className="hover:bg-primary/20 inline-block w-full rounded-md p-2 "
                    >
                      {data.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default DefaultHeader;
