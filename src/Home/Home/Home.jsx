
import Banner from "../Banner/Banner";
import Categories from "../Category/Categories";
import Gallery from "../Gallery/Gallery";
import NewCollection from "../NewCollection/NewCollection";
import ShopByAge from "../ShopByAge/ShopByAge";


const Home = () => {
    return (
        <div>
          <Banner></Banner>
          <Categories></Categories>
          <NewCollection></NewCollection>
          <ShopByAge></ShopByAge>
          <Gallery></Gallery>
        </div>
    );
};

export default Home;