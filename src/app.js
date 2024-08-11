import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";

const AppLayout = () => {
   return (
      <div className="app">
         <Header />
         <Outlet />
      </div>
   )
}

const AppRouter = createBrowserRouter([
   {
      path:'/',
      element: <AppLayout/>,
      children:[
         {
            path:"/",
            element: <Body/>
         },
         {
            path: '/about',
            element: <About/>
         },
         {
            path: '/restaurants/:resId',
            element: <RestaurantMenu/>
         },
         {
            path:'/contact',
            element: <Contact/>
         }
      ]
   },
   
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={AppRouter} />);



