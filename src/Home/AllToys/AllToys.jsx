import { useEffect, useState } from "react";
import AnimalTable from "../AnimalTable/AnimalTable";


const AllToys = () => {
  const [animalToys, setAnimalToys] = useState([]);
  const [searchAnimal, setSearchAnimal] = useState([]);
  console.log(animalToys);

  useEffect(() => {
    fetch("https://kids-khelaghor-server.vercel.app/allToys")
      .then((res) => res.json())
      .then((data) => setAnimalToys(data));
  }, []);

  const handleSearch = () => {
    fetch(`https://kids-khelaghor-server.vercel.app/toySearchByName/${searchAnimal}`)
      .then((res) => res.json())
      .then((data) => {
        setAnimalToys(data);
      });
  };

  return (
    <div>
      <div className="overflow-x-auto">
        <div className="flex justify-center items-center">
          <input
            onChange={(event) => setSearchAnimal(event.target.value)}
            type="search"
            placeholder="search"
            className="w-1/2 p-3 my-5 rounded bg-white "
            name=""
            id=""
          />
          <button onClick={handleSearch} className="btn btn-primary">
            Search
          </button>
        </div>
        <table className="table w-full">
          <thead className="">
            <tr className=" py-10">
              <th className="py-5">Name</th>
              <th>Seller </th>
              <th>Sub Category</th>
              <th>Price</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody className="py-5">
            {animalToys.map((toy) => (
              <AnimalTable key={toy._id} toy={toy}></AnimalTable>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllToys;
