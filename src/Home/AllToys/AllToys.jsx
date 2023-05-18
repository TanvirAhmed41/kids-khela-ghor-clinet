import { useLoaderData } from "react-router-dom";


const AllToys = () => {
    const animalToys = useLoaderData();
    console.log(animalToys);
    return (
        <div>
            <h2>this is all page </h2>
        </div>
    );
};

export default AllToys;