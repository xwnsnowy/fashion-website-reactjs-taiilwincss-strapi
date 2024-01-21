import Banner from "./Banner/Banner";
import Hero from "./Hero";
import Products from "./Products";
import Testimonials from "./Testimonials";
import TopProducts from "./TopProducts";

const Home = () => {
  return (
    <>
      <Hero />
      <Products />
      <TopProducts />
      <Banner />
      <Testimonials />
    </>
  );
};

export default Home;
