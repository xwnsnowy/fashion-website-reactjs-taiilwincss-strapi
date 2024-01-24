const BannerTop = () => {
  return (
    <section className="mb-12 flex items-center justify-center bg-red-800 p-20 text-white">
      <div>
        <h2 className="text-5xl">
          New Markdowns Just Added:
          <span className="font-bold"> Now up to 70% Off</span>
        </h2>
        <div className="mt-10 flex items-center justify-center gap-5">
          <div className="cursor-pointer">
            <span className="bg-white px-16 py-2 uppercase text-black hover:bg-black hover:text-white">
              shop men
            </span>
          </div>
          <div className="cursor-pointer">
            <span className="bg-white px-16 py-2 uppercase text-black hover:bg-black hover:text-white">
              shop women
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerTop;
