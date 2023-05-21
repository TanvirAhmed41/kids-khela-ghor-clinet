const NewCollection = () => {
  return (
    <div className="bg-white rounded-lg py-10">
      <div className="py-5">
        <h1 className="text-center text-5xl font-bold mb-3 text-black">
          <span className="lg:mr-5">N E W</span> C O L L E C T I O N
        </h1>
        <p className="text-center text-blue-500">
          Customer's favorite products this week. What's so special?{" "}
          <span className="text-red-600 text-2xl font-bold italic">
            Check it out!
          </span>
        </p>
      </div>
      <div className="grid lg:grid-cols-3 gap-3 p-10">
      <div className="card   shadow-xl">
        <figure>
          <img className="w-96"
            src="https://cdn.shopify.com/s/files/1/2281/5369/products/lion-128823_700x700.jpg?v=1610741722"
            alt="Shoes"
          />
        </figure>
        <div className="card-body bg-white">
          <h2 className="card-title font-bold text-amber-800 text-3xl">
            LIONS!
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p className="font-bold text-xl text-lime-700">Price: $100</p>
          
        </div>
      </div>
      <div className="card   shadow-xl">
        <figure>
          <img className=""
            src="https://cdn.shopify.com/s/files/1/2281/5369/products/gray-wolf-821656_700x700.jpg?v=1610734409"
            alt="Shoes"
          />
        </figure>
        <div className="card-body bg-white">
          <h2 className="card-title font-bold text-slate-700 text-3xl">
            GRAY WOLF!
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p className="font-bold text-xl text-pink-700">Price: $350</p>
          
        </div>
      </div>
      <div className="card  shadow-xl">
        <figure>
          <img className="w-96"
            src="https://cdn.shopify.com/s/files/1/2281/5369/products/hyena-305486_700x700.jpg?v=1610739314"
            alt="Shoes"
          />
        </figure>
        <div className="card-body bg-white">
          <h2 className="card-title font-bold text-yellow-400 text-3xl">
            HYENA!
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p className="font-bold text-xl text-blue-700">Price: $200</p>
          
        </div>
      </div>
      </div>
    </div>
  );
};

export default NewCollection;
