import { FaRegTrashCan } from "react-icons/fa6";
import images from "../../../../../assets/images";

const CartTooltip = () => {
  
  return (
    <div className="flex flex-col p-1 text-black">
      <h1 className="py-2 font-semibold">New Products Added</h1>
      <div>
        <div className="flex items-center justify-center gap-4 py-6 ">
          <div className="flex">
            <img src={images.shirt1} alt="" className="max-h-16 px-2" />
            <div>
              <h2 className="text-base">shirt1shirt1shirt1shirt1shirt1shi</h2>
              <p className="font-semibold text-red-600">$3,200</p>
            </div>
          </div>
          <span>
            <FaRegTrashCan className="cursor-pointer text-base" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default CartTooltip;
