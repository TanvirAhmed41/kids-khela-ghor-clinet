import { useEffect, useState } from "react";
import AnimalTable from "../AnimalTable/AnimalTable";


const AllToys = () => {
  const [animalToys,setAnimalToys] = useState([]);
  console.log(animalToys);
  useEffect (()=>{
    fetch('http://localhost:5000/allToys')
    .then(res => res.json())
    .then(data => setAnimalToys(data))
  },[])

  return (
    <div>
      <div className="overflow-x-auto">
        <div className="flex justify-center items-center">
            <input type="search" placeholder="search" className="w-1/2 p-3 my-5 rounded " name="" id="" />
            <button className="btn btn-primary">Search</button>
        </div>
        <table className="table table-compact w-full">
          <thead>
            <tr>
              <th>Name</th>
              <th>Seller </th>
              <th>Sub Category</th>
              <th>Price</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
                {
                    animalToys.map((toy) =><AnimalTable key={toy._id} toy={toy}></AnimalTable>)
                }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllToys;
