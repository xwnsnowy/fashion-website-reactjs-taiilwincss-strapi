import images from "../../../assets/images";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Hero = () => {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  const ImageList = [
    {
      id: 1,
      img: images.slider1,
    },
    {
      id: 2,
      img: images.slider2,
    },
    {
      id: 3,
      img: images.slider3,
    },
  ];

  return (
    <div className="relative flex max-h-[88vh] items-center justify-center overflow-hidden bg-gray-100 duration-200 dark:bg-gray-950 dark:text-white xl:min-h-[800px]">
      <div className="w-full pb-8 sm:pb-0">
        <Slider {...settings}>
          {ImageList.map((data) => (
            <div
              key={data.id}
              className="relative outline-none focus:outline-none"
            >
              <img src={data.img} alt="" />
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
                <h1 className="text-4xl font-bold text-white">
                  Mens New Arrivals
                </h1>
                <h2>Make getting dressed simple with our new</h2>
                <h2>Stretch Twill 5-Pocket Pant and more</h2>
                <span className="uppercase">shop now</span>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
