const CategoryCard = ({ animal }) => {
  console.log(animal);
  const { pictureURL, name, price, rating } = animal;
  return (
    <div className="py-5">
      <div className="card bg-white shadow-xl">
        <div>
        <figure className="px-10 pt-10">
          <img
            src={pictureURL}
            alt=""
            className="rounded-xl w-64 h-48"
          />
        </figure>
        </div>
        <div className="card-body items-center text-center ">
          <h2 className="card-title font-bold text-red-600 text-3xl">{name}</h2>
          <p className="text-black text-xl font-bold">Price: ${price}</p>
          <p className="text-black text-xl font-bold">Rating:{rating}</p>
          
        <div className="card-actions mt-auto">
            <button className="btn btn-primary">View Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
