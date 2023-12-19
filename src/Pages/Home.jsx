import React from "react";
import Sidebar from "../Components/Sidebar/Sidebar";
import PopularCommunities from "../Components/Communities/PopularCommunities";
import Card from "../Components/Main/Card";
const Home = () => {
  return (
    <div>
      <div className="flex flex-row justify-between overflow-hidden h-screen ">
        <Sidebar />
        <Card />
        <PopularCommunities />
      </div>
    </div>
  );
};

export default Home;
