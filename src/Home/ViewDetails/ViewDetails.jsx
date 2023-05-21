import { useLoaderData } from "react-router-dom";

const ViewDetails = () => {
  const details = useLoaderData();
  console.log(details);
  const {
    name,
    rating,
    pictureURL,
    description,
    price,
    sellerEmail,
    sellerName,
    quantity

  } = details;
  return (
    <div>
        <h1 className="text-center text-5xl text-blue-500 bg-slate-300 rounded-lg p-5">
        <span className="lg:mr-6">S I N G L E</span>
        <span className="lg:mr-6">T O Y</span>D E T A I L S
      </h1>
      <div className="card grid grid-cols-2 bg-white  items-center shadow-xl">
        <div>
        <figure>
          <img
            className="w-64 rounded-lg"
            src={pictureURL}
            alt="Movie"
          />
        </figure>
        </div>
        <div className="card-body">
          <h2 className="card-title text-black font-semibold text-xl ">Name: {name}</h2>
          <h2 className="card-title text-black font-semibold text-xl ">Seller Name: {sellerName}</h2>
          <h2 className="card-title text-black font-semibold text-xl ">Seller Email: {sellerEmail}</h2>
          <h2 className="card-title text-black font-semibold text-xl ">Price:  ${price}</h2>
          <h2 className="card-title text-black font-semibold text-xl ">Ratings: {rating}</h2>
          <h2 className="card-title text-black font-semibold text-xl ">Available Quantity: {quantity}</h2>
          <p className="text-blue-800 font-semibold text-3xl italic">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
