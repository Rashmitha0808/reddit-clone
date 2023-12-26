import React from "react";
import Sidebar from "../Components/Sidebar/Sidebar";
import PopularCommunities from "../Components/Communities/PopularCommunities";
import Card from "../Components/Main/Card";
import Main from "../Components/Main/Main";
import LoginPage from "../Components/LogInSignUp/LoginPage";
import SignUp from "../Components/LogInSignUp/SignUp";
const Home = () => {
  return (
    <div>
      {/* overflow-hidden h-screen */}
      {/* <Main /> */}
      {/* <LoginPage /> */}
      <SignUp />
    </div>
  );
};

export default Home;
