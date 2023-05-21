import { useEffect, useState } from "react";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import CategoryCard from "./CategoryCard";

const Categories = () => {
    const [data,setData] =useState([]);
    const [category,setCategory] = useState("WildToys")

    useEffect(() => {
        fetch(`http://localhost:5000/categories?category=${category}`)
          .then((res) => res.json())
          .then((data) => setData(data));
      }, [category]);
  return (
    <div className="px-10 text-center bg-gray-700">
        <h1 className="text-center font-bold text-4xl py-5">Shop By Category</h1>
      <Tabs>
        <TabList>
          <Tab onClick={()=>setCategory("WildToys")}>Wild Toys</Tab>
          <Tab onClick={()=>setCategory("DomesticToys")}>Domestic Toys </Tab>
          <Tab onClick={()=>setCategory("PetToys")}>Pet Toys</Tab>
          
        </TabList>

        <TabPanel>
          <div className="grid lg:grid-cols-3">
            {
                data.map((rc)=><CategoryCard animal={rc} key={rc._id}></CategoryCard>)
            }
          </div>
        </TabPanel>
        <TabPanel>
        <div className="grid lg:grid-cols-3">
            {
                data.map((rc)=><CategoryCard animal={rc} key={rc._id}></CategoryCard>)
            }
          </div>
        </TabPanel>
        <TabPanel>
        <div className="grid lg:grid-cols-3">
            {
                data.map((rc)=><CategoryCard animal={rc} key={rc._id}></CategoryCard>)
            }
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Categories;
