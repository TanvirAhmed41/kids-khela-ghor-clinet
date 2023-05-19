

const AddAToy = () => {
    const handlePost = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
    }
    return (
        <div className="py-5">
          <form  className="grid grid-cols-2 gap-5 ml-32">
                <input className="p-3 w-2/3 bg-green-200 rounded-md text-black" type="text" name="toyName" placeholder="Toy Name" />
                <input className="p-3 w-2/3  bg-green-200 rounded-md" type="url" name="toyPhoto" placeholder="Toy Picture" />
                <input className="p-3 w-2/3  bg-green-200 rounded-md" type="text" value=""name="name" placeholder="Seller Name" />
                <input className="p-3 w-2/3  bg-green-200 rounded-md" type="email" value=""name="email" placeholder="Seller Email" />
                <input className="p-3 w-2/3  bg-green-200 rounded-md" type="text" name="subCategory" placeholder="Sub Category" />
                <input className="p-3 w-2/3  bg-green-200 rounded-md" type="number" name="price" placeholder="Price" />
                <input className="p-3 w-2/3  bg-green-200 rounded-md" type="number" name="rating" placeholder="Rating" />
                <input className="p-3 w-2/3  bg-green-200 rounded-md" type="number" name="quantity" placeholder="Available quantity" />
                <input className="p-3 w-2/3  bg-green-200 rounded-md" type="text" name="details" placeholder="Detail description" />
                <input className="p-3 w-2/3  bg-green-200 rounded-md" type="submit" value="Add Toy" />
            </form>
        </div>
    );
};

export default AddAToy;