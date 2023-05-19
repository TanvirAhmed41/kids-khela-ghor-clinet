import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

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
    }, [url])
    return (
        <div>
            
        </div>
    );
};

export default MyToys;