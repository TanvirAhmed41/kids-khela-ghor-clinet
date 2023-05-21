import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import SingleMyToys from "./SingleMyToys";
import Swal from "sweetalert2";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [animalToys, setAnimalToys] = useState([]);
  console.log(animalToys);
  const url = `https://kids-khelaghor-server.vercel.app/allToys?email=${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setAnimalToys(data);
      });
  }, [url]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://kids-khelaghor-server.vercel.app/allToys/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              const remaining = animalToys.filter((toys) => toys._id !== id);
              setAnimalToys(remaining);
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
  };

  return (
    <div>
      <table className="table table-compact w-full ">
        <thead>
          <tr>
            <th>Photo</th>
            <th>Name</th>
            <th>Seller Name </th>
            <th>Seller Email </th>
            <th>Sub Category</th>
            <th>Price</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody className="py-5">
          {animalToys &&
            animalToys.map((toy) => (
              <SingleMyToys
                key={toy._id}
                handleDelete={handleDelete}
                toy={toy}
              ></SingleMyToys>
            ))}
        </tbody>
      </table>
    </div>
  );
};
export default MyToys;
