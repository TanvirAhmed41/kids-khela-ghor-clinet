import { useContext} from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const AddAToy = () => {
   
  const { user } = useContext(AuthContext);
//   const [disabled,setDisabled]=useState(false)
  const handlePost = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.toyName.value;
    const pictureURL = form.toyPhoto.value;
    const sellerName = form.name.value;
    const sellerEmail = form.email.value;
    const subCategory = form.subCategory.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const quantity = form.quantity.value;
    const description = form.details.value;

    const toy = {
      name,
      pictureURL,
      sellerName,
      sellerEmail,
      subCategory,
      price,
      rating,
      quantity,
      description,
    };
    console.log(toy);

    fetch("https://kids-khelaghor-server.vercel.app/addtoys", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(toy),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          // Swal.fire(
          //     'Successfully add a Toy'
          //   )
        //   alert("successful");
       
        }
        
      });
  };
  const diffToast =()=>{
    toast("Added Successfully!");
}
  return (
    <div className="py-5 bg-slate-50">
      <h1 className="text-center text-5xl text-slate-700 p-5">
        <span className="lg:mr-6">A D D</span>
        <span className="lg:mr-6">T O Y</span>N O W
      </h1>
      <form onSubmit={handlePost} className="grid grid-cols-2 gap-5 ml-32 py-5">
        <input
          className="p-3  w-2/3 bg-green-200 rounded-md text-black font-semibold"
          type="text"
          name="toyName"
          placeholder="Toy Name"
        />
        <input
          className="p-3 w-2/3  bg-green-200 rounded-md text-black font-semibold"
          type="url"
          name="toyPhoto"
          placeholder="Toy Picture"
        />
        <input
          className="p-3 w-2/3  bg-green-200 rounded-md text-black font-semibold"
          type="text"
          value={user?.displayName}
          name="name"
          placeholder="Seller Name"
        />
        <input
          className="p-3 w-2/3  bg-green-200 rounded-md text-black font-semibold"
          type="email"
          value={user?.email}
          name="email"
          placeholder="Seller Email"
        />
        <select className="select w-full max-w-xs" name="subCategory">
          <option value="WildToys">WildToys</option>
          <option value="DomesticToys">DomesticToys</option>
          <option value="PetToys">PetToys</option>
          
        </select>
        <input
          className="p-3 w-2/3  bg-green-200 rounded-md text-black font-semibold"
          type="number"
          name="price"
          placeholder="Price"
        />
        <input
          className="p-3 w-2/3  bg-green-200 rounded-md text-black font-semibold"
          type="number"
          name="rating"
          placeholder="Rating"
        />
        <input
          className="p-3 w-2/3  bg-green-200 rounded-md text-black font-semibold"
          type="number"
          name="quantity"
          placeholder="Available quantity"
        />
        <input
          className="p-3 w-2/3  bg-green-200 rounded-md text-black font-semibold"
          type="text"
          name="details"
          placeholder="Detail description"
        />
       <div>
       <button onClick={diffToast}
        
        className="p-3 w-2/3  bg-pink-400 rounded-md text-black font-semibold"
        type="submit"
        
      >
          Add Toy
      </button>
        <ToastContainer />
       </div>
      </form>
    </div>
  );
};

export default AddAToy;
