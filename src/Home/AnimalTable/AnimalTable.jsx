import { Link } from "react-router-dom";
const AnimalTable = ({ toy }) => {
  const {
    name, 
    price,
    sellerName,
    subCategory,
    _id,
  } = toy;

  return (
    <tr>
      <th>{name}</th>
      <th>{sellerName}</th>
      <th>{subCategory}</th>
      <th>{price}</th>
      <th><Link to={`/viewdetails/${_id}`}><button className="btn btn-primary">View Details</button></Link></th>
    </tr>
  );
};

export default AnimalTable;
