import React from "react";
import Sidebar from "../Components/Sidebar/Sidebar";
import PopularCommunities from "../Components/Communities/PopularCommunities";
import Card from "../Components/Main/Card";
import Main from "../Components/Main/Main";
const Home = () => {
  return (
    <div>
      {/* overflow-hidden h-screen */}
      <div className="flex flex-row justify-between overflow-hidden h-screen">
        <Sidebar />
        <Main />
        <PopularCommunities />
      </div>
    </div>
  );
};

export default Home;
