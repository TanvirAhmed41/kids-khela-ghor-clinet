import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Home/Home/Home";
import AllToys from "../Home/AllToys/AllToys";
import LogIn from "../Shared/LogIn";
import Registration from "../Shared/Registration";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'allToys',
            element:<AllToys></AllToys>,
            loader:()=>fetch('http://localhost:5000/allToys')
        },
        {
          path:'login',
          element:<LogIn></LogIn>
        },
        {
          path: 'signup',
          element:<Registration></Registration>
        }
      ]
      
    },
  ]);

  export default router