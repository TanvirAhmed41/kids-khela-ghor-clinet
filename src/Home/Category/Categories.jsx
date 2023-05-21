import { useEffect, useState } from "react";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import CategoryCard from "./CategoryCard";

const Categories = () => {
    const [data,setData] =useState([]);
    const [category,setCategory] = useState("WildToys")

    useEffect(() => {
        fetch(`https://kids-khelaghor-server.vercel.app/categories?category=${category}`)
          .then((res) => res.json())
          .then((data) => setData(data));
      }, [category]);
  return (
    <div className="p-10 text-center bg-emerald-100">
        <h1 className="text-center font-bold text-5xl text-lime-600 py-5"><span className="lg:mr-5">S H O P</span><span className="lg:mr-5"> B Y</span>   C A T E G O R Y</h1>
      <Tabs>
        <TabList className="p-3">
          <Tab onClick={()=>setCategory("WildToys")}> <span className="font-bold text-xl text-red-500">Wild Toys</span> </Tab>
          <Tab onClick={()=>setCategory("DomesticToys")}> <span className="font-bold text-xl text-sky-500">Domestic Toys</span> </Tab>
          <Tab onClick={()=>setCategory("PetToys")}> <span className="font-bold text-xl text-green-500">Pet Toys</span> </Tab>
          
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
