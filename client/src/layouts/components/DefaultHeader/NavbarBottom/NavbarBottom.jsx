import { FaCaretDown } from "react-icons/fa";
import { Link } from "react-router-dom";

const NavbarBottom = () => {
  const DropdownMenWear = [
    {
      id: 1,
      name: "All Men's Clothing",
      link: "/collections/mens-all",
    },
    {
      id: 2,
      name: "Tops",
      link: "/",
    },
    {
      id: 3,
      name: "Sweaters",
      link: "/collections/mens-sweaters",
    },
    {
      id: 4,
      name: "Jeans & Denim",
      link: "/",
    },
    {
      id: 5,
      name: "Pants & Bottoms",
      link: "/",
    },
  ];
  const DropdownWomenWear = [
    {
      id: 1,
      name: "All Women's Clothing",
      link: "/collections/womens-all",
    },
    {
      id: 2,
      name: "Tops",
      link: "/",
    },
    {
      id: 3,
      name: "Sweaters",
      link: "/collections/womens-sweaters",
    },
    {
      id: 4,
      name: "Jeans & Denim",
      link: "/",
    },
    {
      id: 5,
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
      name: "Best-Sellers",
      link: "/collections/best-sellers",
    },
    {
      id: 3,
      name: "Men Wear",
      link: "/#services",
      children: DropdownMenWear,
    },
    {
      id: 4,
      name: "Women Wear",
      link: "/#",
      children: DropdownWomenWear,
    },
    {
      id: 5,
      name: "About",
      link: "/#",
    },
    {
      id: 6,
      name: "Everworld Stories",
      link: "/#",
    },
  ];
  return (
    <div className="dark:bg-[#18191a] dark:text-white">
      <div className="container flex items-center justify-center py-2 ">
        <ul className="relative hidden cursor-pointer items-center gap-4 sm:flex ">
          {Menu.map((data) => (
            <li key={data.id}>
              {data.children ? (
                <div className="group relative cursor-pointer">
                  <Link
                    to=""
                    className="flex items-center gap-2 py-2 transition-all duration-200"
                  >
                    {data.name}
                    <span>
                      <FaCaretDown className="group-hover:rotate-180" />
                    </span>
                  </Link>
                  <div className="absolute z-[9999] hidden w-[230px] rounded-md bg-white p-2 text-black shadow-md group-hover:block">
                    <ul>
                      {data.children.map((childData) => (
                        <li key={childData.id}>
                          <Link
                            to={childData.link}
                            className="inline-block w-full rounded-md p-2 hover:bg-primary/20"
                          >
                            {childData.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ) : (
                <Link
                  to={data.link}
                  className="inline-block px-4 transition-all duration-200 hover:text-primary"
                >
                  {data.name}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NavbarBottom;
