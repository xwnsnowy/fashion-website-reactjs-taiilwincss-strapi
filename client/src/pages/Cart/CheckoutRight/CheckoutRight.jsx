import { BsCart4 } from "react-icons/bs";
import { PiTrash } from "react-icons/pi";
import { FaLock, FaMinus, FaPlus } from "react-icons/fa";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { Tooltip } from "antd";
import { useDispatch, useSelector } from "react-redux";

const CheckoutRight = () => {
  const productsInCart = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();
  const text = (
    <span className="flex items-center text-center text-xs">
      Promo codes will only apply if their total discount is greater than the-
      total discount of all on-sale items
    </span>
  );

  return (
    <div className="sticky top-16 max-h-[900px] flex-1 overflow-y-auto bg-white">
      <div className="flex flex-col">
        <div className="flex items-center justify-center bg-[#ebf9eb] py-1">
          <p className="text-sm">Free Shipping</p>
        </div>
        <div className="sticky top-0 z-10 flex items-center justify-between bg-white px-6 py-6">
          <div className="flex items-center gap-2">
            <BsCart4 className="h-5 w-5" />
            <span className="text-lg font-semibold">
              Cart ({productsInCart.length})
            </span>
            <div className="h-[10px] w-[10px] rounded-full bg-[#297a3a]"></div>
          </div>
          <p>₫2,871,977.81</p>
        </div>
        <div className=" flex flex-col gap-4 px-6 py-4">
          {/* product in purschasing */}
          {productsInCart.map((item) => {
            return (
              <div className="flex w-full gap-3" key={item.id}>
                <img
                  src={import.meta.env.VITE_REACT_UPLOAD_URL + item.img}
                  alt="product"
                  className="max-h-24 max-w-20 object-cover"
                />
                <div className="flex flex-1 flex-col justify-between">
                  <div className="flex justify-between">
                    <div>
                      <h4>{item.name}</h4>
                      <p className="text-sm text-[#737373]">
                        Size {item.size} | {item.color}
                      </p>
                    </div>
                    <div className="items-cent er flex  cursor-pointer p-1">
                      <PiTrash className="h-5 w-5" />
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="mr-1 text-xs text-[#737373] line-through"></span>
                      <span className="text-xs font-semibold">
                        ${item.price}
                      </span>
                    </div>
                    <div className="flex">
                      <button className="flex h-8 w-8 items-center justify-center border-[1px] border-[#e1e0e0] text-center first-letter:cursor-pointer hover:scale-105 hover:transform hover:bg-gray-300">
                        <FaMinus className="text-[#534444]" />
                      </button>
                      <input
                        type="text"
                        className="h-8 w-10 border-b-[1px] border-t-[1px] border-[#e1e0e0] text-center"
                      />
                      <button className="flex h-8 w-8 items-center justify-center border-[1px] border-[#e1e0e0] text-center first-letter:cursor-pointer hover:scale-105 hover:transform hover:bg-gray-300">
                        <FaPlus className="text-[#534444]" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          {/* promo code */}
          <div className="flex py-5">
            <div className="relative flex flex-1 items-center">
              <input
                type="text"
                placeholder="Gift or promo code"
                className="w-full border-[1px] bg-[#f5f4f4] px-2 py-3 focus:border-black"
              />{" "}
              <Tooltip placement="top" title={text}>
                <IoIosInformationCircleOutline className="absolute right-0 mr-2 cursor-pointer text-[#737373]" />
              </Tooltip>
            </div>
            <button className="bg-[#e1e0e0] px-5 py-3 uppercase text-[#737373]">
              APPLY
            </button>
          </div>
          {/* hr */}
          <hr />
          {/* prepare the bill */}
          <div className="flex flex-col gap-1 py-5">
            <div className="flex justify-between">
              <p>Subtotal</p>
              <p>₫14681000</p>
            </div>
            <div className="flex justify-between">
              <p>Duties</p>
              <p>₫4,182,645.49</p>
            </div>
            <div className="flex justify-between">
              <p>Estimated Tax</p>
              <p>₫1,509,126.71</p>
            </div>
            <div className="flex justify-between">
              <p>Estimated Shipping</p>
              <p>Free</p>
            </div>
            <div className="flex justify-between">
              <p className="font-semibold">Total</p>
              <p className="font-semibold">₫20372772</p>
            </div>
          </div>
          <div className="bg-[#fff4d6] py-3">
            <p className="flex items-center justify-center text-center text-sm">
              Duties, Tax, and Shipping are estimated totals until shipping step
              is complete.
            </p>
          </div>
          {/* place order */}
        </div>
        <div className="sticky bottom-0 z-10 flex flex-col items-center justify-between bg-white px-6 py-6 ">
          <div className="flex w-full items-center justify-center bg-[#e1e0e0] py-4 text-center text-[#737373]">
            <button className="flex items-center justify-center uppercase">
              <span className="font-semibold">PLACE ORDER</span>
              <FaLock className="absolute right-10" />
            </button>
          </div>
          <div className="py-4">
            <p>Psst, get it now before it sells out.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutRight;
