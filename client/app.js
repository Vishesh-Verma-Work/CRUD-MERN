import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Error from "./src/components/Error";
import ShowAll from "./src/components/ShowAll";
import Create from "./src/components/Create";
import Footer from "./src/components/Footer";
import Home from "./src/components/Home";

import {createBrowserRouter, RouterProvider, Outlet,Link } from "react-router-dom";

const Main = ()=>{
    return(
        <>
        <Header/>
        <Outlet/>
        <Footer/>
        </>
    )
};

const appRouter = createBrowserRouter([
    {
      path : "/",
      element : <Main/>,
      errorElement : <Error/>,
      children : [
          {
            path : "/",
            element : <Home/>,
            errorElement : <Error/>
          },
          {
            path : "/all",
            element : <ShowAll/>,
            errorElement : <Error/>
          },
        {
          path : "/create",
          element : <Create/>,
          errorElement : <Error/>
        }
      ]
    }
  ]);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);