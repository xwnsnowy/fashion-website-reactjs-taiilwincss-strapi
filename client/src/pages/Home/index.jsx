import Banner from "./Banner/Banner";
import BannerTop from "./BannerTop";
import Hero from "./Hero";
import Products from "./Products";
import Testimonials from "./Testimonials";
import TopProducts from "./TopProducts";

const Home = () => {
  return (
    <>
      <BannerTop />
      <Hero />
      <Products />
      <TopProducts />
      <Banner />
      <Testimonials />
    </>
  );
};

export default Home;
