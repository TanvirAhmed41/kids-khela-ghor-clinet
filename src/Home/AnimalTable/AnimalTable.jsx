const AnimalTable = ({ toy }) => {
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
      <th>{name}</th>
      <th>{sellerName}</th>
      <th>{subCategory}</th>
      <th>{price}</th>
      <th><button className="btn btn-primary">View Details</button></th>
    </tr>
  );
};

export default AnimalTable;
