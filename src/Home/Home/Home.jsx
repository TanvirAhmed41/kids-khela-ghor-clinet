
import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import NewCollection from "../NewCollection/NewCollection";
import ShopByAge from "../ShopByAge/ShopByAge";


const Home = () => {
    return (
        <div>
          <Banner></Banner>
          <ShopByAge></ShopByAge>
          <NewCollection></NewCollection>
          <Gallery></Gallery>
        </div>
    );
};

export default Home;