import images from "../../../assets/images";

const Recommended = () => {
  return (
    <div className="container mb-14 mt-24">
      <h2 className="mb-6 text-xl font-bold uppercase">recommended for you</h2>
      <div className="grid gap-10 sm:grid-cols-2 xl:grid-cols-4">
        <div>
          <img src={images.shirt1} alt="" />
          <h3 className="text-base font-bold uppercase">Balenciaga</h3>
          <p className="font-normal">Turtleneck long dress</p>
          <p className="mt-8 font-bold">$3,200</p>
        </div>
        <div>
          <img src={images.shirt1} alt="" />
          <h3 className="text-base font-bold uppercase">Balenciaga</h3>
          <p className="font-normal">Turtleneck long dress</p>
          <p className="mt-8 font-bold">$3,200</p>
        </div>
        <div>
          <img src={images.shirt1} alt="" />
          <h3 className="text-base font-bold uppercase">Balenciaga</h3>
          <p className="font-normal">Turtleneck long dress</p>
          <p className="mt-8 font-bold">$3,200</p>
        </div>
        <div>
          <img src={images.shirt1} alt="" />
          <h3 className="text-base font-bold uppercase">Balenciaga</h3>
          <p className="font-normal">Turtleneck long dress</p>
          <p className="mt-8 font-bold">$3,200</p>
        </div>
      </div>
    </div>
  );
};

export default Recommended;
