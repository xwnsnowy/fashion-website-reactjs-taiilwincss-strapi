import images from "../../../assets/images";

const ListProducts = () => {
  return (
    <div className="my-5 flex-1">
      <span>Home / Men</span>
      <h1>Mens Sweaters - Cashmere, Cardigans & Crewnecks</h1>

      <div className="grid grid-cols-3 gap-10">
        <div>
          <img src={images.shirt1} alt="" />
          <div className="flex justify-between">
            <h4>The No-Sweat Sweater | Uniform</h4>
            <h4>$88</h4>
          </div>
          <p>Heathered Ash</p>
        </div>
        <div>
          <img src={images.shirt1} alt="" />
          <div className="flex justify-between">
            <h4>The No-Sweat Sweater | Uniform</h4>
            <h4>$88</h4>
          </div>
          <p>Heathered Ash</p>
        </div>
        <div>
          <img src={images.shirt1} alt="" />
          <div className="flex justify-between">
            <h4>The No-Sweat Sweater | Uniform</h4>
            <h4>$88</h4>
          </div>
          <p>Heathered Ash</p>
        </div>
      </div>
    </div>
  );
};

export default ListProducts;
