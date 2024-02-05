import { FaRegTrashCan } from "react-icons/fa6";
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
        <div className="absolute left-1/2 top-full mt-3 hidden w-96 -translate-x-1/2 transform rounded-lg bg-slate-100 shadow-lg group-hover:block">
          <div className="flex flex-col p-1 text-black">
            <h1 className="py-2 font-semibold">New Products Added</h1>
            <div className="flex flex-col">
              {products.map((item, index) => {
                return (
                  <div
                    className="flex items-center justify-between gap-4 px-2 py-4"
                    key={index}
                  >
                    <div className="flex gap-2">
                      <img
                        src={import.meta.env.VITE_REACT_UPLOAD_URL + item.img}
                        alt=""
                        className="max-h-16 px-2"
                      />
                      <div>
                        <h2 className="text-base">{item.name}</h2>
                        <p className="text-left font-semibold text-red-600">
                          ${item.price}
                        </p>
                      </div>
                    </div>
                    <span>
                      <FaRegTrashCan className="cursor-pointer text-base" />
                    </span>
                  </div>
                );
              })}
            </div>
          </div>{" "}
          <div className="absolute -top-3 right-36 h-6 w-6 -translate-x-1/2 rotate-45 transform bg-slate-100"></div>
        </div>
      </button>
    </div>
  );
};

export default CartTooltip;
