import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Link } from "react-router-dom";

const CategoryCard = ({ animal }) => {
  console.log(animal);
  const {user} = useContext(AuthContext)
  const { _id,pictureURL, name, price, rating } = animal;
  const handleNotify =()=>{
    if (!user){
        alert ("You have to log in first to view details")
    }
  }
  return (
    <div className="py-5">
      <div className="card  bg-white shadow-xl">
        <div>
          <figure className="px-10 pt-10">
            <img src={pictureURL} alt="" className="rounded-xl w-64 h-48" />
          </figure>
        </div>
        <div className="card-body items-center text-center ">
          <h2 className="card-title font-bold text-red-600 text-3xl">{name}</h2>
          <p className="text-black text-xl font-bold">Price: ${price}</p>
          <p className="text-black text-xl font-bold">Rating:{rating}</p>

          <div onClick={handleNotify} className="card-actions mt-auto">
            <Link to={`/viewdetails/${_id}`}><button className="btn btn-primary">View Details</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
