import { useLoaderData } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Update = () => {
  const loadingData = useLoaderData();
  const {_id} =loadingData

  console.log(loadingData);
  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;

    const price = form.price.value;
    const quantity = form.quantity.value;
    const description = form.details.value;

    const toy = {

      price,
      quantity,
      description,
    };
    console.log(toy);

    fetch(`https://kids-khelaghor-server.vercel.app/toys/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(toy),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
    });
};
const diffToast =()=>{
    toast("Update Done!");
}
  return (
    <div className="bg-white py-5">
        <h1 className="text-center text-5xl text-slate-700 p-5">
        <span className="lg:mr-6">U P A D E</span>
        <span className="lg:mr-6">T O Y</span>N O W
      </h1>
      <form onSubmit={handleUpdate} className="grid grid-cols-2 gap-5 ml-32 py-5">
        <input
          className="p-3 w-2/3  bg-green-200 rounded-md text-black font-semibold"
          type="number"
          name="price"
          placeholder="price"
          defaultValue={loadingData.price}
        />

        <input
          className="p-3 w-2/3  bg-green-200 rounded-md text-black font-semibold"
          type="number"
          name="quantity"
          defaultValue={loadingData.quantity}
        />
        <input
          className="p-3 w-2/3  bg-green-200 rounded-md text-black font-semibold"
          type="text"
          name="details"
          defaultValue={loadingData.description}
        />
        <div>
            <button onClick={diffToast}
            
          className="p-3 w-2/3  bg-pink-400 rounded-md text-black font-semibold"
          type="submit"
          >
            Update Toy
            </button>
        </div>
        <ToastContainer />
      </form>
    </div>
  );
};

export default Update;
