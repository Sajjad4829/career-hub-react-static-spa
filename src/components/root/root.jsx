import React from "react";

import { Outlet } from "react-router-dom";
import Footer from "../../footer/footer";
import Header from "../header/header";

const RootElement = () => {
  return (
    <div>
      <div className=" max-w-6xl mx-auto ">
        <Header />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default RootElement;
