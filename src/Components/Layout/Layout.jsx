import React, { useState } from "react";
import Nav from "../Navbar/Nav";
import Sidebar from "../Sidebar/Sidebar";
import PopularCommunities from "../Communities/PopularCommunities";

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <div className="flex flex-row justify-between overflow-hidden mt-16 h-[calc(100vh-4rem)]">
        <Sidebar />
        <div className=" overflow-y-auto ">{children}</div>
        <PopularCommunities />
      </div>
    </>
  );
};

export default Layout;
// div fixed will work still need to check with the footer or the hght need to adjust
