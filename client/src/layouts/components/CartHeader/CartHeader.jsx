import { Link } from "react-router-dom";

const CartHeader = () => {
  return (
    <header className="bg-[#f2f2f2]">
      <div className=" flex items-center justify-center py-2">
        <Link to="/" className="text-sm underline">
          Extended Returns | Free Gift Messaging
        </Link>
      </div>
      <div className="flex items-center justify-center bg-white py-4">
        <Link to="/" className="flex gap-2 text-2xl font-bold sm:text-3xl">
          <span className="text-nowrap font-['Jura'] text-2xl font-bold uppercase tracking-widest  text-neutral-800 ">
            COSMIC FASHION
          </span>
        </Link>
      </div>
    </header>
  );
};

export default CartHeader;
