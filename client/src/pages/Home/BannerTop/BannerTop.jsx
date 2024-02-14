import { Link } from "react-router-dom";

const BannerTop = () => {
  return (
    <section className="flex items-center justify-center bg-red-900 p-20 text-white  dark:bg-[#000F0A] ">
      <div>
        <h2 className="text-5xl dark:text-[#7DFFAF]">
          New Markdowns Just Added:
          <span className="font-bold"> Now up to 70% Off</span>
        </h2>
        <div className="mt-10 flex items-center justify-center gap-5">
          <div className="cursor-pointer">
            <Link to="/collections/mens-all">
              <span className=" bg-white px-16 py-2 uppercase text-black hover:bg-black hover:text-white dark:bg-[#7DFFAF]  dark:hover:text-[#7DFFAF]">
                shop men
              </span>
            </Link>
          </div>
          <div className="cursor-pointer">
            <Link to="/collections/womens-all">
              <span className="bg-white px-16 py-2 uppercase text-black hover:bg-black hover:text-white dark:bg-[#7DFFAF]  dark:hover:text-[#7DFFAF]">
                shop women
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerTop;
