import { Link } from "react-router-dom";
const SingleMyToys = ({ toy, handleDelete }) => {
  const {
    pictureURL,
    name,
    price,
    sellerName,
    sellerEmail,
    subCategory,
    _id,
  } = toy;

 
  return (
    <tr>
      <th>
        <img className="h-20 w-20 rounded-full" src={pictureURL} alt="" />
        </th> 
      <th>{name}</th> 
      <th>{sellerName}</th>
      <th>{sellerEmail}</th>
      <th>{subCategory}</th>
      <th>{price}</th>
     <div  className="flex justify-center items-center w-1/2">
     <th>
        <Link to={`/toys/${_id}`}>
          <button className="btn btn-success w-22">Edit</button>
          </Link>
      </th>
        
      <th>
      <label>
          <button
            onClick={() => handleDelete(_id)}
            className="btn btn-circle btn-outline hover:bg-green-200]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </label>
      </th>
     </div>
    </tr>
  );
};

export default SingleMyToys;
