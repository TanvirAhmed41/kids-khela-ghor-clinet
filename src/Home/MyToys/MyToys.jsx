import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import SingleMyToys from "./SingleMyToys";

const MyToys = () => {
    const {user} = useContext(AuthContext)
    const [animalToys,setAnimalToys] = useState([])
    console.log(animalToys)
    const url = `http://localhost:5000/allToys?email=${user?.email}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setAnimalToys(data);
            })
    }, [url]);

    const handleDelete = id => {
        const proceed = confirm('Are You sure you want to delete');
        if (proceed) {
            fetch(`http://localhost:5000/allToys/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert('deleted successful');
                        const remaining = animalToys.filter(toys => toys._id !== id);
                        setAnimalToys(remaining);
                    }
                })
        }
    }


    return (
        <div>
            <table className="table table-compact w-full">
          <thead >
            <tr className="py-5">
              <th className="py-5">Name</th>
              <th>Seller </th>
              <th>Sub Category</th>
              <th>Price</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody className="py-5">
            
                {
                    animalToys &&
                    animalToys.map((toy) =><SingleMyToys key={toy._id} handleDelete={handleDelete} toy={toy}></SingleMyToys>)
                }
          </tbody>
        </table>
        </div>
    );
};
export default MyToys;