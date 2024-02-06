import { useSelector } from "react-redux";
import { TiShoppingCart } from "react-icons/ti";
import { Link } from "react-router-dom";

const CartTooltip = () => {
  const products = useSelector((state) => state.cart.products);
  console.log(products);
  return (
    <div className="relative">
      <button className="group relative flex cursor-pointer items-center gap-3 rounded-full border-[1px] border-black bg-gradient-to-r from-white to-white px-4 py-1 text-black">
        <span className="hidden text-sm group-hover:block">Order</span>
        <Link to="/cart">
          <TiShoppingCart className="text-xl drop-shadow-sm" />
        </Link>
        <div className="absolute -top-2 right-1 flex h-5 w-5 items-center justify-center rounded-lg bg-gray-700 text-base font-normal text-white">
          {products.length}
        </div>
        <div className="absolute left-1/2 top-full mt-3 hidden w-[420px] -translate-x-1/2 transform rounded-lg bg-slate-200 shadow-lg group-hover:block">
          <div className="absolute -top-3 right-40 h-6 w-6 -translate-x-1/2 rotate-45 transform bg-slate-200"></div>
          <div className="flex flex-col p-1 text-black">
            <h1 className="py-2 pl-4 text-left font-normal text-[#737373]">
              New Products Added
            </h1>
            <div className="flex flex-col">
              {products.map((item, index) => {
                return (
                  <div
                    className="flex items-center justify-between gap-4 px-2 py-2"
                    key={index}
                  >
                    <div className="flex gap-2">
                      <img
                        src={import.meta.env.VITE_REACT_UPLOAD_URL + item.img}
                        alt=""
                        className="max-h-16 px-2"
                      />
                      <div className="max-w-60">
                        <h2 className="truncate whitespace-nowrap text-sm font-medium">
                          {item.name}
                        </h2>
                        <p className="mt-1 text-left text-sm font-normal">
                          Size {item.size}
                        </p>
                      </div>
                    </div>
                    <span className="text-left font-semibold text-red-600">
                      ${item.price}
                    </span>
                  </div>
                );
              })}
            </div>
            <div className="px-2 text-right">
              <Link to="/cart">
                <button className="rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-blue-700">
                  View Cart
                </button>
              </Link>
            </div>
          </div>
        </div>
      </button>
    </div>
  );
};

export default CartTooltip;
