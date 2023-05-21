
const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url("https://media.istockphoto.com/id/1193569086/photo/plastic-zoo-animal-toys.jpg?s=612x612&w=0&k=20&c=F5aRwUMXqI6E6hjLzL_usxshKubUNH98J1IUtVyhuQs=")` }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="w-50 ">
      <h1 className="mb-5 text-5xl font-bold w-full"> <span className="font-bolder">Wildly Fun:</span> <br /><span className="text-lime-500">EXPLORING ANIMAL TOYS</span></h1>
      <p className="mb-5 text-center w-3/4 mx-auto text-2xl">Welcome to Wildly Fun, <br /> the ultimate destination for animal toy enthusiasts! Our website offers a delightful collection of animal toys, ranging from cuddly plush companions to interactive figures that bring creatures to life.</p>
      <button className="btn btn-primary">Explore Now</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;