import React, { useEffect, useState } from "react";
import Sidebar from "../Components/Sidebar/Sidebar";
import PopularCommunities from "../Components/Communities/PopularCommunities";
import Card from "../Components/Main/Card";
import Main from "../Components/Main/Main";
import LoginPage from "../Components/LogInSignUp/LoginPage";
import SignUp from "../Components/LogInSignUp/SignUp";
import Post from "./Post/Post";
import { useDispatch, useSelector } from "react-redux";
import { isUserLoggedIn } from "../store/UserSlice";
import { useNavigate } from "react-router-dom";
import Footer from "../Components/Foot/Footer";
import FrontpageSidebar from "../Components/Sidebar/FrontpageSidebar";
const Home = () => {
  const { authenticated } = useSelector((state) => state.user);

  return (
    <div className="home flex flex-row max-w-full gap-6">
      <Main />
      {authenticated && <FrontpageSidebar />}
    </div>
  );
};

export default Home;
