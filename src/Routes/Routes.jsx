import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Home/Home/Home";
import AllToys from "../Home/AllToys/AllToys";
import LogIn from "../Shared/LogIn";
import Registration from "../Shared/Registration";
import ErrorPage from "../Shared/ErrorPage";
import Blog from "../Shared/Blog";
import MyToys from "../Home/MyToys/MyToys";
import AddAToy from "../Home/AddAToy/AddAToy";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'alltoys',
            element:<AllToys></AllToys>,
            loader:()=>fetch('http://localhost:5000/allToys')
        },
        {
            path:'mytoys',
            element:<MyToys></MyToys>,
           
        },
        {
            path:'addatoy',
            element:<AddAToy></AddAToy>,
           
        },
        {
          path:'login',
          element:<LogIn></LogIn>
        },
        {
          path: 'signup',
          element:<Registration></Registration>
        },
        {
          path: 'blog',
          element:<Blog></Blog>
        }
      ]
      
    },
  ]);

  export default router