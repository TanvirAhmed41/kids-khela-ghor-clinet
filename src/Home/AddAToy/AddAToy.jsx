import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";


const AddAToy = () => {
    const {user} = useContext(AuthContext)
    const handlePost = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.toyName.value;
        const pictureURL = form.toyPhoto.value;
        const sellerName = form.name.value;
        const sellerEmail = form.email.value;
        const  subCategory = form.subCategory.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const quantity = form.quantity.value;
        const description = form.details.value;
        
        const toy = {name,pictureURL,sellerName,sellerEmail,subCategory,price,rating,quantity,description}
        console.log(toy);

        fetch('http://localhost:5000/addtoys', {
            method: 'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(toy)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                // Swal.fire(
                //     'Successfully add a Toy'
                //   )
                alert("successful")
                  
            }
        })
        
    }
    return (
        <div className="py-5">
          <form onSubmit={handlePost}  className="grid grid-cols-2 gap-5 ml-32">
                <input className="p-3 w-2/3 bg-green-200 rounded-md text-black font-semibold" type="text" name="toyName" placeholder="Toy Name" />
                <input className="p-3 w-2/3  bg-green-200 rounded-md text-black font-semibold" type="url" name="toyPhoto" placeholder="Toy Picture" />
                <input className="p-3 w-2/3  bg-green-200 rounded-md text-black font-semibold" type="text" value={user?.displayName}name="name" placeholder="Seller Name" />
                <input className="p-3 w-2/3  bg-green-200 rounded-md text-black font-semibold" type="email" value={user?.email} name="email" placeholder="Seller Email" />
                <input className="p-3 w-2/3  bg-green-200 rounded-md text-black font-semibold" type="text" name="subCategory" placeholder="Sub Category" />
                <input className="p-3 w-2/3  bg-green-200 rounded-md text-black font-semibold" type="number" name="price" placeholder="Price" />
                <input className="p-3 w-2/3  bg-green-200 rounded-md text-black font-semibold" type="number" name="rating" placeholder="Rating" />
                <input className="p-3 w-2/3  bg-green-200 rounded-md text-black font-semibold" type="number" name="quantity" placeholder="Available quantity" />
                <input className="p-3 w-2/3  bg-green-200 rounded-md text-black font-semibold" type="text" name="details" placeholder="Detail description" />
                <input className="p-3 w-2/3  bg-pink-400 rounded-md text-black font-semibold" type="submit" value="Add Toy" />
            </form>
        </div>
    );
};

export default AddAToy;