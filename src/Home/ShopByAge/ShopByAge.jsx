const ShopByAge = () => {
  return (
    <div className=" bg-green-800">
      <div className="p-10">
        <h1 className="text-center font-bold mb-3 text-5xl">
          <span className="lg:mr-5">S H O P </span>
          <span className="lg:mr-5">BY</span> A G E
        </h1>
        <p className="text-center mb-5">
          WE HAVE PRODUCTS FOR ALL AGES. OUR ASSISTANTS ALWAYS HELP YOU TO DO
          RIGHT CHOICE.
        </p>
      </div>
      <div className="grid lg:grid-cols-3 gap-5 px-10">
        <div className="mb-10">
        <img
          className="rounded-full w-full  "
          src="https://whiterabbit.axiomthemes.com/wp-content/uploads/2016/04/3-2-600x700.jpg"
          alt=""
        />
        <p className="text-center text-2xl font-bold mt-5">8 TO 13  YEARS</p>
        </div>
        <div  className="mb-10">
        <img
          className="rounded-full w-full"
          src="https://whiterabbit.axiomthemes.com/wp-content/uploads/2016/04/1-3-600x700.jpg"
          alt=""
        />
        <p className="text-center text-2xl font-bold mt-5">5 TO 7 YEARS</p>
        </div>
        <div  className="mb-10">
        <img
          className="rounded-full w-full"
          src="https://whiterabbit.axiomthemes.com/wp-content/uploads/2016/04/2-3-600x700.jpg"
          alt=""
        />
        <p className="text-center text-2xl font-bold mt-5">2 TO 4 YEARS</p>
        </div>
      </div>
    </div>
  );
};

export default ShopByAge;
