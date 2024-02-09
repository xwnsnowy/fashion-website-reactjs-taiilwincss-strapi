import { BsCart4 } from "react-icons/bs";
import { PiTrash } from "react-icons/pi";
import { FaLock, FaMinus, FaPlus } from "react-icons/fa";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { Tooltip } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { removeItem } from "../../../redux/cartReducer";
import { useState } from "react";

const CheckoutRight = () => {
  const [productQuantity, setProductQuantity] = useState({});

  const productsInCart = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();

  const handleQuantityChange = (productId, newQuantity) => {
    setProductQuantity({
      ...productQuantity,
      [productId]: newQuantity,
    });
  };

  const calculateSubTotal = () => {
    let total = 0;
    productsInCart.forEach((item) => {
      const quantity = productQuantity[item.id] || item.quantity;
      total += quantity * item.price;
    });
    return total;
  };

  const subTotal = calculateSubTotal().toFixed(2);

  const calculateDuties = () => {
    const dutyRate = 0.1;
    const duties = subTotal * dutyRate;
    return duties.toFixed(2);
  };

  const calculateEstimatedTax = () => {
    const taxRate = 0.2;
    const estimatedTax = subTotal * taxRate;
    return estimatedTax.toFixed(2);
  };

  const total = () => {
    const subTotalValue = parseFloat(subTotal);
    const duties = parseFloat(calculateDuties());
    const estimatedTax = parseFloat(calculateEstimatedTax());
    const estimatedShipping = 0;
    const total = subTotalValue + duties + estimatedShipping + estimatedTax;
    return total.toFixed(2);
  };

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
                      <div className="flex gap-1">
                        <h4>{item.name}</h4>
                        <span className="font-medium">x {item.quantity}</span>
                      </div>
                      <p className="text-sm text-[#737373]">
                        Size {item.size} | {item.color}
                      </p>
                    </div>
                    <div className="items-cent er flex  cursor-pointer p-1">
                      <PiTrash
                        className="h-5 w-5"
                        onClick={() => dispatch(removeItem(item.id))}
                      />
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
                      <button
                        className="flex h-8 w-8 items-center justify-center border-[1px] border-[#e1e0e0] text-center first-letter:cursor-pointer hover:scale-105 hover:transform hover:bg-gray-300"
                        onClick={() =>
                          handleQuantityChange(
                            item.id,
                            (productQuantity[item.id] || item.quantity) - 1,
                          )
                        }
                      >
                        <FaMinus className="text-[#534444]" />
                      </button>
                      <input
                        type="text"
                        value={productQuantity[item.id] || item.quantity}
                        onChange={(e) =>
                          handleQuantityChange(
                            item.id,
                            parseInt(e.target.value),
                          )
                        }
                        className="h-8 w-10 border-b-[1px] border-t-[1px] border-[#e1e0e0] text-center"
                      />
                      <button
                        className="flex h-8 w-8 items-center justify-center border-[1px] border-[#e1e0e0] text-center first-letter:cursor-pointer hover:scale-105 hover:transform hover:bg-gray-300"
                        onClick={() =>
                          handleQuantityChange(
                            item.id,
                            (productQuantity[item.id] || item.quantity) + 1,
                          )
                        }
                      >
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
              />
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
              <p>${calculateSubTotal()}</p>
            </div>
            <div className="flex justify-between">
              <p>Duties</p>
              <p>${calculateDuties()}</p>
            </div>
            <div className="flex justify-between">
              <p>Estimated Tax</p>
              <p>${calculateEstimatedTax()}</p>
            </div>
            <div className="flex justify-between">
              <p>Estimated Shipping</p>
              <p>Free</p>
            </div>
            <div className="flex justify-between">
              <p className="font-semibold">Total</p>
              <p className="font-semibold">${total()}</p>
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
