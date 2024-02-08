import CheckoutLeft from "./CheckoutLeft/CheckoutLeft";
import CheckoutRight from "./CheckoutRight/CheckoutRight";

const Cart = () => {

  return (
    <div className="bg-[#f2f2f2] p-4">
      <div className="container max-w-[1200px] px-0">
        <div className="flex gap-4">
          {/* Checkout Left */}
          <CheckoutLeft />
          {/* Checkout Right */}
          <CheckoutRight />
        </div>
      </div>
    </div>
  );
};

export default Cart;
