const Gallery = () => {
  return (
    <div className=" bg-red-200">
        <div>
        <h1 className="text-center font-bold text-black text-5xl py-7 ">G A L L E R Y</h1>
        <p className="w-3/4 text-center mx-auto text-black">Step into our captivating animal gallery and immerse yourself in a visual feast of adorable toy creatures. Explore the diverse species on display, marvel at their beauty, and ignite your imagination with every click.</p>
        </div>
      <div className="card  grid grid-cols-1 md:grid-cols-3 bg-red-200 px-5 shadow-xl">
        <figure className="px-10 pt-10 w-96">
          <img
            src="https://static-01.daraz.com.bd/p/ecd847a662c012e6bcbb546700a9a4f7.jpg"
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <figure className="px-10 pt-10  w-96">
          <img
            src="https://static-01.daraz.com.bd/p/ff5ae3aa497876ac765da0f5f7da113f.jpg"
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <figure className="px-10 pt-10  w-96">
          <img
            src="https://ae01.alicdn.com/kf/H928e32aaf69c49738922cb432189249fw/Single-sell-Animal-World-Zoo-Model-Figure-Action-Toy-Set-Cartoon-Simulation-Animal-Lovely-Plastics-Collection.jpg_640x640.jpg"
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <figure className="px-10 pt-10  w-96">
          <img
            src="https://ae01.alicdn.com/kf/Hba42509c09e74ea5a8f691cb55c905c0f/Single-sell-Animal-World-Zoo-Model-Figure-Action-Toy-Set-Cartoon-Simulation-Animal-Lovely-Plastics-Collection.jpg"
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <figure className="px-10 pt-10  w-96">
          <img
            src="https://cdn11.bigcommerce.com/s-fa6invgjkj/images/stencil/1280x1280/products/160/7499/4pc-jumbo-safari-animal-toys-children-6__69504.1678276200.jpg?c=2"
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <figure className="px-10 pt-10  w-96">
          <img
            src="https://static-01.daraz.com.bd/p/fd451b276a280c8afc5a77b9a8c096c7.jpg"
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        
      </div>
    </div>
  );
};

export default Gallery;
