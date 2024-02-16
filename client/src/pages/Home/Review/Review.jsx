import Slider from "react-slick";

const Review = () => {
  const ReviewData = [
    {
      id: 1,
      name: "Victor",
      text: "Great selection of trendy clothes! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio.",
      img: "https://picsum.photos/101/101",
    },
    {
      id: 2,
      name: "Satya Nadella",
      text: "Amazing quality and fast delivery! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio.",
      img: "https://picsum.photos/102/102",
    },
    {
      id: 3,
      name: "Virat Kohli",
      text: "Love the variety of styles available! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio.",
      img: "https://picsum.photos/104/104",
    },
    {
      id: 5,
      name: "Sachin Tendulkar",
      text: "Best place to shop for fashion! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio.",
      img: "https://picsum.photos/103/103",
    },
  ];

  let settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-10 ">
      <div className="container rounded-3xl dark:bg-[#18191a]">
        {/* header section */}
        <div className="mx-auto flex max-w-[600px] flex-col gap-1 py-10 text-center ">
          <p data-aos="fade-up" className="text-sm text-primary">
            See what our customers are saying
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold dark:text-white">
            Reviews
          </h1>
          <p
            data-aos="fade-up"
            className="text-sm text-gray-700 dark:text-gray-400"
          >
            Discover what customers think about our latest fashion collections
            and shopping experience. Here's what they have to say:
          </p>
        </div>

        {/* Review cards */}
        <div data-aos="zoom-in">
          <Slider {...settings}>
            {ReviewData.map((data, index) => (
              <div className="my-6" key={index}>
                <div className="relative mx-4 flex flex-col gap-4 rounded-xl bg-primary/10 px-6 py-8 shadow-xl dark:bg-gray-800">
                  <div className="mb-4">
                    <img
                      src={data.img}
                      alt="ReviewCard"
                      className="h-20 w-20 rounded-full"
                    />
                  </div>
                  <div className="flex flex-col items-center gap-4">
                    <div className="space-y-3">
                      <p className="text-xs text-gray-500">{data.text}</p>
                      <h1 className="dark:text-light text-xl font-bold text-black/90 dark:text-[#7DFFAF]">
                        {data.name}
                      </h1>
                    </div>
                  </div>
                  <p className="absolute right-0 top-0 font-serif text-9xl text-black/20">
                    ,,
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Review;
