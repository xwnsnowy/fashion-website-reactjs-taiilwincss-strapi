import NavbarBottom from "./NavbarBottom";
import NavbarTop from "./NavbarTop";
import RotatingBanner from "./RotatingBanner";

const DefaultHeader = () => {
  return (
    <header className="webkit-sticky sticky left-0 top-0 z-40 w-full bg-white  text-black shadow-xl duration-200">
      <RotatingBanner />
      <NavbarTop />
      <hr />
      <NavbarBottom />
    </header>
  );
};

export default DefaultHeader;
