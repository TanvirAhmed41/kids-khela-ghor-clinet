const SingleMyToys = ({ toy, handleDelete }) => {
  const {
    name,
    rating,
    pictureURL,
    description,
    price,
    sellerEmail,
    sellerName,
    subCategory,
    _id,
  } = toy;
  return (
    <tr>
      <th className="text-center ps-5">
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
      <th>{name}</th> 
      <th>{sellerName}</th>
      <th>{subCategory}</th>
      <th>{price}</th>
     <div  className="flex justify-center items-center w-1/2">
     <th>
        <button className="btn btn-success w-22">Edit</button>
      </th>
      <th>
        <button className="btn btn-success w-22">View Details</button>
      </th>
     </div>
    </tr>
  );
};

export default SingleMyToys;
