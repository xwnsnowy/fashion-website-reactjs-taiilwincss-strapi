import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";

const DefaultFooter = () => {
  const childrenForCompany = [
    {
      id: 1,
      title: "About",
      link: "/#",
    },
    {
      id: 2,
      title: "Environmental Initiatives",
      link: "/#",
    },
    {
      id: 3,
      title: "Factories",
      link: "/#",
    },
    {
      id: 4,
      title: "DEI",
      link: "/#",
    },
    {
      id: 5,
      title: "Careers",
      link: "/#",
    },
    {
      id: 6,
      title: "International",
      link: "/#",
    },
    {
      id: 7,
      title: "Accessibility",
      link: "/#",
    },
  ];
  const childrenForGetHelp = [
    {
      id: 1,
      title: "Help Center",
      link: "/#",
    },
    {
      id: 2,
      title: "Return Policy",
      link: "/#",
    },
    {
      id: 3,
      title: "Shipping Info",
      link: "/#",
    },
    {
      id: 4,
      title: "Bulk Orders",
      link: "/#",
    },
  ];
  return (
    <div className="text-black">
      <div className="container">
        <div data-aos="zoom-in" className="grid pb-10 pt-5 md:grid-cols-3">
          {/* company details */}
          <div className="px-4 py-8">
            <h1 className="mb-3 flex items-center gap-3 text-justify text-xl font-bold sm:text-left sm:text-3xl">
              {/* <img src={footerLogo} alt="" className="max-w-[50px]" />
              Shopsy */}
            </h1>
            <p className="mt-4 text-center text-gray-500">
              Embrace the essence of style with our curated collection of
              <span className="font-bold"> fashion-forward apparel</span>, where
              every piece speaks volumes about your unique personality.
            </p>
          </div>

          {/* Footer Links */}
          <div className="col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10">
            <div>
              <div className="px-4 py-8">
                <h1 className="mb-3 text-justify text-xl font-bold sm:text-left sm:text-xl">
                  Company
                </h1>
                <ul className="flex flex-col gap-3">
                  {childrenForCompany.map((link) => (
                    <li
                      className="cursor-pointer text-black duration-300 hover:translate-x-1 hover:text-primary"
                      key={link.title}
                    >
                      <span>{link.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <div className="px-4 py-8">
                <h1 className="mb-3 text-justify text-xl font-bold sm:text-left sm:text-xl">
                  Get Help
                </h1>
                <ul className="flex flex-col gap-3">
                  {childrenForGetHelp.map((link) => (
                    <li
                      className="cursor-pointer text-black duration-300 hover:translate-x-1 hover:text-primary"
                      key={link.title}
                    >
                      <span>{link.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* social links */}

            <div>
              <div className="mt-6 flex items-center gap-3">
                <a href="#">
                  <FaInstagram className="text-3xl" />
                </a>
                <a href="#">
                  <FaFacebook className="text-3xl" />
                </a>
                <a href="#">
                  <FaLinkedin className="text-3xl" />
                </a>
              </div>
              <div className="mt-6">
                <div className="flex items-center gap-3">
                  <FaLocationArrow />
                  <p>Ha Noi, Viet Nam</p>
                </div>
                <div className="mt-3 flex items-center gap-3">
                  <FaMobileAlt />
                  <p>+91 123456789</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DefaultFooter;
