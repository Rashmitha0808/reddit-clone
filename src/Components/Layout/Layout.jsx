import React, { useEffect, useState } from "react";
import Nav from "../Navbar/Nav";
import Sidebar from "../Sidebar/Sidebar";
import PopularCommunities from "../Communities/PopularCommunities";
import { useDispatch, useSelector } from "react-redux";
import { isUserLoggedIn } from "../../store/UserSlice";

const Layout = ({ children }) => {
  const { authenticated } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(isUserLoggedIn());
  }, []);
  return (
    <>
      <Nav />
      <div
        className={`flex flex-row justify-between overflow-hidden mt-16 h-[calc(100vh-4rem)] ${
          authenticated ? "bg-[#DAE0E6]" : "bg-white"
        }`}
      >
        {!authenticated && <Sidebar />}
        <div className="overflow-y-auto m-auto h-full max-w-full ">
          {children}
        </div>
        {!authenticated && <PopularCommunities />}
      </div>
    </>
  );
};

export default Layout;
// div fixed will work still need to check with the footer or the hght need to adjust
