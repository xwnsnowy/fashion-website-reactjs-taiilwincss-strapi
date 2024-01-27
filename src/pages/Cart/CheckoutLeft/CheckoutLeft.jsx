import { Link } from "react-router-dom";

const CheckoutLeft = () => {
  return (
    <div className="flex flex-[2] flex-col gap-4">
      <div className="bg-white px-24 py-10">
        <div>
          <div className="flex gap-4">
            <div className="flex h-6 w-6 items-center justify-center rounded-2xl bg-black text-white">
              <span>1</span>
            </div>
            <div>
              <h4 className="font-semibold">Enter Your Email</h4>
              <span className="mr-2">Already have an account?</span>
              <span className="font-semibold underline">Log in</span>
            </div>
          </div>
          <div className="pl-10">
            <form action="">
              <input
                type="text"
                value="tienthanhcute2k2"
                className="my-4 w-full border-2 border-black px-4 py-2"
              />
              <p className="flex gap-1 text-sm font-normal text-[#737373]">
                <span>By providing your email, you agree to our</span>
                <Link to="" className="font-semibold underline">
                  Privacy Policy
                </Link>
                <span>and</span>
                <Link to="" className="font-semibold underline">
                  Terms of Service
                </Link>
              </p>
              <button className="mt-6 w-full bg-black py-2 text-center text-white">
                Continue To Shipping
              </button>
              <div className="mt-6 flex items-center">
                <input
                  type="checkbox"
                  name="join"
                  id="join"
                  className="mr-2 h-4 w-4"
                />
                <label htmlFor="join" className="text-sm">
                  Join our newsletter and receive 15% off your first full price
                  purchase.
                </label>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="bg-white px-24 py-10">
        <div>
          <div className="flex gap-4">
            <div className="flex h-6 w-6 items-center justify-center rounded-2xl bg-black text-white">
              <span>2</span>
            </div>
            <div>
              <h4 className="font-semibold">Shipping</h4>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white px-24 py-10">
        <div>
          <div className="flex gap-4">
            <div className="flex h-6 w-6 items-center justify-center rounded-2xl bg-black text-white">
              <span>3</span>
            </div>
            <div>
              <h4 className="font-semibold">Payment Method</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutLeft;
