import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import "./index.css";
import RootElement from './components/root/root';
import Home from './components/home/home';
import Applied from './components/AppliedJobs/applied';
import Blogs from './components/Blogs/blogs';

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootElement></RootElement>,
    children: [
      {
        path: "/",
        element: <Home></Home>},

        {
          path: "/Applied",
        element: <Applied></Applied>
        },
       {
        path: "/Blogs",
        element: <Blogs></Blogs>

       }
      
    ]
  },

]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
